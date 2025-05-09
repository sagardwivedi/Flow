import { TransactionOverview } from "@/components/transactions/transaction-overview";
import { TransactionTopBar } from "@/components/transactions/transaction-top-bar";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import { columns, Transactions } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Transactions[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: "1",
      date: new Date(2025, 3, 25),
      merchant: "Starbucks",
      category: "food",
      account: "credit-card",
      amount: -5.75,
    },
    {
      id: "2",
      date: new Date(2025, 3, 24),
      merchant: "Salary Deposit",
      category: "income",
      account: "checking",
      amount: 2500,
    },
    {
      id: "3",
      date: new Date(2025, 3, 23),
      merchant: "Netflix",
      category: "entertainment",
      account: "credit-card",
      amount: -15.99,
    },
    {
      id: "4",
      date: new Date(2025, 3, 22),
      merchant: "Whole Foods",
      category: "groceries",
      account: "credit-card",
      amount: -87.32,
    },
    {
      id: "5",
      date: new Date(2025, 3, 21),
      merchant: "Uber",
      category: "transport",
      account: "credit-card",
      amount: -24.5,
    },
    // New transactions below
    {
      id: "6",
      date: new Date(2025, 3, 20),
      merchant: "Amazon",
      category: "shopping",
      account: "credit-card",
      amount: -62.45,
    },
    {
      id: "7",
      date: new Date(2025, 3, 19),
      merchant: "Gym Membership",
      category: "health",
      account: "debit-card",
      amount: -35.0,
    },
    {
      id: "8",
      date: new Date(2025, 3, 18),
      merchant: "Electric Bill",
      category: "utilities",
      account: "checking",
      amount: -85.67,
    },
    {
      id: "9",
      date: new Date(2025, 3, 17),
      merchant: "McDonald's",
      category: "food",
      account: "credit-card",
      amount: -8.29,
    },
    {
      id: "10",
      date: new Date(2025, 3, 16),
      merchant: "Spotify",
      category: "entertainment",
      account: "credit-card",
      amount: -9.99,
    },
    {
      id: "11",
      date: new Date(2025, 3, 15),
      merchant: "Gas Station",
      category: "transport",
      account: "debit-card",
      amount: -42.3,
    },
    {
      id: "12",
      date: new Date(2025, 3, 14),
      merchant: "Freelance Payment",
      category: "income",
      account: "checking",
      amount: 750.0,
    },
    {
      id: "13",
      date: new Date(2025, 3, 13),
      merchant: "Dentist",
      category: "health",
      account: "credit-card",
      amount: -120.0,
    },
    {
      id: "14",
      date: new Date(2025, 3, 12),
      merchant: "Target",
      category: "shopping",
      account: "credit-card",
      amount: -56.78,
    },
    {
      id: "15",
      date: new Date(2025, 3, 11),
      merchant: "Water Bill",
      category: "utilities",
      account: "checking",
      amount: -45.23,
    },
    {
      id: "16",
      date: new Date(2025, 3, 10),
      merchant: "Subway",
      category: "food",
      account: "credit-card",
      amount: -7.5,
    },
    {
      id: "17",
      date: new Date(2025, 3, 9),
      merchant: "Apple Music",
      category: "entertainment",
      account: "credit-card",
      amount: -10.99,
    },
    {
      id: "18",
      date: new Date(2025, 3, 8),
      merchant: "Parking Fee",
      category: "transport",
      account: "debit-card",
      amount: -12.0,
    },
    {
      id: "19",
      date: new Date(2025, 3, 7),
      merchant: "Bonus",
      category: "income",
      account: "checking",
      amount: 300.0,
    },
    {
      id: "20",
      date: new Date(2025, 3, 6),
      merchant: "Pharmacy",
      category: "health",
      account: "credit-card",
      amount: -28.45,
    },
    {
      id: "21",
      date: new Date(2025, 3, 5),
      merchant: "Best Buy",
      category: "shopping",
      account: "credit-card",
      amount: -249.99,
    },
    {
      id: "22",
      date: new Date(2025, 3, 4),
      merchant: "Internet Bill",
      category: "utilities",
      account: "checking",
      amount: -65.0,
    },
    {
      id: "23",
      date: new Date(2025, 3, 3),
      merchant: "Pizza Hut",
      category: "food",
      account: "credit-card",
      amount: -18.75,
    },
    {
      id: "24",
      date: new Date(2025, 3, 2),
      merchant: "Movie Theater",
      category: "entertainment",
      account: "debit-card",
      amount: -24.0,
    },
    {
      id: "25",
      date: new Date(2025, 3, 1),
      merchant: "Public Transit",
      category: "transport",
      account: "credit-card",
      amount: -36.5,
    },
    {
      id: "26",
      date: new Date(2025, 2, 31),
      merchant: "Dividends",
      category: "income",
      account: "savings",
      amount: 42.15,
    },
    {
      id: "27",
      date: new Date(2025, 2, 30),
      merchant: "Eye Doctor",
      category: "health",
      account: "credit-card",
      amount: -95.0,
    },
    {
      id: "28",
      date: new Date(2025, 2, 29),
      merchant: "Home Depot",
      category: "shopping",
      account: "credit-card",
      amount: -78.32,
    },
    {
      id: "29",
      date: new Date(2025, 2, 28),
      merchant: "Phone Bill",
      category: "utilities",
      account: "checking",
      amount: -72.45,
    },
    {
      id: "30",
      date: new Date(2025, 2, 27),
      merchant: "Burger King",
      category: "food",
      account: "debit-card",
      amount: -9.45,
    },
    {
      id: "31",
      date: new Date(2025, 2, 26),
      merchant: "Concert Tickets",
      category: "entertainment",
      account: "credit-card",
      amount: -120.0,
    },
    {
      id: "32",
      date: new Date(2025, 2, 25),
      merchant: "Car Insurance",
      category: "transport",
      account: "checking",
      amount: -125.0,
    },
    {
      id: "33",
      date: new Date(2025, 2, 24),
      merchant: "Tax Refund",
      category: "income",
      account: "savings",
      amount: 425.0,
    },
    {
      id: "34",
      date: new Date(2025, 2, 23),
      merchant: "Vitamins",
      category: "health",
      account: "credit-card",
      amount: -22.99,
    },
    {
      id: "35",
      date: new Date(2025, 2, 22),
      merchant: "IKEA",
      category: "shopping",
      account: "credit-card",
      amount: -156.78,
    },
    {
      id: "36",
      date: new Date(2025, 2, 21),
      merchant: "Cable TV",
      category: "utilities",
      account: "checking",
      amount: -89.99,
    },
    {
      id: "37",
      date: new Date(2025, 2, 20),
      merchant: "Chinese Restaurant",
      category: "food",
      account: "debit-card",
      amount: -32.5,
    },
    {
      id: "38",
      date: new Date(2025, 2, 19),
      merchant: "Video Game",
      category: "entertainment",
      account: "credit-card",
      amount: -59.99,
    },
    {
      id: "39",
      date: new Date(2025, 2, 18),
      merchant: "Car Wash",
      category: "transport",
      account: "credit-card",
      amount: -15.0,
    },
    {
      id: "40",
      date: new Date(2025, 2, 17),
      merchant: "Interest",
      category: "income",
      account: "savings",
      amount: 8.72,
    },
    {
      id: "41",
      date: new Date(2025, 2, 16),
      merchant: "Doctor Visit",
      category: "health",
      account: "credit-card",
      amount: -50.0,
    },
    {
      id: "42",
      date: new Date(2025, 2, 15),
      merchant: "Zara",
      category: "shopping",
      account: "credit-card",
      amount: -89.5,
    },
    {
      id: "43",
      date: new Date(2025, 2, 14),
      merchant: "Heating Bill",
      category: "utilities",
      account: "checking",
      amount: -112.34,
    },
    {
      id: "44",
      date: new Date(2025, 2, 13),
      merchant: "Coffee Shop",
      category: "food",
      account: "debit-card",
      amount: -4.25,
    },
    {
      id: "45",
      date: new Date(2025, 2, 12),
      merchant: "Book Store",
      category: "entertainment",
      account: "credit-card",
      amount: -24.99,
    },
  ];
}

function TransactionSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-[120px] w-full" />
        ))}
      </div>
      <Skeleton className="h-[350px] w-full" />
      <Skeleton className="h-[400px] w-full" />
    </div>
  );
}

export default async function TransactionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TransactionTopBar />
      <div className="flex-1 p-4 md:p-6 space-y-6">
        <Suspense fallback={<TransactionSkeleton />}>
          <TransactionsContent />
        </Suspense>
      </div>
    </div>
  );
}

async function TransactionsContent() {
  const data = await getData();

  return (
    <>
      <TransactionOverview data={data} />
      <div className="rounded-lg shadow-sm p-4 md:p-6">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
