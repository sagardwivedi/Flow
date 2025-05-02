"use client";

import { DownloadIcon, FilterIcon } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";

import {
  BarChart,
  LineChart,
  PieChart,
} from "@/components/reports/reports-chart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data - replace with your actual data fetching
const reportData = {
  totalIncome: 8000,
  totalExpenses: 5200,
  netSavings: 2800,
  topCategory: { name: "Dining", amount: 900 },
  spendingByCategory: [
    { name: "Groceries", value: 800, percentage: 20 },
    { name: "Entertainment", value: 400, percentage: 10 },
    { name: "Transportation", value: 600, percentage: 15 },
    { name: "Utilities", value: 700, percentage: 17.5 },
    { name: "Dining", value: 900, percentage: 22.5 },
    { name: "Other", value: 600, percentage: 15 },
  ],
  incomeSources: [
    { name: "Salary", value: 6500 },
    { name: "Freelance", value: 1000 },
    { name: "Investments", value: 500 },
  ],
  savingsTrend: [
    { date: "Jan", value: 1000 },
    { date: "Feb", value: 1500 },
    { date: "Mar", value: 1800 },
    { date: "Apr", value: 2800 },
  ],
};

export default function ReportsPage() {
  const [range, setRange] = useState<DateRange | undefined>(undefined);

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="border-b">
        <div className="flex h-16 justify-between items-center px-4 md:px-6">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold">Financial Reports</h1>
            <DateRangePicker value={range} onChange={setRange} />
          </div>
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <Select>
              <SelectTrigger className="w-[180px]">
                <FilterIcon className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filter by Account" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Accounts</SelectItem>
                <SelectItem value="checking">Checking</SelectItem>
                <SelectItem value="savings">Savings</SelectItem>
                <SelectItem value="credit">Credit Card</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
      </div>
      <div className="flex-1 p-4 md:p-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Income
              </CardTitle>
              <span className="text-green-500">📈</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${reportData.totalIncome.toLocaleString()}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Expenses
              </CardTitle>
              <span className="text-red-500">💸</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${reportData.totalExpenses.toLocaleString()}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Net Savings</CardTitle>
              <span className="text-blue-500">💰</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${reportData.netSavings.toLocaleString()}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Top Spending
              </CardTitle>
              <span>🔥</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {reportData.topCategory.name} - ${reportData.topCategory.amount}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Spending Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Spending by Category</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <PieChart data={reportData.spendingByCategory} />
              {/* <div className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead className="text-right">Percentage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reportData.spendingByCategory.map((category) => (
                    <TableRow key={category.name}>
                      <TableCell>{category.name}</TableCell>
                      <TableCell>${category.value}</TableCell>
                      <TableCell className="text-right">
                        {category.percentage}%
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div> */}
            </CardContent>
          </Card>

          {/* Income Sources */}
          <Card>
            <CardHeader>
              <CardTitle>Income Sources</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <BarChart data={reportData.incomeSources} />
            </CardContent>
          </Card>
        </div>

        {/* Savings Trend */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Savings Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart data={reportData.savingsTrend} />
          </CardContent>
        </Card>

        {/* Empty State (conditionally rendered) */}
        {reportData.totalIncome === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-medium mb-2">
                No financial activity recorded
              </h3>
              <p className="text-muted-foreground mb-4">
                Try selecting a different date range or add transactions
              </p>
              <Button>Go to Transactions</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
