import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Instagram, ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Next to Huber and Holly, VIP Hills, Silicon Valley, Madhapur, Hyderabad, Telangana 500081",
    link: "https://maps.google.com/?q=VIP+Hills+Silicon+Valley+Madhapur+Hyderabad",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "090634 99799",
    link: "tel:09063499799",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@tbcsalon.com",
    link: "mailto:info@tbcsalon.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@tbcsalonmadhapur",
    link: "https://www.instagram.com/tbcsalonmadhapur",
  },
];

const businessHours = [
  { day: "Monday", hours: "10:00 AM - 9:00 PM" },
  { day: "Tuesday", hours: "10:00 AM - 9:00 PM" },
  { day: "Wednesday", hours: "10:00 AM - 9:00 PM" },
  { day: "Thursday", hours: "10:00 AM - 9:00 PM" },
  { day: "Friday", hours: "10:00 AM - 9:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 9:00 PM" },
  { day: "Sunday", hours: "10:00 AM - 7:00 PM" },
];

const Contact = () => {
  const today = new Date().getDay();

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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-4 mb-6">
              Contact <span className="text-teal">Us</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Have questions or want to book an appointment? We're here to help!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8">
                Visit Our Salon
              </h2>
              
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-luxury transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="tel:09063499799">
                  <Button variant="hero" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </a>
                <a href="https://wa.me/919063499799" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-8 rounded-2xl bg-card border border-border shadow-luxury">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    Business Hours
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {businessHours.map((item, index) => {
                    const isToday = (today === 0 && index === 6) || (today !== 0 && index === today - 1) || (today === 0 ? index === 6 : index === today - 1);
                    const dayIndex = index === 6 ? 0 : index + 1;
                    const isTodayActual = dayIndex === today;
                    
                    return (
                      <div
                        key={item.day}
                        className={`flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${
                          isTodayActual ? "bg-primary/10" : "hover:bg-muted"
                        }`}
                      >
                        <span className={`font-medium ${isTodayActual ? "text-primary" : "text-foreground"}`}>
                          {item.day}
                          {isTodayActual && (
                            <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                              Today
                            </span>
                          )}
                        </span>
                        <span className="text-muted-foreground">{item.hours}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Find Us on the Map
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-luxury-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4!2d78.3869!3d17.4489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzU2LjAiTiA3OMKwMjMnMTIuOCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TBC Salon Location"
              className="w-full"
            />
          </motion.div>
          
          <div className="text-center mt-8">
            <a
              href="https://maps.google.com/?q=VIP+Hills+Silicon+Valley+Madhapur+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-teal to-teal-dark">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
              Ready to Book Your Visit?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Schedule your appointment online and skip the wait.
            </p>
            <Link to="/booking">
              <Button variant="gold" size="xl">
                Book Appointment
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
