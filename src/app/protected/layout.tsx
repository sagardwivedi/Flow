import { AppSidebar } from "@/components/app-sidebar";
import { GoalCreateDialog } from "@/components/goals/goal-create-dialog";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Suspense } from "react";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <NuqsAdapter>
        <SidebarInset>{children}</SidebarInset>
        <Suspense>
          <GoalCreateDialog />
        </Suspense>
      </NuqsAdapter>
    </SidebarProvider>
  );
}
