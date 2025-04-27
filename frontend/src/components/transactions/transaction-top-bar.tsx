'use client'

import { UserButton } from "@/components/dashboard/top-bar";
import { Calendar } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDate } from "@/lib/utils";
import { ChevronDown, Download } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { Button } from "../ui/button";

export function TransactionTopBar() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 3, 1),
    to: new Date(2025, 3, 27),
  });

  return (
    <div className="border-b">
      <div className="flex h-16 justify-between items-center px-4 md:px-6">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">Transactions</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-auto p-0 text-base">
                {dateRange?.from && dateRange.to ? (
                  `${formatDate(dateRange.from)} – ${formatDate(dateRange.to)}`
                ) : (
                  <span>Pick a date range</span>
                )}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-auto p-0" align="start">
              <Calendar
                mode="range"
                selected={dateRange}
                onSelect={setDateRange}
                numberOfMonths={2}
              />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
          <UserButton />
        </div>
      </div>
    </div>
  );
}
