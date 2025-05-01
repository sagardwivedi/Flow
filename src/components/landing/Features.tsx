"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Card } from "../ui/card";
import { PieChart, Goal, Bell, Brain, Shield, Zap, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "Smart Analytics",
    desc: "Real-time spending breakdowns with predictive budgeting"
  },
  {
    icon: <Goal className="w-6 h-6" />,
    title: "Goal Tracking",
    desc: "Visualize progress toward financial milestones"
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Bill Reminders",
    desc: "Never miss a payment with smart notifications"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI Advisor",
    desc: "Personalized recommendations to optimize finances"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Bank Security",
    desc: "256-bit encryption and biometric protection"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Instant Sync",
    desc: "Connect all accounts in under 2 minutes"
  }
];

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/5">
      <div className="container px-4 mx-auto w-full sm:px-6 lg:px-8 max-w-[85rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10 mb-4">
            Powerful Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Financial Superpowers for <span className="text-primary">Everyone</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to take control of your money in one beautiful dashboard
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc, index }: { icon: React.ReactNode, title: string, desc: string, index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      className="relative group"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <Card className="relative h-full p-8 overflow-hidden border-transparent group-hover:border-primary/20 transition-colors bg-gradient-to-b from-gray-50/50 to-gray-100/30 dark:from-gray-900/50 dark:to-gray-800/30">
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
        
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold tracking-tight mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{desc}</p>
        
        <motion.div 
          whileHover={{ x: 4 }}
          className="mt-6 inline-flex items-center text-sm font-medium text-primary"
        >
          Learn more
          <ArrowRight className="ml-1 w-4 h-4" />
        </motion.div>
      </Card>
    </motion.div>
  );
}