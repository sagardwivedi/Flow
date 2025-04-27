import { ArrowRightIcon, BrainCircuitIcon, PiggyBankIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function FinancialTips() {
  // Mock data - would come from AI API in real implementation
  const tips = [
    {
      id: 1,
      message:
        "You saved $300 this month. Great job! Want to move $100 to your Travel Fund?",
      action: "Move to Travel Fund",
      icon: PiggyBankIcon,
    },
    {
      id: 2,
      message:
        "Your Netflix subscription increased by $2 this month. Consider reviewing your streaming services.",
      action: "Review Subscriptions",
      icon: BrainCircuitIcon,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BrainCircuitIcon className="h-5 w-5 text-primary" />
          AI Financial Tips
        </CardTitle>
        <CardDescription>
          Smart suggestions to improve your finances
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tips.map((tip) => (
            <div key={tip.id} className="rounded-lg border p-4">
              <div className="flex gap-4">
                <tip.icon className="h-8 w-8 text-primary/80" />
                <div className="space-y-2">
                  <p>{tip.message}</p>
                  <Button variant="outline" size="sm" className="gap-1">
                    {tip.action}
                    <ArrowRightIcon className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full">
          View All Tips
        </Button>
      </CardFooter>
    </Card>
  );
}
