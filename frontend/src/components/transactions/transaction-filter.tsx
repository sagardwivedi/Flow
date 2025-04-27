'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function TransactionFilter() {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [accountFilter, setAccountFilter] = useState("all");
  const [groupBy, setGroupBy] = useState("date");
  const [sortBy, setSortBy] = useState("date-desc");
  const categories = [
    { value: "all", label: "All Categories" },
    { value: "food", label: "Food & Drink" },
    { value: "transport", label: "Transport" },
    { value: "entertainment", label: "Entertainment" },
    { value: "groceries", label: "Groceries" },
    { value: "income", label: "Income" },
  ];

  const accounts = [
    { value: "all", label: "All Accounts" },
    { value: "checking", label: "Checking" },
    { value: "credit-card", label: "Credit Card" },
    { value: "savings", label: "Savings" },
  ];

  return (
    <div className="flex items-center space-x-4">
      <Input
        placeholder="Search by merchant, category, or amount..."
        className="w-[350px]"
      />
      <Select value={categoryFilter} onValueChange={setCategoryFilter}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Filter by category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category.value} value={category.value}>
              {category.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={accountFilter} onValueChange={setAccountFilter}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by account" />
        </SelectTrigger>
        <SelectContent>
          {accounts.map((account) => (
            <SelectItem key={account.value} value={account.value}>
              {account.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={groupBy} onValueChange={setGroupBy}>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Group by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="date">Date</SelectItem>
          <SelectItem value="category">Category</SelectItem>
          <SelectItem value="merchant">Merchant</SelectItem>
          <SelectItem value="none">None</SelectItem>
        </SelectContent>
      </Select>

      <Select value={sortBy} onValueChange={setSortBy}>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="date-desc">Date (Newest)</SelectItem>
          <SelectItem value="date-asc">Date (Oldest)</SelectItem>
          <SelectItem value="amount-desc">Amount (High)</SelectItem>
          <SelectItem value="amount-asc">Amount (Low)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
