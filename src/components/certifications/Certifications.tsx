'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ExternalLink, Maximize2, X, Award } from 'lucide-react';
import { certifications, type Certification } from './data';
import { motion, AnimatePresence } from 'framer-motion';

type Lightbox = {
  src: string;
  title: string;
};

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState<Lightbox | null>(null);

  return (
    <div className="w-full space-y-8">
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[140] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative w-full max-w-6xl h-[80vh] overflow-hidden rounded-3xl bg-black/40 shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                type="button"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transition hover:shadow-purple-500/50"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-5 w-5" />
              </motion.button>
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="flex items-start gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <Award className="h-5 w-5" />
        </motion.div>
        <div>
          <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400 font-semibold">
            Certifications
          </p>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent text-cinematic-lg">
            Proof of learning & cloud/AI credentials
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 text-cinematic">
            Tap a card to zoom; links become active once certificate URLs are added.
          </p>
        </div>
      </motion.div>

      <motion.div 
        className="grid gap-6 md:grid-cols-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {certifications.map((cert: Certification, index: number) => (
          <motion.article
            key={`${cert.provider}-${cert.title}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/80 dark:bg-neutral-900/70 shadow-cinematic hover:shadow-cinematic-lg transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 dark:hover:border-purple-500/50 backdrop-blur-sm"
          >
            <div className="relative h-52 w-full bg-neutral-100 dark:bg-neutral-900">
              {cert.imageSrc ? (
                <Image
                  src={cert.imageSrc}
                  alt={cert.title}
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="cursor-zoom-in object-contain"
                  onClick={() =>
                    setSelectedImage({ src: cert.imageSrc!, title: cert.title })
                  }
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-neutral-500 dark:text-neutral-400">
                  Certificate preview coming soon
                </div>
              )}
            </div>

            <div className="space-y-3 px-5 py-4">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400 font-semibold">
                    {cert.provider}
                  </p>
                  <h3 className="text-lg font-bold leading-tight bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent text-cinematic">
                    {cert.title}
                  </h3>
                </div>
                {cert.date && (
                  <span className="shrink-0 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 px-3 py-1 text-xs text-neutral-700 dark:text-neutral-200 font-semibold border border-purple-200/50 dark:border-purple-500/30">
                    {cert.date}
                  </span>
                )}
              </div>

              {cert.description && (
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 text-cinematic">
                  {cert.description}
                </p>
              )}

              <div className="flex flex-wrap gap-2">
                {cert.credentialUrl ? (
                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1.5 text-xs font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    View certificate
                  </motion.a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                    Add URL to enable link
                  </span>
                )}

                {cert.imageSrc && (
                  <motion.button
                    type="button"
                    onClick={() =>
                      setSelectedImage({ src: cert.imageSrc!, title: cert.title })
                    }
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 px-4 py-1.5 text-xs font-bold text-neutral-700 transition-all duration-300 hover:shadow-lg dark:text-neutral-200 border border-purple-200/50 dark:border-purple-500/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Maximize2 className="h-4 w-4" />
                    Fullscreen
                  </motion.button>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
};

export default Certifications;
