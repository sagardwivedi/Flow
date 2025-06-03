"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BarChartIcon,
  DollarSignIcon,
  FileTextIcon,
  HomeIcon,
  PlusIcon,
  TargetIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "./dashboard/top-bar";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
    {
      name: "Transactions",
      href: "/transactions",
      icon: DollarSignIcon,
      actionLabel: "Add Transaction",
      actionQueryKey: "transactionDialog",
    },
    {
      name: "Goals",
      href: "/goals",
      icon: TargetIcon,
      actionLabel: "Add Goal",
      actionQueryKey: "goalDialog",
    },
    { name: "Bills", href: "/bills", icon: FileTextIcon },
    { name: "Reports", href: "/reports", icon: BarChartIcon },
  ];

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader className="p-4 mb-1">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <div className="flex items-center space-x-3 text-primary">
                <BarChartIcon className="size-7" />
                <span className="text-2xl font-bold tracking-tight">Flow</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <Separator className="my-1" />

      <SidebarContent className="px-3 pt-4 space-y-1">
        <SidebarMenu>
          {menuItems.map(({ name, href, icon: Icon, actionLabel, actionQueryKey }) => {
            const isActive = pathname === href;

            return (
              <SidebarMenuItem key={href}>
                <SidebarMenuButton asChild isActive={isActive}>
                  <Link
                    href={href}
                    className={cn(
                      "flex items-center rounded-md px-3 py-2 transition-colors gap-4",
                      "text-[15px] font-medium",
                      isActive
                        ? "bg-muted text-primary"
                        : "hover:bg-accent hover:text-primary"
                    )}
                    aria-label={name}
                  >
                    <Icon className="w-10 h-10 shrink-0" />
                    <span>{name}</span>
                  </Link>
                </SidebarMenuButton>

                {actionLabel && actionQueryKey && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SidebarMenuAction className="cursor-pointer" showOnHover>
                        <Link href={{ query: { [actionQueryKey]: true } }} aria-label={actionLabel}>
                          <PlusIcon className="size-5" />
                        </Link>
                      </SidebarMenuAction>
                    </TooltipTrigger>
                    <TooltipContent side="right">{actionLabel}</TooltipContent>
                  </Tooltip>
                )}
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <Separator className="my-2" />

      <SidebarFooter className="p-4">
        <UserButton />
      </SidebarFooter>
    </Sidebar>
  );
}
