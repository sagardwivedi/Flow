"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreVertical } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn, formatCurrency, formatDate, getCategoryColor } from "@/lib/utils";
import { DataTableColumnHeader } from "./data-table-column-header";

export type Transactions = {
  id: string;
  date: Date;
  merchant: string;
  category: string;
  account: string;
  amount: number;
};

export const columns: ColumnDef<Transactions>[] = [
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      const date = row.getValue("date") as Date;
      return <div className="font-medium">{formatDate(date)}</div>;
    },
  },
  {
    accessorKey: "merchant",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Merchant" />
    ),
    cell: ({ row }) => (
      <div className="truncate">{row.getValue("merchant")}</div>
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    cell: ({ row }) => {
      const category = row.getValue("category") as string;
      return <Badge className={getCategoryColor(category)}>{category}</Badge>;
    },
  },
  {
    accessorKey: "account",
    header: "Account",
    cell: ({ row }) => <div>{row.getValue("account")}</div>,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    cell: ({ row }) => {
      const amount = row.getValue("amount") as number;
      return (
        <div
          className={cn(
            "font-medium",
            amount > 0 ? "text-green-500" : "text-red-500"
          )}
        >
          {formatCurrency(amount)}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const transaction = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
