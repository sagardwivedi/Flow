"use client";

import {
  CheckIcon,
  MonitorIcon,
  MoonIcon,
  PaletteIcon,
  SunIcon,
} from "lucide-react";
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
        <PaletteIcon className="mr-2 size-4" />
        <span>Theme</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem
          className="cursor-pointer flex items-center justify-between"
          onClick={() => setTheme("light")}
        >
          <div className="flex items-center">
            <SunIcon className="mr-2 size-4" />
            <span>Light</span>
          </div>
          {theme === "light" && <CheckIcon className="size-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer flex items-center justify-between"
          onClick={() => setTheme("dark")}
        >
          <div className="flex items-center">
            <MoonIcon className="mr-2 size-4" />
            <span>Dark</span>
          </div>
          {theme === "dark" && <CheckIcon className="size-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer flex items-center justify-between"
          onClick={() => setTheme("system")}
        >
          <div className="flex items-center">
            <MonitorIcon className="mr-2 size-4" />
            <span>System</span>
          </div>
          {theme === "system" && <CheckIcon className="size-4" />}
        </DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  );
}
