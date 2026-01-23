import { motion } from "framer-motion";
import { Heart, Award, Users, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-salon.jpg";

const values = [
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Every client receives customized treatments tailored to their unique needs and preferences.",
  },
  {
    icon: Award,
    title: "Expert Stylists",
    description: "Our team of certified professionals brings years of experience and ongoing training.",
  },
  {
    icon: Users,
    title: "Inclusive Space",
    description: "A welcoming unisex salon where everyone feels comfortable and valued.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    description: "We use only the finest professional-grade products for exceptional results.",
  },
];

const About = () => {
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
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-4 mb-6">
              About <span className="text-teal">TBC Salon</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              A legacy of beauty, trust, and excellence since 2006.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Where <span className="text-teal">Beauty</span> Meets <span className="text-accent">Expertise</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  TBC Salon is a premier unisex salon located in the heart of Madhapur, Hyderabad. Since our establishment in 2006, we have been dedicated to providing exceptional hair, skin, and beauty services to our valued clients.
                </p>
                <p>
                  Our expert stylists and beauty professionals bring years of experience and a passion for their craft. We believe that every person deserves to look and feel their best, which is why we offer personalized consultations and treatments tailored to each individual.
                </p>
                <p>
                  At TBC Salon, we combine traditional expertise with modern techniques and premium products to deliver results that exceed expectations. Our salon provides a relaxing, luxurious environment where you can unwind while we work our magic.
                </p>
                <p>
                  Whether you're looking for a simple trim, a complete makeover, or a rejuvenating spa treatment, our team is here to make your vision a reality.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-luxury-lg">
                <img
                  src={heroImage}
                  alt="TBC Salon Interior"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 rounded-xl bg-card shadow-luxury border border-border">
                <div className="text-4xl font-serif font-bold text-primary">18+</div>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              What Sets Us Apart
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-luxury transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-8">
              Empowering Confidence Through Beauty
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              "Our mission is to provide exceptional beauty services in a welcoming environment, 
              helping every client discover their unique beauty and leave feeling confident, 
              refreshed, and ready to take on the world."
            </p>
          </motion.div>
        </div>
      </section>

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
              Experience the TBC Difference
            </h2>
            <p className="text-primary-foreground/70 mb-8">
              Visit us today and discover why thousands of clients trust us with their beauty needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/booking">
                <Button variant="gold" size="xl">
                  Book Appointment
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="xl">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
