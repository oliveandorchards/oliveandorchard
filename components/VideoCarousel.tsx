'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
}

interface VideoCarouselProps {
  videos: VideoItem[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollTimer = useRef<NodeJS.Timeout | null>(null);

  // Determine responsiveness settings
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const maxIndex = Math.max(0, videos.length - visibleItems);

  // Ensure index stays in bounds if visibleItems changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleItems, maxIndex, currentIndex]);

  // Handle auto-scroll
  useEffect(() => {
    if (isPaused) {
      if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
      return;
    }

    autoScrollTimer.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000); // Scroll every 4 seconds

    return () => {
      if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
    };
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div 
      className="relative w-full max-w-6xl mx-auto px-4 py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Viewport */}
      <div className="overflow-hidden rounded-3xl relative p-4 bg-black/40 backdrop-blur-sm border border-white/5">
        <div 
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ 
            transform: `translate3d(-${currentIndex * (100 / videos.length)}%, 0, 0)`,
            width: `${(videos.length / visibleItems) * 100}%` 
          }}
        >
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="px-3 flex-shrink-0"
              style={{ width: `${100 / videos.length}%` }}
            >
              <motion.div 
                className="relative overflow-hidden rounded-2xl bg-[#0f0f0f] border border-[#D4AF37]/20 hover:border-[#D4AF37]/80 shadow-[0_8px_30px_rgb(0,0,0,0.6)] group transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                whileHover={{ y: -8 }}
              >
                {/* Embed YouTube Short */}
                <div className="aspect-[9/16] w-full relative z-10">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?list=PLjpiGHnTxKSuuFX7okq-S_Y-war6C2fCM&mute=1&controls=1`}
                    title={video.title}
                    className="w-full h-full rounded-2xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 z-20 pointer-events-none transition-transform duration-300">
                  <h4 className="text-white font-playfair font-bold text-sm tracking-wide line-clamp-1 mb-0.5">
                    {video.title}
                  </h4>
                  <p className="text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">
                    Olive & Orchard
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      {maxIndex > 0 && (
        <>
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-[-15px] md:left-[-30px] top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full gold-gradient text-[#7A0F19] flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover-glow"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-[-15px] md:right-[-30px] top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full gold-gradient text-[#7A0F19] flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover-glow"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>
        </>
      )}

      {/* Pagination Indicators & Pause Indicator */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="text-gray-400 hover:text-[#D4AF37] transition-colors p-1"
          title={isPaused ? "Play Autoplay" : "Pause Autoplay"}
        >
          {isPaused ? <Play size={16} fill="currentColor" /> : <Pause size={16} fill="currentColor" />}
        </button>

        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx 
                  ? 'w-6 bg-[#D4AF37]' 
                  : 'w-2.5 bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
