"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { BadgeCheck, Quote, Sparkles, TrendingUp } from "lucide-react";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Freelance Designer",
    content:
      "This app helped me save 30% more in just 3 months. The automatic budgeting features are a game-changer!",
    stats: "Saved $2,400/year",
    highlight: "Top Saver",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    content:
      "Finally a finance app that doesn't treat me like an accountant. The AI insights are incredibly helpful.",
    stats: "Reduced expenses by 22%",
    highlight: "Power User",
  },
  {
    name: "Emma Rodriguez",
    role: "Small Business Owner",
    content:
      "As someone who hates number-crunching, this app makes financial management actually enjoyable.",
    stats: "Paid off $8,000 debt",
    highlight: "Success Story",
  },
  {
    name: "David Wilson",
    role: "Financial Advisor",
    content:
      "I recommend this to all my clients. The visualization tools help people understand their finances better.",
    stats: "50+ clients onboarded",
    highlight: "Expert Choice",
  },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-950"
      id="testimonials"
    >
      <div className="mx-auto w-full max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Real User Stories
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 mb-4">
            Trusted by Financial Explorers
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands who transformed their financial lives
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Layout (3-column grid) */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="h-full">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">10,000+</div>
            <p className="text-sm text-muted-foreground">Active Users</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">4.9/5</div>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">$28M+</div>
            <p className="text-sm text-muted-foreground">Saved Annually</p>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{
          rotate: 360,
          x: [0, 10, 0],
          y: [0, -10, 0],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl -z-10"
      />
      <motion.div
        animate={{
          rotate: -360,
          x: [0, -15, 0],
          y: [0, 10, 0],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-secondary/10 blur-3xl -z-10"
      />
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <Card
      className={cn(
        "h-full p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-300"
      )}
    >
      <div className="relative">
        {testimonial.highlight && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute -top-8 -right-6"
          >
            <div className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20">
              <BadgeCheck className="w-3 h-3" />
              {testimonial.highlight}
            </div>
          </motion.div>
        )}

        <Quote className="w-8 h-8 text-primary/30 mb-4" />
      </div>

      <p className="text-lg italic mb-6 leading-relaxed">
        "{testimonial.content}"
      </p>

      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12 border-2 border-primary/20">
          <AvatarImage src="/placeholder.svg" alt={testimonial.name} />
          <AvatarFallback className="bg-primary/10 text-primary font-medium">
            {testimonial.name.charAt(0)}
          </AvatarFallback>
        </Avatar>

        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-1 text-xs font-medium text-primary flex items-center gap-1"
          >
            <TrendingUp className="w-3 h-3" />
            {testimonial.stats}
          </motion.div>
        </div>
      </div>
    </Card>
  );
}
