"use client";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { QuoteIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Freelance Designer",
    content:
      "This app helped me save 30% more in just 3 months. The automatic budgeting features are a game-changer!",
    stats: "Saved $2,400/year",
    avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=sarah",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    content:
      "Finally a finance app that doesn&apos;t treat me like an accountant. The AI insights are incredibly helpful.",
    stats: "Reduced expenses by 22%",
    avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=michael",
  },
  {
    name: "Emma Rodriguez",
    role: "Small Business Owner",
    content:
      "As someone who hates number-crunching, this app makes financial management actually enjoyable.",
    stats: "Paid off $8,000 debt",
    avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=emma",
  },
  {
    name: "David Wilson",
    role: "Financial Advisor",
    content:
      "I recommend this to all my clients. The visualization tools help people understand their finances better.",
    stats: "50+ clients onboarded",
    avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=david",
  },
  {
    name: "Lena Becker",
    role: "Student",
    content:
      "Budgeting used to stress me out. Now it’s automated and simple. I love how intuitive everything is.",
    stats: "Saved $1,200 in 4 months",
    avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=lena",
  },
  {
    name: "Carlos Mendes",
    role: "Entrepreneur",
    content:
      "With this app, I finally feel in control of my business finances. Huge impact on cash flow.",
    stats: "Cut expenses by 18%",
    avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=carlos",
  },
];

export function Testimonials() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="container px-4 mx-auto w-full sm:px-6 lg:px-8 max-w-[85rem] text-center">
        <h2 className="text-4xl font-bold mb-6">What Our Users Say</h2>
        <p className="text-muted-foreground mb-12">
          Hear directly from people who have transformed their finances
        </p>

        <Carousel
          plugins={[plugin.current]}
          opts={{ loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((t, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 px-4"
              >
                <Card className="p-6 bg-white dark:bg-gray-900/80 backdrop-blur rounded-xl shadow-md h-full flex flex-col justify-between border border-muted">
                  <QuoteIcon className="w-6 h-6 text-primary/30 mb-3" />
                  <p className="text-sm text-muted-foreground italic mb-6">
                    &quot;{t.content}&quot;
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <Avatar>
                      <AvatarImage src={t.avatar} />
                      <AvatarFallback>{t.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <h4 className="font-semibold">{t.name}</h4>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                      <p className="text-xs text-primary mt-1">{t.stats}</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
