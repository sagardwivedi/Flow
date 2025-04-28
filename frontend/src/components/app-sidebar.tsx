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

export function AppSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/", icon: HomeIcon },
    {
      name: "Transactions",
      href: "/transactions",
      icon: DollarSignIcon,
      actionLabel: "Add Transaction",
    },
    {
      name: "Goals",
      href: "/goals",
      icon: TargetIcon,
      actionLabel: "Add Goal",
    },
    { name: "Bills", href: "/bills", icon: FileTextIcon },
    { name: "Reports", href: "/reports", icon: BarChartIcon },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="p-4 mb-1">
        <div className="flex items-center space-x-2">
          <BarChartIcon className="size-6 text-primary" />
          <span className="text-xl font-bold">Flow</span>
        </div>
      </SidebarHeader>

      <Separator />

      <SidebarContent className="px-2 pt-4">
        <SidebarMenu>
          {menuItems.map(({ name, href, icon: Icon, actionLabel }) => {
            const isActive = pathname === href;

            return (
              <SidebarMenuItem key={href}>
                <SidebarMenuButton asChild isActive={isActive}>
                  <Link href={href} className="flex items-center">
                    <Icon className="size-5 mr-3" />
                    <span>{name}</span>
                  </Link>
                </SidebarMenuButton>

                {actionLabel && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SidebarMenuAction className="cursor-pointer" showOnHover>
                        <Link href={{ query: { goalDialog: true } }}>
                          <PlusIcon className="size-4" />
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
      <SidebarFooter>
        <UserButton />
      </SidebarFooter>
    </Sidebar>
  );
}
