import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Transaction } from "@prisma/client";
import React from "react";
import { deleteTransaction } from "@/actions/transactions";
import MenuActions from "./menuActions";

interface TransactionsTableProps {
  transactions: Transaction[];
}

const TransactionsTable: React.FC<TransactionsTableProps> = ({
  transactions,
}) => {
  return (
    <Card x-chunk="dashboard-06-chunk-0">
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
        <CardDescription>
          Manage your transactions and view their performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="hidden md:table-cell">Amount</TableHead>
              <TableHead className="hidden md:table-cell">Category</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="hidden md:table-cell">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => {
              return (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">
                    {transaction.name}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={cn(
                        transaction.expense ? "bg-rose-500" : "bg-green-500"
                      )}
                    >
                      {transaction.expense ? "Expense" : "Income"}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    ${transaction.amount}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {transaction.category}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {transaction.date.toDateString()}
                  </TableCell>
                  <MenuActions id={transaction.id} />
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> products
        </div>
      </CardFooter>
    </Card>
  );
};

export default TransactionsTable;
