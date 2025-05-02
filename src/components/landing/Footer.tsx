import { GithubIcon, LinkedinIcon, TwitterIcon, WalletIcon } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <WalletIcon className="size-6 text-primary group-hover:rotate-[-15deg] transition-transform" />
            <span className="text-xl font-bold tracking-tighter">
              Fin<span className="text-primary">Dash</span>
            </span>
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
                <GithubIcon className="w-5 h-5 hover:text-primary transition" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-5 h-5 hover:text-primary transition" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5 hover:text-primary transition" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} FinDash. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
