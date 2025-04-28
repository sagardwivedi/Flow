"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  Home,
  LayoutDashboard,
  Mail,
  SearchIcon,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, this would go to your search results page
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const popularLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Profile", href: "/profile", icon: User },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-3xl mx-auto text-center space-y-8">
        {/* Error Code & Illustration */}
        <div className="relative">
          <div className="text-[180px] font-bold text-primary/10 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center"></div>
        </div>

        {/* Error Message */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">Page not found</h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have
            been moved or deleted.
          </p>
        </div>

        {/* Search Functionality */}
        <div className="max-w-md mx-auto w-full">
          <form onSubmit={handleSearch} className="flex w-full gap-2">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for content..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button type="submit">Search</Button>
          </form>
        </div>

        {/* Navigation Suggestions */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Popular destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularLinks.map((link) => (
              <Card key={link.name} className="border border-muted">
                <CardContent className="p-0">
                  <Link
                    href={link.href}
                    className="flex flex-col items-center justify-center p-4 h-full transition-colors rounded-md"
                  >
                    <link.icon className="h-6 w-6 mb-2 text-primary" />
                    <span>{link.name}</span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Back Button & Contact Information */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
          <Button
            variant="outline"
            size="lg"
            className="w-full md:w-auto"
            onClick={() => router.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go back
          </Button>
          <span className="text-muted-foreground hidden md:inline">or</span>
          <Button
            variant="secondary"
            size="lg"
            className="w-full md:w-auto"
            asChild
          >
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact support
            </Link>
          </Button>
        </div>

        {/* Technical Information */}
        <div className="text-sm text-muted-foreground pt-8">
          <p>Error code: 404 | Page not found</p>
          <p className="mt-1">
            If you believe this is an error, please{" "}
            <Link
              href="/contact"
              className="underline underline-offset-4 hover:text-primary"
            >
              report this issue
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
