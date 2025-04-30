import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function SavingsGoals() {
  // Mock data - would come from API in real implementation
  const goals = [
    {
      id: 1,
      name: "Vacation Fund",
      current: 2250,
      target: 5000,
      percentage: 45,
      dueDate: "August 2025",
    },
    {
      id: 2,
      name: "New Apartment",
      current: 4000,
      target: 20000,
      percentage: 20,
      dueDate: "December 2025",
    },
    {
      id: 3,
      name: "Emergency Fund",
      current: 3500,
      target: 10000,
      percentage: 35,
      dueDate: "Ongoing",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Savings Goals</CardTitle>
        <CardDescription>
          Track your progress towards financial goals
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {goals.map((goal) => (
            <div key={goal.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{goal.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    ${goal.current.toLocaleString()} of $
                    {goal.target.toLocaleString()}
                  </p>
                </div>
                <span className="text-sm font-medium">{goal.percentage}%</span>
              </div>
              <Progress value={goal.percentage} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Target: ${goal.target.toLocaleString()}</span>
                <span>Due: {goal.dueDate}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
