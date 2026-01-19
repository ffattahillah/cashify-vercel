"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md rounded-3xl p-1"
        style={{
          background: "linear-gradient(145deg, #e6e6e6, #ffffff)",
          boxShadow: `
            12px 12px 24px rgba(174, 174, 192, 0.2),
            -12px -12px 24px rgba(255, 255, 255, 0.9),
            inset 1px 1px 2px rgba(255, 255, 255, 0.3)
          `
        }}
      >
        {/* Container utama dengan efek neumorphism */}
        <div className="rounded-3xl p-6"
          style={{
            background: "linear-gradient(145deg, #f0f0f3, #ffffff)",
            boxShadow: `
              inset 4px 4px 8px rgba(174, 174, 192, 0.1),
              inset -4px -4px 8px rgba(255, 255, 255, 0.9)
            `
          }}
        >
          {/* Header dengan efek fluffy */}
          <div className="text-center mb-8">
            <motion.div 
              className="mx-auto mb-6 h-24 w-24 rounded-full flex items-center justify-center relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              style={{
                background: "linear-gradient(145deg, #ffffff, #e8e8e8)",
                boxShadow: `
                  8px 8px 16px rgba(174, 174, 192, 0.25),
                  -8px -8px 16px rgba(255, 255, 255, 0.8),
                  inset 2px 2px 4px rgba(255, 255, 255, 0.5)
                `
              }}
            >
              <div className="absolute inset-2 rounded-full"
                style={{
                  background: "linear-gradient(145deg, #f5f5fa, #ffffff)",
                  boxShadow: `
                    inset 3px 3px 6px rgba(174, 174, 192, 0.1),
                    inset -3px -3px 6px rgba(255, 255, 255, 0.8)
                  `
                }}
              >
                <Heart className="h-10 w-10 text-pink-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
                  fill="currentColor" 
                  style={{
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))"
                  }}
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2"
              >
                <Sparkles className="h-6 w-6 text-blue-300 absolute top-0 left-1/2" />
                <Sparkles className="h-5 w-5 text-purple-300 absolute bottom-2 right-2" />
              </motion.div>
            </motion.div>
            
            <div className="rounded-2xl p-4 mb-4 inline-block"
              style={{
                background: "linear-gradient(145deg, #ffffff, #f0f0f3)",
                boxShadow: `
                  6px 6px 12px rgba(174, 174, 192, 0.15),
                  -6px -6px 12px rgba(255, 255, 255, 0.8)
                `
              }}
            >
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Donasi untuk Andrea Rey
              </h1>
              <p className="text-sm text-gray-600 mt-2">
                Dukung karya & aktivitas saya
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="rounded-2xl p-5"
              style={{
                background: "linear-gradient(145deg, #f5f5fa, #ffffff)",
                boxShadow: `
                  inset 2px 2px 4px rgba(255, 255, 255, 0.8),
                  inset -2px -2px 4px rgba(174, 174, 192, 0.1)
                `
              }}
            >
              <p className="text-gray-700 leading-relaxed text-center">
                Donasi Anda akan sangat berarti untuk mendukung keberlanjutan
                karya dan pengembangan sistem yang sedang saya bangun.
              </p>
            </div>

            {/* CTA Button dengan efek fluffy */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-2xl blur-sm opacity-50"
                style={{
                  background: "linear-gradient(45deg, #a8a8c9, #f0f0f3, #ffffff, #a8a8c9)",
                  backgroundSize: "400% 400%",
                  animation: "gradient 3s ease infinite"
                }}
              />
              
              <motion.a
                href="/donasi"
                className="block w-full text-center rounded-2xl py-4 px-6 relative overflow-hidden group"
                style={{
                  background: "linear-gradient(145deg, #ffffff, #f0f0f3)",
                  boxShadow: `
                    8px 8px 16px rgba(174, 174, 192, 0.2),
                    -8px -8px 16px rgba(255, 255, 255, 0.9)
                  `
                }}
                whileTap={{
                  boxShadow: `
                    inset 4px 4px 8px rgba(174, 174, 192, 0.2),
                    inset -4px -4px 8px rgba(255, 255, 255, 0.8)
                  `
                }}
              >
                <span className="text-lg font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Donasi via QRIS
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.a>
            </motion.div>

            <div className="rounded-xl p-3 text-center"
              style={{
                background: "linear-gradient(145deg, #f8f8fa, #ffffff)",
                boxShadow: `
                  4px 4px 8px rgba(174, 174, 192, 0.1),
                  -4px -4px 8px rgba(255, 255, 255, 0.8)
                `
              }}
            >
              <p className="text-xs text-gray-500">
                Pembayaran aman melalui QRIS Indonesia
              </p>
            </div>
          </div>

          {/* Dekorasi tambahan */}
          <div className="flex justify-center space-x-2 mt-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="h-2 w-2 rounded-full"
                style={{
                  background: "linear-gradient(145deg, #ffffff, #e8e8e8)",
                  boxShadow: `
                    2px 2px 4px rgba(174, 174, 192, 0.2),
                    -2px -2px 4px rgba(255, 255, 255, 0.8)
                  `
                }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Tambahkan keyframes untuk animasi gradient */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </main>
  );
}
