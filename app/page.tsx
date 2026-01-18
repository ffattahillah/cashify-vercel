"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl overflow-hidden"
        style={{
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.08),
            0 4px 16px rgba(255, 255, 255, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.8)
          `
        }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-white/50 to-gray-100/50 p-6 text-center border-b border-white/40 backdrop-blur-sm">
          <motion.div 
            className="mx-auto mb-3 h-16 w-16 rounded-full bg-white/60 border border-white/40 flex items-center justify-center backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Heart className="h-8 w-8 text-gray-700" fill="currentColor" />
          </motion.div>
          <h1 className="text-lg font-semibold text-gray-800">
            Donasi untuk Andrea Rey
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Dukung karya & aktivitas saya
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <p className="text-sm text-gray-700 leading-relaxed">
            Donasi Anda akan sangat berarti untuk mendukung keberlanjutan
            karya dan pengembangan sistem yang sedang saya bangun.
          </p>

          {/* CTA */}
          <motion.a
            href="/donasi"
            whileTap={{ scale: 0.97 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="block w-full text-center rounded-xl bg-gradient-to-r from-white/80 to-gray-100/80 hover:from-white hover:to-gray-100 text-gray-800 font-medium py-3 transition-all duration-300 border border-white/50 shadow-lg relative overflow-hidden"
            style={{
              backdropFilter: "blur(10px)",
            }}
          >
            <span className="relative z-10">Donasi via QRIS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
          </motion.a>

          <p className="text-xs text-center text-gray-500">
            Pembayaran aman melalui QRIS Indonesia
          </p>
        </div>
      </motion.div>
    </main>
  );
}
