"use client";

import { WalletIcon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export function Header({ isLoggedIn = false }: { isLoggedIn?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="mx-auto px-4 w-full sm:px-6 lg:px-8 max-w-[85rem]">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="Home"
            >
              <WalletIcon className="size-6 text-primary group-hover:rotate-[-15deg] transition-transform" />
              <span className="text-xl font-bold tracking-tighter">
                Fin<span className="text-primary">Dash</span>
              </span>
            </Link>
          </motion.div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <Button asChild size="sm">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <>
                <Button variant="ghost" asChild size="sm">
                  <Link href="/auth/login">Sign In</Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="/auth/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
