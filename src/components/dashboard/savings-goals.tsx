import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { createClient } from "@/lib/server";
import { formatCurrency, formatDate } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export async function SavingsGoals() {
  const supabase = await createClient();
  const { data: goals, error } = await supabase.rpc("fetch_top_goals");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">🎯 Savings Goals</CardTitle>
        <CardDescription className="text-balance">
          Track your progress and stay motivated
        </CardDescription>
      </CardHeader>

      <CardContent>
        {error ? (
          <p className="text-red-500 text-sm">Failed to load goals.</p>
        ) : !goals || goals.length === 0 ? (
          <p className="text-muted-foreground text-sm">No savings goals yet.</p>
        ) : (
          <div className="space-y-6">
            {goals.map((goal) => {
              const percentage = (goal.saved_amount / goal.target_amount) * 100;
              const target = formatCurrency(goal.target_amount);
              const saved = formatCurrency(goal.saved_amount);
              const status =
                percentage >= 100
                  ? "Complete"
                  : percentage >= 70
                  ? "On Track"
                  : "Behind";
              const badgeVariant =
                status === "Complete"
                  ? "default"
                  : status === "On Track"
                  ? "outline"
                  : "secondary";

              return (
                <div
                  key={goal.id}
                  className="space-y-2 p-3 rounded-md border bg-muted/40"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-base">{goal.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {saved} of {target}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={badgeVariant}>{status}</Badge>
                      <span className="text-sm font-medium">
                        {percentage.toFixed(0)}%
                      </span>
                    </div>
                  </div>
                  <Progress
                    value={percentage}
                    className="h-2"
                    aria-valuetext={`Progress: ${percentage.toFixed(0)}%`}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Target: {target}</span>
                    <span>Due: {formatDate(goal.deadline)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-6 flex justify-center">
          <Button variant="outline" asChild>
            <Link href="/goals">View All Goals</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
