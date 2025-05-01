"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="container px-4 mx-auto w-full sm:px-6 lg:px-8 max-w-[85rem] grid md:grid-cols-2 gap-12 py-24">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 dark:bg-emerald-900/30 rounded-full mb-4"
        >
          <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Join 10,000+ savvy savers
          </span>
        </motion.div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
          Take Control of Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">
            Financial Life
          </span>
        </h1>

        <p className="text-lg mt-6 text-muted-foreground leading-relaxed max-w-lg">
          AI-powered insights help you save smarter, spend wisely, and grow your
          wealth automatically.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Button size="lg" className="gap-2 group transition-all" asChild>
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              Get Started Free
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </motion.a>
          </Button>

          <Button variant="outline" size="lg" className="border-2">
            <motion.div whileHover={{ scale: 1.03 }}>
              See How It Works →
            </motion.div>
          </Button>
        </div>

        <div className="mt-12 flex items-center gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                delay: i * 0.2,
              }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-white dark:border-gray-900 shadow-sm" />
            </motion.div>
          ))}
          <span className="text-sm text-muted-foreground">
            Trusted by financial experts
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="relative"
      >
        <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl -z-10" />
        <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-secondary/10 blur-3xl -z-10" />

        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:20px_20px] opacity-10" />

          {/* Dashboard mockup */}
          <div className="relative bg-white dark:bg-gray-950 rounded-lg h-80 shadow-inner overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                className="w-48 h-48 rounded-full border-2 border-dashed border-primary/20"
              />
            </div>

            {/* Animated chart bars */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 flex items-end gap-1 px-4">
              {[30, 60, 45, 80, 50, 90, 70].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{
                    delay: 0.5 + i * 0.1,
                    duration: 0.8,
                    type: "spring",
                  }}
                  className="w-full bg-gradient-to-t from-primary to-emerald-400 rounded-t-sm"
                />
              ))}
            </div>
          </div>

          {/* Floating helper */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -bottom-5 -right-5 bg-primary rounded-full p-3 shadow-lg border-4 border-white dark:border-gray-900"
          >
            <Sparkles className="text-white" size={24} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
