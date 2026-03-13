"use client";

import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function EnquiryModal({ open, onClose, tank }) {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [fields, setFields] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!fields.name.trim()) newErrors.name = "Please enter your name";
    if (!fields.phone.trim()) newErrors.phone = "Please enter your phone number";
    if (!fields.email.trim()) newErrors.email = "Please enter your email";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const emailjsModule = await import("@emailjs/browser");
      const result = await emailjsModule.default.sendForm(
        "service_nyo9717",
        "template_lqh6rse",
        form.current,
        "PlnxkEthyMpuKG_kJ"
      );

      if (result.text === "OK") {
        setSubmitStatus({
          type: "success",
          message: "Enquiry sent! The seller will contact you soon.",
        });
        setFields({ name: "", phone: "", email: "", message: "" });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "Something went wrong. Please call us directly at (04) 5766 3939.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (isOpen) => {
    if (!isOpen) {
      onClose();
      setSubmitStatus({ type: "", message: "" });
      setErrors({});
    }
  };

  if (!tank) return null;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Enquire About This Tank</DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
            {tank.title}
          </DialogDescription>
        </DialogHeader>

        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
          {/* Hidden fields for EmailJS template */}
          <input type="hidden" name="tank_id" value={tank.id} />
          <input type="hidden" name="tank_title" value={tank.title} />

          <div>
            <Label htmlFor="enq-name">Name *</Label>
            <Input
              id="enq-name"
              name="name"
              placeholder="Your name"
              value={fields.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <Label htmlFor="enq-phone">Phone *</Label>
            <Input
              id="enq-phone"
              name="phone"
              type="tel"
              placeholder="(04) 1234 5678"
              value={fields.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <Label htmlFor="enq-email">Email *</Label>
            <Input
              id="enq-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={fields.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <Label htmlFor="enq-message">Message</Label>
            <Textarea
              id="enq-message"
              name="message"
              placeholder={`I'm interested in "${tank.title}"...`}
              value={
                fields.message ||
                `Hi, I'm interested in the "${tank.title}" listed on Duckaroo. Could you please provide more details?`
              }
              onChange={handleChange}
              className="min-h-[100px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Enquiry"
            )}
          </Button>

          {submitStatus.type && (
            <div
              className={`p-3 rounded-lg flex items-center gap-2 ${
                submitStatus.type === "success"
                  ? "bg-green-50 border border-green-200"
                  : "bg-red-50 border border-red-200"
              }`}
            >
              {submitStatus.type === "success" ? (
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
              )}
              <p
                className={`text-sm ${
                  submitStatus.type === "success"
                    ? "text-green-700"
                    : "text-red-700"
                }`}
              >
                {submitStatus.message}
              </p>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
