"use client";

import {
  ArrowRightIcon,
  BellIcon,
  BrainIcon,
  GoalIcon,
  PieChartIcon,
  ShieldIcon,
  SparklesIcon,
  ZapIcon,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: <PieChartIcon className="size-5" />,
    title: "Smart Analytics",
    desc: "Real-time spending breakdowns with predictive budgeting",
    highlight: "AI-powered insights",
  },
  {
    icon: <GoalIcon className="size-5" />,
    title: "Goal Tracking",
    desc: "Visualize progress toward financial milestones",
    highlight: "Custom targets",
  },
  {
    icon: <BellIcon className="size-5" />,
    title: "Bill Reminders",
    desc: "Never miss a payment with smart notifications",
    highlight: "Auto-alerts",
  },
  {
    icon: <BrainIcon className="size-5" />,
    title: "AI Advisor",
    desc: "Personalized recommendations to optimize finances",
    highlight: "24/7 assistance",
  },
  {
    icon: <ShieldIcon className="size-5" />,
    title: "Bank Security",
    desc: "256-bit encryption and biometric protection",
    highlight: "Military-grade",
  },
  {
    icon: <ZapIcon className="size-5" />,
    title: "Instant Sync",
    desc: "Connect all accounts in under 2 minutes",
    highlight: "Real-time",
  },
];

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-10" />
        <div className="absolute right-1/4 bottom-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="container px-4 mx-auto w-full sm:px-6 lg:px-8 max-w-[85rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <SparklesIcon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Powerful Features
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 mb-4">
            Financial Superpowers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to master your finances in one intuitive
            platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              {...feature}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
  highlight,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  highlight?: string;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      className="relative h-full"
    >
      {/* Animated background overlay */}
      <motion.div
        className={cn(
          "absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-transparent opacity-0",
          hoveredIndex === index ? "opacity-100" : "group-hover:opacity-50",
        )}
        transition={{ duration: 0.3 }}
      />

      <Card className="relative h-full p-8 overflow-hidden bg-white dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all">
        {/* Light effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                300px circle at ${mouseX}px ${mouseY}px,
                rgba(99, 102, 241, 0.1),
                transparent 80%
              )
            `,
          }}
        />

        {/* Icon with animated background */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary relative"
        >
          {icon}
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="absolute inset-0 rounded-full border-2 border-primary/30 pointer-events-none"
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Highlight badge */}
        {highlight && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-4 right-4"
          >
            <div className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {highlight}
            </div>
          </motion.div>
        )}

        <h3 className="text-xl font-semibold tracking-tight mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">{desc}</p>

        <motion.div
          whileHover={{ x: 4 }}
          className="inline-flex items-center text-sm font-medium text-primary group"
        >
          <span>Learn more</span>
          <ArrowRightIcon className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </motion.div>
      </Card>
    </motion.div>
  );
}
