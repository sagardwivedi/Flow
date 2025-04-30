"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

export function SpendingInsights() {
  // Mock data - would come from API in real implementation
  const spendingData = [
    { name: "food", value: 35 },
    { name: "transportation", value: 20 },
    { name: "entertainment", value: 15 },
    { name: "utilities", value: 25 },
    { name: "other", value: 5 },
  ];

  const chartConfig = {
    food: {
      label: "Food",
      color: "var(--chart-1)",
    },
    transportation: {
      label: "Transportation",
      color: "var(--chart-2)",
    },
    entertainment: {
      label: "Entertainment",
      color: "var(--chart-3)",
    },
    utilities: {
      label: "Utilities",
      color: "var(--chart-4)",
    },
    other: {
      label: "Other",
      color: "var(--chart-5)",
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Spending Insights</CardTitle>
        <CardDescription>How you spent your money this month</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-square max-w-xs mx-auto"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={spendingData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                nameKey="name"
              >
                {spendingData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={`var(--color-${entry.name})`}
                  />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
              <ChartLegend content={<ChartLegendContent className="mt-4" />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
