"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="container grid md:grid-cols-2 gap-12 py-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Your Smartest <span className="text-primary">Financial Buddy</span> is
          Here
        </h1>
        <p className="text-lg mt-4 text-muted-foreground">
          Track spending, set goals, pay bills & grow savings — all in one
          place.
        </p>

        <div className="flex gap-4 mt-8">
          <Button size="lg" className="gap-2">
            Get Started Free
            <ArrowRight size={18} />
          </Button>
          <Button variant="outline" size="lg">
            See How It Works
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative"
      >
        {/* Dashboard preview image */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 border">
          <div className="h-64 bg-background rounded-md shadow-lg"></div>
        </div>

        {/* Animated avatar companion */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute -bottom-6 -right-6 bg-primary rounded-full p-3 shadow-lg"
        >
          <Sparkles className="text-white" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
