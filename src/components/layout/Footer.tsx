import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-teal tracking-wider">TBC</span>
              <span className="text-sm font-semibold text-magenta tracking-[0.3em]">SALON</span>
              <span className="text-xs text-primary-foreground/60 mt-1">Since 2006</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              A premier unisex salon offering professional hair, skin, and beauty services with expert stylists delivering personalized care.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/tbcsalonmadhapur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-magenta transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "About Us", path: "/about" },
                { name: "Reviews", path: "/reviews" },
                { name: "Book Now", path: "/booking" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-teal transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-semibold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Next to Huber and Holly, VIP Hills, Silicon Valley, Madhapur, Hyderabad, Telangana 500081
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal flex-shrink-0" />
                <a href="tel:09063499799" className="text-primary-foreground/70 hover:text-teal transition-colors text-sm">
                  090634 99799
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  info@tbcsalon.com
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-semibold">Business Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-teal flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground/90">Mon - Sat</p>
                  <p className="text-primary-foreground/70">10:00 AM - 9:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-teal flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground/90">Sunday</p>
                  <p className="text-primary-foreground/70">10:00 AM - 7:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} TBC Salon Madhapur. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gold">★</span>
              <span className="text-primary-foreground/70">4.8 Rating</span>
              <span className="text-primary-foreground/40">•</span>
              <span className="text-primary-foreground/70">200+ Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
