import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Instagram } from "lucide-react";

const floatingButtons = [
  {
    icon: MapPin,
    label: "Directions",
    href: "https://www.google.com/maps/place/TBC+Salon+Madhapur/",
    color: "bg-red-500 hover:bg-red-600",
  },
  {
    icon: Phone,
    label: "Call",
    href: "tel:09063499799",
    color: "bg-teal hover:bg-teal-dark",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/919063499799",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/tbcsalonmadhapur",
    color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500",
  },
];

const FloatingIcons = () => {
  return (
    <div className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-50 flex flex-col gap-3">
      {floatingButtons.map((button, index) => (
        <motion.a
          key={button.label}
          href={button.href}
          target={button.href.startsWith("http") ? "_blank" : undefined}
          rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, scale: 0, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`floating-icon ${button.color} text-primary-foreground shadow-luxury-lg`}
          aria-label={button.label}
        >
          <button.icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  );
};

export default FloatingIcons;
