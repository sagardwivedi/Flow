import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Testimonials } from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      
      <main className="flex-1">
        <Hero />
        <Features />
        <Testimonials />
        {/* <CTA /> */}
      </main>
      
      {/* <Footer /> */}
    </div>
  );
}