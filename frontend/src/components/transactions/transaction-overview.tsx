import { Transactions } from "@/app/transactions/columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { IndianRupeeIcon } from "lucide-react";

export function TransactionOverview({ data }: { data: Transactions[] }) {
  const totalIncome = data
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);
    
  const totalExpenses = data
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const netCashFlow = totalIncome + totalExpenses;

  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Income</CardTitle>
          <IndianRupeeIcon className="size-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-500">
            {formatCurrency(totalIncome)}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
          <IndianRupeeIcon className="size-4 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-500">
            {formatCurrency(totalExpenses)}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Net Cash Flow</CardTitle>
          <IndianRupeeIcon className="size-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {formatCurrency(netCashFlow)}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
