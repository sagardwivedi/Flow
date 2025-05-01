import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Testimonials } from "@/components/landing/Testimonials";
import { Header } from "@/components/landing/Header";
import { createClient } from "@/lib/server";
import { Footer } from "@/components/landing/Footer";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen flex flex-col">
      <Header isLoggedIn={user != null} />

      <main className="flex-1">
        <Hero />
        <Features />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
