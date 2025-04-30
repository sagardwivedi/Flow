"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton"; // assuming you have a skeleton component
import {
  Bar,
  CartesianGrid,
  Cell,
  Line,
  Pie,
  BarChart as ReBarChart,
  LineChart as ReLineChart,
  PieChart as RePieChart,
  XAxis,
  YAxis,
} from "recharts";

const colors = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#ec4899",
];

// Pie Chart
export function PieChart({
  data,
}: {
  data: { name: string; value: number }[];
}) {
  if (!data?.length) {
    return <Skeleton className="h-[300px] w-full rounded-lg" />;
  }

  return (
    <ChartContainer config={{}}>
      <RePieChart>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <ChartTooltip content={<ChartTooltipContent />} />
      </RePieChart>
    </ChartContainer>
  );
}

// Bar Chart
export function BarChart({
  data,
}: {
  data: { name: string; value: number }[];
}) {
  if (!data?.length) {
    return <Skeleton className="h-[300px] w-full rounded-lg" />;
  }

  return (
    <ChartContainer config={{}}>
      <ReBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `$${value}`} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="value" fill={colors[0]} />
      </ReBarChart>
    </ChartContainer>
  );
}

// Line Chart
export function LineChart({
  data,
}: {
  data: { date: string; value: number }[];
}) {
  if (!data?.length) {
    return <Skeleton className="h-[300px] w-full rounded-lg" />;
  }

  return (
    <ChartContainer config={{}}>
      <ReLineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis tickFormatter={(value) => `$${value}`} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          type="monotone"
          dataKey="value"
          stroke={colors[1]}
          fill={colors[1]}
          strokeWidth={2}
        />
      </ReLineChart>
    </ChartContainer>
  );
}
