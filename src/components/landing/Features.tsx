"use client";

import { motion } from "framer-motion";
import { Bell, Brain, Goal, PieChart } from "lucide-react";
import { Card } from "../ui/card";

const features = [
  {
    icon: <PieChart className="text-primary" size={24} />,
    title: "Smart Spending Charts",
    desc: "Visualize where your money goes with dynamic charts",
  },
  {
    icon: <Goal className="text-primary" size={24} />,
    title: "Goal Tracking",
    desc: "Set and achieve financial milestones",
  },
  {
    icon: <Bell className="text-primary" size={24} />,
    title: "Bill Reminders",
    desc: "Never miss a payment deadline again",
  },
  {
    icon: <Brain className="text-primary" size={24} />,
    title: "AI Insights",
    desc: "Personalized recommendations to optimize your finances",
  },
];

export function Features() {
  return (
    <section className="container py-20 bg-gradient-to-b from-background to-muted/20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Powerful Features
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full hover:shadow-md transition-shadow">
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-muted-foreground mt-2">{feature.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
