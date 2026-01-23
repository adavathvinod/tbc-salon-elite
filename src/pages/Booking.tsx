import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone, MessageSquare, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const services = [
  "Haircut & Styling",
  "Hair Coloring",
  "Hair Treatment",
  "Hair Spa",
  "Facial Treatment",
  "Skin Care",
  "Bridal Makeup",
  "Party Makeup",
  "Manicure",
  "Pedicure",
  "Threading & Waxing",
  "Other",
];

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
];

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Appointment Requested!",
      description: "We'll contact you shortly to confirm your booking.",
    });
  };

  const minDate = new Date().toISOString().split("T")[0];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-secondary to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Schedule Your Visit
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-4 mb-6">
              Book an <span className="text-teal">Appointment</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Reserve your spot and experience premium salon services. Our team will confirm your booking within hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                Booking Request Sent!
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Thank you for choosing TBC Salon. We'll contact you at {formData.phone} to confirm your appointment.
              </p>
              <Button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: "", phone: "", service: "", date: "", time: "", message: "" });
                }}
                variant="outline"
                size="lg"
              >
                Book Another Appointment
              </Button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-luxury"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <User className="w-4 h-4 text-primary" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="input-luxury"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Phone className="w-4 h-4 text-primary" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone"
                    className="input-luxury"
                  />
                </div>

                {/* Service */}
                <div className="space-y-2 md:col-span-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Select Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="input-luxury appearance-none cursor-pointer"
                  >
                    <option value="">Choose a service...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={minDate}
                    className="input-luxury"
                  />
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    Preferred Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="input-luxury appearance-none cursor-pointer"
                  >
                    <option value="">Select time...</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2 md:col-span-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any special requests or notes..."
                    className="input-luxury resize-none"
                  />
                </div>
              </div>

              <div className="mt-8">
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Request Appointment"
                  )}
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-6">
                We'll confirm your appointment via phone call within 2 hours.
              </p>
            </motion.form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
