import { BalanceOverview } from "@/components/dashboard/balance-overview";
import { FinancialTips } from "@/components/dashboard/financial-tips";
import { SavingsGoals } from "@/components/dashboard/savings-goals";
import { SpendingInsights } from "@/components/dashboard/spending-insights";
import { TopBar } from "@/components/dashboard/top-bar";
import { UpcomingBills } from "@/components/dashboard/upcoming-bills";

export default function ProtectedPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <div className="flex-1 p-4 md:p-6 space-y-6">
        <BalanceOverview />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SavingsGoals />
          <SpendingInsights />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UpcomingBills />
          <FinancialTips />
        </div>
      </div>
    </div>
  );
}
