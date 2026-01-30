import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Layout from "@/components/layout/Layout";

import salonInterior1 from "@/assets/gallery/salon-interior-1.png";
import salonInterior2 from "@/assets/gallery/salon-interior-2.png";
import salonInterior3 from "@/assets/gallery/salon-interior-3.png";
import salonInterior4 from "@/assets/gallery/salon-interior-4.png";
import salonInterior5 from "@/assets/gallery/salon-interior-5.png";
import salonInterior6 from "@/assets/gallery/salon-interior-6.png";
import salonInterior7 from "@/assets/gallery/salon-interior-7.png";
import salonInterior8 from "@/assets/gallery/salon-interior-8.png";

const galleryImages = [
  {
    src: salonInterior1,
    alt: "TBC Salon - Modern Styling Station",
    category: "Interior",
  },
  {
    src: salonInterior2,
    alt: "TBC Salon - Premium Hair Styling Area",
    category: "Styling",
  },
  {
    src: salonInterior3,
    alt: "TBC Salon - Comfortable Salon Chairs",
    category: "Interior",
  },
  {
    src: salonInterior4,
    alt: "TBC Salon - Pedicure & Spa Area",
    category: "Spa",
  },
  {
    src: salonInterior5,
    alt: "TBC Salon - Modern Interior Design",
    category: "Interior",
  },
  {
    src: salonInterior6,
    alt: "TBC Salon - Luxury Styling Stations",
    category: "Styling",
  },
  {
    src: salonInterior7,
    alt: "TBC Salon - Salon Exterior View",
    category: "Exterior",
  },
  {
    src: salonInterior8,
    alt: "TBC Salon - Welcoming Entrance",
    category: "Exterior",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Interior", "Styling", "Spa", "Exterior"];

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-cream to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Space
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-6">
              Salon <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Take a virtual tour of our modern, luxurious salon space designed
              for your comfort and relaxation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 border-b border-border">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-luxury hover:shadow-luxury-lg transition-all duration-500"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full mb-2">
                      {image.category}
                    </span>
                    <p className="text-primary-foreground text-sm font-medium">
                      {image.alt}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-primary-foreground/90 rounded-full flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-charcoal" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 w-12 h-12 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-primary-foreground" />
            </motion.button>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              src={selectedImage}
              alt="Gallery image enlarged"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal to-primary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
              Experience Our Space In Person
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Book your appointment today and experience the luxury of TBC Salon
              firsthand.
            </p>
            <a
              href="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-charcoal font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book Your Visit
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
