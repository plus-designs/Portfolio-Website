import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactMessageSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactMessageSchema.parse(req.body);

      // Create email transporter
      // For development, we'll use a test account from ethereal.email
      // In production, you would use real SMTP credentials
      let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.ethereal.email",
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // If no credentials provided, create a test account
      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        const testAccount = await nodemailer.createTestAccount();
        transporter = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          secure: false,
          auth: {
            user: testAccount.user,
            pass: testAccount.pass,
          },
        });
      }

      // Send email
      const info = await transporter.sendMail({
        from: `"Portfolio Contact Form" <${process.env.SMTP_USER || "noreply@portfolio.com"}>`,
        to: process.env.CONTACT_EMAIL || "hello@smmmanager.com",
        subject: `New Contact Form Submission from ${validatedData.name}`,
        text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Service: ${validatedData.service || "Not specified"}
Budget: ${validatedData.budget || "Not specified"}

Message:
${validatedData.message}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Service:</strong> ${validatedData.service || "Not specified"}</p>
          <p><strong>Budget:</strong> ${validatedData.budget || "Not specified"}</p>
          <h3>Message:</h3>
          <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
        `,
      });

      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      res.json({ 
        success: true, 
        message: "Your message has been sent successfully!",
        previewUrl: nodemailer.getTestMessageUrl(info)
      });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof Error && error.name === "ZodError") {
        res.status(400).json({ 
          success: false, 
          error: "Invalid form data. Please check your inputs." 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          error: "Failed to send message. Please try again later." 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
