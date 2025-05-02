import { AddBillDialog } from "@/components/bills/add-bill-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FilterIcon, MoreVerticalIcon } from "lucide-react";

const bills = [
  {
    id: 1,
    name: "Netflix",
    amount: 15.99,
    dueDate: "2025-05-15",
    frequency: "Monthly",
    status: "unpaid",
    category: "Entertainment",
    account: "Visa •••• 4242",
  },
  {
    id: 2,
    name: "Electricity",
    amount: 85.5,
    dueDate: "2025-05-03",
    frequency: "Monthly",
    status: "overdue",
    category: "Utilities",
    account: "Checking •••• 1234",
  },
  // Add more bills...
];

export default function BillsPage() {
  const upcomingBills = bills.filter((bill) => bill.status === "unpaid");
  const overdueBills = bills.filter((bill) => bill.status === "overdue");
  const totalAmount = upcomingBills.reduce((sum, bill) => sum + bill.amount, 0);

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="border-b">
        <div className="flex h-16 justify-between items-center px-4 md:px-6">
          <div>
            <h1 className="text-3xl font-bold">Bills & Subscriptions</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <FilterIcon className="mr-2 size-4" />
              Filter
            </Button>
            <AddBillDialog />
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 md:p-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Upcoming Bills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{upcomingBills.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Due</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${totalAmount.toFixed(2)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Overdue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overdueBills.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Subscriptions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {bills.filter((b) => b.category === "Entertainment").length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bills Table */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Bill Name</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Frequency</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Account</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bills.map((bill) => (
                  <TableRow
                    key={bill.id}
                    className={bill.status === "overdue" ? "bg-red-50" : ""}
                  >
                    <TableCell className="font-medium">{bill.name}</TableCell>
                    <TableCell>
                      {new Date(bill.dueDate).toLocaleDateString()}
                      {bill.status === "unpaid" && (
                        <span className="text-xs text-muted-foreground ml-2">
                          (in{" "}
                          {Math.ceil(
                            (new Date(bill.dueDate).getTime() - Date.now()) /
                              (1000 * 60 * 60 * 24),
                          )}{" "}
                          days)
                        </span>
                      )}
                    </TableCell>
                    <TableCell>${bill.amount.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{bill.frequency}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          bill.status === "paid"
                            ? "default"
                            : bill.status === "overdue"
                              ? "destructive"
                              : "secondary"
                        }
                      >
                        {bill.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {bill.account}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVerticalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Mark as Paid</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Empty State */}
            {bills.length === 0 && (
              <div className="p-12 text-center">
                <div className="text-4xl mb-4">🎈</div>
                <h3 className="text-lg font-medium mb-2">
                  No bills tracked yet!
                </h3>
                <p className="text-muted-foreground mb-4">
                  Add your first bill to stay on top of your finances.
                </p>
                <AddBillDialog />
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
