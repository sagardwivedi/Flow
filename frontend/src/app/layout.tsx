import { AppSidebar } from "@/components/app-sidebar";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoalCreateDialog } from "@/components/goals/goal-create-dialog";

export const metadata: Metadata = {
  title: "FinFlow - Personal Finance Management",
  description:
    "Track your expenses, set savings goals, manage bills, and get smart financial insights — all in one place with FinFlow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <NuqsAdapter>
              <SidebarInset>{children}</SidebarInset>
              <GoalCreateDialog />
            </NuqsAdapter>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
