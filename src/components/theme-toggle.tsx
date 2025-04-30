"use client";

import { Check, Monitor, Moon, Palette, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger className="cursor-pointer">
        <Palette className="mr-2 size-4" />
        <span>Theme</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem
          className="cursor-pointer flex items-center justify-between"
          onClick={() => setTheme("light")}
        >
          <div className="flex items-center">
            <Sun className="mr-2 size-4" />
            <span>Light</span>
          </div>
          {theme === "light" && <Check className="size-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer flex items-center justify-between"
          onClick={() => setTheme("dark")}
        >
          <div className="flex items-center">
            <Moon className="mr-2 size-4" />
            <span>Dark</span>
          </div>
          {theme === "dark" && <Check className="size-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer flex items-center justify-between"
          onClick={() => setTheme("system")}
        >
          <div className="flex items-center">
            <Monitor className="mr-2 size-4" />
            <span>System</span>
          </div>
          {theme === "system" && <Check className="size-4" />}
        </DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  );
}
