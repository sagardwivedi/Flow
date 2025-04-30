"use client";

import type { Transactions } from "@/app/protected/transactions/columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { formatCurrency } from "@/lib/utils";
import { ArrowDownIcon, ArrowUpIcon, IndianRupeeIcon } from "lucide-react";

interface TransactionOverviewProps {
  data: Transactions[];
  isLoading?: boolean;
}

export function TransactionOverview({
  data,
  isLoading = false,
}: TransactionOverviewProps) {
  const totalIncome = data
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = data
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const netCashFlow = totalIncome + totalExpenses;

  // Calculate percentage change (mock data for demonstration)
  const incomeChange = 12.5; // 12.5% increase from previous period
  const expensesChange = -8.3; // 8.3% decrease from previous period
  const netChange = 24.7; // 24.7% increase from previous period

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-4 w-4 rounded-full" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-24" />
              <Skeleton className="h-4 w-32 mt-2" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Income</CardTitle>
          <IndianRupeeIcon className="size-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-500">
            {formatCurrency(totalIncome)}
          </div>
          <div className="flex items-center text-xs text-muted-foreground mt-1">
            <div
              className={`flex items-center ${incomeChange >= 0 ? "text-green-500" : "text-red-500"}`}
            >
              {incomeChange >= 0 ? (
                <ArrowUpIcon className="mr-1 h-3 w-3" />
              ) : (
                <ArrowDownIcon className="mr-1 h-3 w-3" />
              )}
              <span>{Math.abs(incomeChange)}%</span>
            </div>
            <span className="ml-1">from previous period</span>
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
          <IndianRupeeIcon className="size-4 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-500">
            {formatCurrency(totalExpenses)}
          </div>
          <div className="flex items-center text-xs text-muted-foreground mt-1">
            <div
              className={`flex items-center ${expensesChange <= 0 ? "text-green-500" : "text-red-500"}`}
            >
              {expensesChange <= 0 ? (
                <ArrowDownIcon className="mr-1 h-3 w-3" />
              ) : (
                <ArrowUpIcon className="mr-1 h-3 w-3" />
              )}
              <span>{Math.abs(expensesChange)}%</span>
            </div>
            <span className="ml-1">from previous period</span>
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Net Cash Flow</CardTitle>
          <IndianRupeeIcon className="size-4" />
        </CardHeader>
        <CardContent>
          <div
            className={`text-2xl font-bold ${netCashFlow >= 0 ? "text-green-500" : "text-red-500"}`}
          >
            {formatCurrency(netCashFlow)}
          </div>
          <div className="flex items-center text-xs text-muted-foreground mt-1">
            <div
              className={`flex items-center ${netChange >= 0 ? "text-green-500" : "text-red-500"}`}
            >
              {netChange >= 0 ? (
                <ArrowUpIcon className="mr-1 h-3 w-3" />
              ) : (
                <ArrowDownIcon className="mr-1 h-3 w-3" />
              )}
              <span>{Math.abs(netChange)}%</span>
            </div>
            <span className="ml-1">from previous period</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
