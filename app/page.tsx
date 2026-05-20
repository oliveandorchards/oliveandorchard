'use client';

import { motion } from 'framer-motion';
import { Users, Building, Utensils, Car, Wind, Camera, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import VideoCarousel from '@/components/VideoCarousel';
import CTASection from '@/components/CTASection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getWhatsappUrl } from '@/lib/constants';

export default function Home() {
  const features = [
    {
      icon: <Users size={48} />,
      title: "Spacious Hall",
      description: "Accommodate up to 300 guests with comfortable seating and elegant ambiance",
      image: "https://content.jdmagicbox.com/v2/comp/chennai/u6/044pxx44.xx44.220224150559.d9u6/catalogue/olive-and-orchard-kodambakkam-chennai-banquet-halls-mqf5exf5nl.jpg"
    },
    {
      icon: <Building size={48} />,
      title: "Luxury Interiors",
      description: "Premium décor with modern amenities and sophisticated design elements",
      image: "https://cdn.venuelook.com/uploads/space_38868/1715169309_595x400.png"
    },
    {
      icon: <Utensils size={48} />,
      title: "Catering Support",
      description: "Full catering services with customizable menu options for all occasions",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033"
    },
    {
      icon: <Car size={48} />,
      title: "Parking Facility",
      description: "Ample parking space for 200+ vehicles with valet service available",
      image: "https://img.mandap.com/photos/pictures/009/086/413/new_large/unnamed-2025-11-07T151837.867.webp"
    },
    {
      icon: <Wind size={48} />,
      title: "AC Hall",
      description: "Climate-controlled environment with advanced air conditioning system",
      image: "https://subhikshaa.com/board/uploads/venues/824a1.jpg"
    },
    {
      icon: <Camera size={48} />,
      title: "Photography Friendly",
      description: "Perfect lighting and picturesque spots for memorable photographs",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a"
    }
  ];

  const shortVideos = [
    { id: "R7GEfdpZR4M", title: "✨ Sharmitha Pa Review" },
    { id: "kZ7OhLWhym8", title: "Birthday Celebration Review" },
    { id: "7jVuVw7Y-Eo", title: "Preethi Sanjiv Review" },
    { id: "eP8klOf8Ins", title: "Happy Client Testimonial" },
    { id: "6UlkBzuQNt8", title: "Delighted Family Review" },
    { id: "MQ0hq8nK8eo", title: "Vijay TV Bala Testimony" }
  ];

  const halls = [
    {
      name: "Orchard Hall",
      description: "Our grandest venue, perfect for major wedding ceremonies, receptions, and grand banquets.",
      capacity: "50 - 75 Pax",
      floor: "First Floor",
      image: "https://oliveandorchards.netlify.app/photos/2.jpeg"
    },
    {
      name: "Oak Hall",
      description: "An elegant setting featuring warm, sophisticated interiors, ideal for medium-sized celebrations and corporate meets.",
      capacity: "75 - 100 Pax",
      floor: "First Floor",
      image: "https://oliveandorchards.netlify.app/photos/oak-4.jpeg"
    },
    {
      name: "Olive Hall",
      description: "A cozy and modern hall designed for birthday bashes, intimate get-togethers, and family events.",
      capacity: "120 - 250 Pax",
      floor: "Second Floor",
      image: "https://imgcdn.bookmywed.in/UploadImages/venue/1b65f645-c7c4-4d7d-8a2e-4febab243580-gallery.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero logo="/olive-logo.png" />

      {/* Our Halls Section */}
      <section id="halls" className="py-24 bg-gradient-to-b from-black via-[#080808] to-black overflow-hidden border-b border-[#D4AF37]/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              Our Three <span className="text-[#D4AF37]">Themed Halls</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans leading-relaxed">
              Choose the perfect venue for your next milestone celebration. Each of our halls is crafted with bespoke designs and state-of-the-art amenities to make your day unforgettable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {halls.map((hall, index) => (
              <motion.div
                key={hall.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-[#0D0D0D] border border-white/10 hover:border-[#D4AF37]/50 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col h-full group"
              >
                {/* Image Container with Zoom effect */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={hall.image}
                    alt={hall.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Capacity Badge */}
                  <span className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 text-xs px-3 py-1.5 rounded-full font-semibold">
                    Capacity: {hall.capacity}
                  </span>

                  {/* Floor Badge */}
                  <span className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 text-xs px-3 py-1.5 rounded-full font-semibold">
                    {hall.floor}
                  </span>
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 font-playfair group-hover:text-[#D4AF37] transition-colors duration-300">
                    {hall.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                    {hall.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex gap-4 mt-auto">
                    <motion.a
                      href={getWhatsappUrl(`Hello, I would like to inquire about booking the ${hall.name}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 text-center border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#7A0F19] transition-all duration-300 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
                    >
                      Inquire
                    </motion.a>
                    <motion.a
                      href={`/gallery?category=${encodeURIComponent(hall.name.toLowerCase())}`}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 text-center bg-[#D4AF37]/10 hover:bg-[#D4AF37] border border-[#D4AF37]/30 text-[#D4AF37] hover:text-[#7A0F19] transition-all duration-300 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
                    >
                      View Photos
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              Why Choose <span className="text-[#D4AF37]">Olive & Orchard</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience luxury and elegance with our world-class facilities and exceptional service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ServiceCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#D4AF37]/20 blur-3xl"></div>
                <img
                  src="https://imgcdn.bookmywed.in/UploadImages/venue/1b65f645-c7c4-4d7d-8a2e-4febab243580-gallery.jpg"
                  alt="Luxury Banquet Hall"
                  className="rounded-2xl shadow-2xl relative z-10"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
                Creating <span className="text-[#D4AF37]">Timeless</span> Memories
              </h2>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                At Olive & Orchard Banquet Hall, we understand that every celebration is unique. 
                With over a decade of excellence in hosting memorable events, we've perfected the 
                art of creating magical experiences that last a lifetime.
              </p>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our commitment to excellence, attention to detail, and personalized service ensures 
                that your special day exceeds all expectations. From intimate gatherings to grand 
                celebrations, we're here to make your dreams come true.
              </p>

              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block gold-gradient text-[#7A0F19] px-8 py-3 rounded-full font-semibold hover-glow transition-all duration-300"
              >
                Learn More About Us
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              Our <span className="text-[#D4AF37]">Beautiful</span> Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Take a glimpse at the magical moments we've helped create
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://oliveandorchards.netlify.app/photos/19.jpeg",
              "https://oliveandorchards.netlify.app/photos/18.jpeg",
              "https://oliveandorchards.netlify.app/photos/20.jpeg",
              "https://oliveandorchards.netlify.app/photos/7.jpeg"
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Event ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.a
              href="/gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-[#7A0F19] transition-all duration-300"
            >
              View Full Gallery
            </motion.a>
          </div>
        </div>
      </section>

      {/* YouTube Shorts Carousel Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              Moments & <span className="text-[#D4AF37]">Celebrations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch beautiful memories and celebrations captured live at Olive & Orchard
            </p>
          </motion.div>

          <VideoCarousel videos={shortVideos} />
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
