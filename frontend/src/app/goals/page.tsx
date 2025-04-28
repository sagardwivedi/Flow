import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default function GoalsPage() {
  const goals = [
    {
      id: 1,
      name: "Hawaii Vacation",
      target: 3000,
      saved: 1200,
      icon: "✈️",
      deadline: "2024-12-15",
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "Emergency Fund",
      target: 5000,
      saved: 3500,
      icon: "🛡️",
      deadline: "2024-10-01",
      color: "bg-green-500",
    },
    // Add more goals...
  ];

  const totalSaved = goals.reduce((sum, goal) => sum + goal.saved, 0);

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="border-b">
        <div className="flex h-16 justify-between items-center px-4 md:px-6">
          <div className="flex gap-2 items-center">
            <SidebarTrigger size="lg" />
            <h1 className="text-3xl font-bold">Savings Goals</h1>
          </div>

          <Button asChild>
            <Link href={{ query: { goalDialog: true } }}>
              <PlusIcon className="mr-2 size-4" />
              Create New Goal
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex-1 p-4 md:p-6">
        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">{goals.length}</div>
              <p className="text-sm text-muted-foreground">Active Goals</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">2</div>
              <p className="text-sm text-muted-foreground">Completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">
                ${totalSaved.toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground">Total Saved</p>
            </CardContent>
          </Card>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal) => {
            const progress = Math.min(
              Math.round((goal.saved / goal.target) * 100),
              100
            );

            return (
              <Card key={goal.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="text-2xl">{goal.icon}</div>
                  <div className="space-y-1">
                    <CardTitle>{goal.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      ${goal.saved.toLocaleString()} of $
                      {goal.target.toLocaleString()}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <Progress value={progress} className={`h-2 ${goal.color}`} />
                  <div className="flex justify-between mt-2 text-sm">
                    <span>{progress}% completed</span>
                    <span>3 months left</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* Empty State (conditionally rendered) */}
          {goals.length === 0 && (
            <div className="col-span-full text-center py-12">
              <div className="text-6xl mb-4">🚀</div>
              <h2 className="text-xl font-semibold mb-2">No goals yet!</h2>
              <p className="text-muted-foreground mb-4">
                Set your first one and start your savings journey
              </p>
              <Button>
                <PlusIcon className="mr-2 h-4 w-4" />
                Create Goal
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
