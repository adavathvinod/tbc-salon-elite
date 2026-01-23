import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Amazing haircut and welcoming staff! The stylist understood exactly what I wanted. Will definitely be coming back!",
    service: "Hair Styling",
  },
  {
    name: "Rahul Verma",
    rating: 5,
    text: "Great salon experience and excellent skin treatment. The facial left my skin feeling so fresh and rejuvenated.",
    service: "Facial Treatment",
  },
  {
    name: "Anjali Reddy",
    rating: 5,
    text: "Customer service at its best! The team is professional and friendly. Love my new hair color!",
    service: "Hair Coloring",
  },
  {
    name: "Vikram Singh",
    rating: 5,
    text: "Best grooming experience in Madhapur. Clean, hygienic, and the staff really knows their craft.",
    service: "Grooming",
  },
  {
    name: "Sneha Patel",
    rating: 5,
    text: "Had my bridal makeup done here and it was absolutely stunning! Received so many compliments.",
    service: "Bridal Makeup",
  },
  {
    name: "Arjun Kumar",
    rating: 4,
    text: "Very professional service. The hair spa was incredibly relaxing. Prices are reasonable for the quality.",
    service: "Hair Spa",
  },
  {
    name: "Meera Krishnan",
    rating: 5,
    text: "The attention to detail is impressive. They use quality products and the results speak for themselves.",
    service: "Skin Treatment",
  },
  {
    name: "Sanjay Rao",
    rating: 5,
    text: "Been coming here for years. Consistent quality and the staff remembers your preferences. Highly recommend!",
    service: "Regular Customer",
  },
];

const ReviewCard = ({
  name,
  rating,
  text,
  service,
  index,
}: {
  name: string;
  rating: number;
  text: string;
  service: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="review-card relative"
  >
    <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-gold fill-gold" : "text-muted-foreground"}`}
        />
      ))}
    </div>
    <p className="text-foreground mb-6 leading-relaxed">"{text}"</p>
    <div className="flex items-center justify-between">
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{service}</p>
      </div>
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <span className="text-primary font-semibold text-sm">
          {name.charAt(0)}
        </span>
      </div>
    </div>
  </motion.div>
);

const Reviews = () => {
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
              Client Testimonials
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-4 mb-6">
              What Our <span className="text-teal">Clients Say</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Don't just take our word for it. Here's what our valued clients have to say about their experience at TBC Salon.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            <div className="text-center px-8 py-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-6 h-6 text-gold fill-gold" />
                <span className="text-4xl font-serif font-bold text-foreground">4.8</span>
              </div>
              <p className="text-muted-foreground text-sm">Google Rating</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-border self-center" />
            <div className="text-center px-8 py-4">
              <span className="text-4xl font-serif font-bold text-foreground">200+</span>
              <p className="text-muted-foreground text-sm">Happy Reviews</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-border self-center" />
            <div className="text-center px-8 py-4">
              <span className="text-4xl font-serif font-bold text-foreground">2006</span>
              <p className="text-muted-foreground text-sm">Established</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard key={review.name} {...review} index={index} />
            ))}
          </div>

          {/* Google Reviews Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-8 rounded-2xl bg-secondary"
          >
            <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
              See More Reviews on Google
            </h3>
            <a
              href="https://www.google.com/search?q=TBC+Salon+Madhapur+reviews"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                View Google Reviews
              </Button>
            </a>
          </motion.div>
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
              Ready to Join Our Happy Clients?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Experience the TBC difference and become part of our growing family of satisfied customers.
            </p>
            <Link to="/booking">
              <Button variant="gold" size="xl">
                Book Your Visit Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
