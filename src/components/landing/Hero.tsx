"use client";

import {
  ArrowRightIcon,
  ChevronRightIcon,
  SparklesIcon,
  TrendingUpIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 to-transparent opacity-40 dark:opacity-20" />
        <div className="absolute right-0 top-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/5 to-transparent opacity-40 dark:opacity-20 h-full w-full" />
      </div>

      <div className="container px-4 mx-auto w-full sm:px-6 lg:px-8 max-w-[85rem] grid md:grid-cols-2 gap-12 py-24 md:py-32">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 dark:bg-emerald-900/30 rounded-full mb-6 w-fit"
          >
            <TrendingUpIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
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

          <p className="text-lg md:text-xl mt-6 text-muted-foreground leading-relaxed max-w-lg">
            AI-powered insights help you save smarter, spend wisely, and grow
            your wealth automatically.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button size="lg" className="gap-2 group" asChild>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center"
              >
                Get Started Free
                <ArrowRightIcon
                  className="group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </motion.a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group border-2"
              asChild
            >
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-1"
              >
                See How It Works
                <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </Button>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    delay: i * 0.2,
                  }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-white dark:border-gray-900 shadow-sm"
                />
              ))}
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Trusted by financial experts
              </p>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="text-xs ml-1 text-muted-foreground">
                  4.9/5
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Floating gradient blobs */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl -z-10" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-secondary/10 blur-3xl -z-10" />

          {/* Dashboard card */}
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden">
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:20px_20px] opacity-10 dark:opacity-5" />

            {/* Dashboard mockup */}
            <div className="relative bg-white dark:bg-gray-950 rounded-lg h-80 shadow-inner overflow-hidden">
              {/* Animated circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                  }}
                  className="w-48 h-48 rounded-full border-2 border-dashed border-primary/20"
                />
              </div>

              {/* Animated chart bars */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 flex items-end gap-1.5 px-4">
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
                    className={cn(
                      "w-full rounded-t-sm",
                      i % 2 === 0
                        ? "bg-gradient-to-t from-primary to-emerald-400"
                        : "bg-gradient-to-t from-secondary to-purple-400"
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Floating AI assistant */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -right-5 bg-primary rounded-full p-3 shadow-lg border-4 border-white dark:border-gray-900"
            >
              <SparklesIcon className="text-white" size={24} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}
