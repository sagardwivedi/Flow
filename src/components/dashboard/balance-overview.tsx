import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { createClient } from "@/lib/server";
import { formatCurrency } from "@/lib/utils";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

export async function BalanceOverview() {
  const supabase = await createClient();

  const { data } = await supabase.rpc("get_monthly_summary");

  const summary = data?.[0];

  return (
    <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-background">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Balance Overview</CardTitle>
        <CardDescription>
          Your financial summary for{" "}
          {new Date().toLocaleString("default", { month: "long" })}{" "}
          {new Date().getFullYear()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">
              Total Balance
            </h3>
            <p className="text-3xl font-bold">
              {formatCurrency(summary?.balance || 0)}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Income
                </h3>
                <div className="flex items-center">
                  <ArrowUpIcon className="mr-1 h-4 w-4 text-green-500" />
                  <p className="text-xl font-semibold">
                    {formatCurrency(summary?.total_income || 0)}
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Expenses
                </h3>
                <div className="flex items-center">
                  <ArrowDownIcon className="mr-1 h-4 w-4 text-red-500" />
                  <p className="text-xl font-semibold">
                    {formatCurrency(summary?.total_expenses || 0)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">
                Savings Progress
              </h3>
              <span className="text-sm font-medium">
                {summary?.savings_percentage}%
              </span>
            </div>
            <Progress value={summary?.savings_percentage} className="h-2" />
            <p className="text-sm text-muted-foreground">
              You&apos;re on track to save {summary?.savings_percentage}% this
              month!
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
