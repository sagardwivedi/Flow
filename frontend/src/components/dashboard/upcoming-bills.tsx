"use client"

import { CalendarIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function UpcomingBills() {
  // Mock data - would come from API in real implementation
  const bills = [
    {
      id: 1,
      name: "Netflix",
      amount: 15.99,
      dueDate: new Date(2025, 3, 30), // April 30, 2025
      category: "Entertainment",
      recurring: true,
    },
    {
      id: 2,
      name: "Rent",
      amount: 1200,
      dueDate: new Date(2025, 4, 4), // May 4, 2025
      category: "Housing",
      recurring: true,
    },
    {
      id: 3,
      name: "Electricity",
      amount: 85.75,
      dueDate: new Date(2025, 4, 10), // May 10, 2025
      category: "Utilities",
      recurring: true,
    },
    {
      id: 4,
      name: "Phone Bill",
      amount: 65,
      dueDate: new Date(2025, 4, 15), // May 15, 2025
      category: "Utilities",
      recurring: true,
    },
  ]

  // Function to calculate days until due
  const getDaysUntilDue = (dueDate: Date) => {
    const today = new Date()
    const diffTime = dueDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  // Function to get badge variant based on urgency
  const getBadgeVariant = (days: number) => {
    if (days <= 3) return "destructive"
    if (days <= 7) return "secondary"
    return "outline"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Bills</CardTitle>
        <CardDescription>Bills due in the next 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {bills.map((bill) => {
            const daysUntilDue = getDaysUntilDue(bill.dueDate)
            const badgeVariant = getBadgeVariant(daysUntilDue)

            return (
              <div key={bill.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                <div className="space-y-1">
                  <h3 className="font-medium">{bill.name}</h3>
                  <p className="text-sm text-muted-foreground">{bill.category}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <p className="font-medium">${bill.amount.toFixed(2)}</p>
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-3 w-3 text-muted-foreground" />
                    <Badge variant={badgeVariant} className="text-xs">
                      Due in {daysUntilDue} days
                    </Badge>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
