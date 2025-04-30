import { Bell, Search, Settings, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ReactNode } from "react";
import { LogoutButton } from "../logout-button";
import { ThemeToggle } from "../theme-toggle";

export function TopBar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 md:px-6">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search transactions, bills, goals..."
            className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
          />
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <Badge className="absolute -right-1 -top-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]">
              3
            </Badge>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function UserButton({ trigger }: { trigger?: ReactNode }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {trigger ? (
          trigger
        ) : (
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt="@user"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">John Doe</p>
            <p className="text-xs leading-none text-muted-foreground">
              john.doe@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <ThemeToggle />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
