"use client";
import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "../ui/avatar";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Freelance Designer",
    text: "Saved 30% more after using this app for just 3 months!",
    img: "/avatars/1.jpg"
  },
  // Add more testimonials...
];

export function Testimonials() {
  return (
    <section className="container py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Trusted by Thousands</h2>
      
      <div className="flex overflow-x-auto pb-6 gap-6">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="min-w-[300px] bg-background p-6 rounded-lg border"
          >
            <div className="flex items-center gap-4 mb-4">
              <Avatar>
                <AvatarImage src={testimonial.img} />
              </Avatar>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-muted-foreground">"{testimonial.text}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}