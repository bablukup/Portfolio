import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export const useEmailJS = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const sendEmail = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Get EmailJS configuration from environment variables
      const config: EmailJSConfig = {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || process.env.EMAILJS_SERVICE_ID || "your_service_id",
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || process.env.EMAILJS_TEMPLATE_ID || "your_template_id",
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || process.env.EMAILJS_PUBLIC_KEY || "your_public_key"
      };

      // Dynamically import EmailJS
      const emailjs = await import("@emailjs/browser");

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Bablu Kumar",
      };

      await emailjs.send(
        config.serviceId,
        config.templateId,
        templateParams,
        config.publicKey
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      return { success: true };
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    sendEmail,
    isSubmitting,
  };
};
