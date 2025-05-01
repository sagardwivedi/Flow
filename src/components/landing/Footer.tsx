import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold">FinDash</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-sm">
              Helping you take control of your finances, one step at a time.
            </p>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h3 className="font-medium text-muted-foreground">Follow Us</h3>
            <div className="flex gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 hover:text-primary transition" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 hover:text-primary transition" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 hover:text-primary transition" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} FinDash. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
