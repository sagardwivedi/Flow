"use client";

import { DownloadIcon } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { DateRangePicker } from "@/components/ui/date-range-picker";

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
          <DateRangePicker onChange={setDateRange} value={dateRange} />
        </div>
        <Button variant="outline">
          <DownloadIcon className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
      </div>
    </div>
  );
}
