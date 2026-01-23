import { motion } from "framer-motion";
import { Scissors, Sparkles, Heart, Droplets, Eye, Brush, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import serviceHair from "@/assets/service-hair.jpg";
import serviceSkin from "@/assets/service-skin.jpg";
import serviceBeauty from "@/assets/service-beauty.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const hairServices = [
  { name: "Haircut & Styling", description: "Precision cuts tailored to your face shape", icon: Scissors },
  { name: "Hair Coloring", description: "Full color, highlights, balayage & more", icon: Brush },
  { name: "Hair Treatments", description: "Keratin, deep conditioning & repair", icon: Sparkles },
  { name: "Hair Spa", description: "Relaxing scalp massage & nourishment", icon: Heart },
];

const skinServices = [
  { name: "Facial Treatments", description: "Classic, gold, diamond & anti-aging facials", icon: Sparkles },
  { name: "Skin Peels", description: "Chemical peels for rejuvenation", icon: Droplets },
  { name: "Cleanup & Glow", description: "Deep cleansing & instant glow treatments", icon: Star },
  { name: "Acne Treatment", description: "Targeted solutions for clear skin", icon: Eye },
];

const beautyServices = [
  { name: "Bridal Makeup", description: "Complete bridal & party makeup", icon: Heart },
  { name: "Manicure & Pedicure", description: "Nail care with polish & spa treatments", icon: Sparkles },
  { name: "Threading & Waxing", description: "Professional hair removal services", icon: Scissors },
  { name: "Mehendi & Art", description: "Traditional & modern henna designs", icon: Brush },
];

const ServiceCategory = ({
  id,
  title,
  description,
  services,
  image,
  reverse = false,
}: {
  id: string;
  title: string;
  description: string;
  services: { name: string; description: string; icon: typeof Scissors }[];
  image: string;
  reverse?: boolean;
}) => (
  <section id={id} className="section-padding scroll-mt-24">
    <div className="container-custom">
      <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
        <motion.div
          initial={{ opacity: 0, x: reverse ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={reverse ? "lg:order-2" : ""}
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground mb-8">{description}</p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-luxury transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: reverse ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`relative ${reverse ? "lg:order-1" : ""}`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-luxury-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => {
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
              What We Offer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-4 mb-6">
              Premium <span className="text-teal">Salon Services</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover our comprehensive range of hair, skin, and beauty services delivered by expert stylists in a luxurious environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <ServiceCategory
        id="hair"
        title="Hair Services"
        description="Transform your look with our expert hair services. From precision cuts to stunning color transformations, our skilled stylists create looks that complement your unique style."
        services={hairServices}
        image={serviceHair}
      />
      
      <div className="bg-secondary">
        <ServiceCategory
          id="skin"
          title="Skin Treatments"
          description="Reveal your natural radiance with our advanced skin treatments. Our estheticians use premium products and techniques to address all skin concerns."
          services={skinServices}
          image={serviceSkin}
          reverse
        />
      </div>
      
      <ServiceCategory
        id="beauty"
        title="Beauty & Grooming"
        description="Complete your transformation with our comprehensive beauty and grooming services. From bridal makeup to everyday elegance, we've got you covered."
        services={beautyServices}
        image={serviceBeauty}
      />

      {/* CTA */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
              Ready to Experience Our Services?
            </h2>
            <p className="text-primary-foreground/70 mb-8">
              Book your appointment today and let our experts take care of your beauty needs.
            </p>
            <Link to="/booking">
              <Button variant="gold" size="xl">
                Book Your Appointment
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
