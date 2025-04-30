import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import "./globals.css";

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
