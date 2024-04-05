import Link from "next/link"
import { Input } from "@/components/ui/input"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { JSX, SVGProps } from "react"
import { BarChartIcon, ContactIcon, CreditCardIcon, FlagIcon, LayoutDashboardIcon, LogOutIcon, SearchIcon, SettingsIcon, WalletCardsIcon, WalletIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="bg-white p-8">
      <div className="flex h-full min-h-screen">
        <aside className="w-64">
          <div className="mb-10">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-200">
              <FlagIcon className="h-6 w-6 text-gray-600" />
            </div>
            <h1 className="mt-2 text-center text-2xl font-bold">OFSPACE</h1>
          </div>
          <nav className="space-y-2">
            <Link
              className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100"
              href="#"
            >
              <LayoutDashboardIcon className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
              href="#"
            >
              <WalletCardsIcon className="h-5 w-5" />
              <span>Cards</span>
            </Link>
            <Link
              className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
              href="#"
            >
              <CreditCardIcon className="h-5 w-5" />
              <span>Payments</span>
            </Link>
            <Link
              className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
              href="#"
            >
              <BarChartIcon className="h-5 w-5" />
              <span>Statistics</span>
            </Link>
            <Link
              className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
              href="#"
            >
              <WalletIcon className="h-5 w-5" />
              <span>Transactions</span>
            </Link>
            <Link
              className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
              href="#"
            >
              <SettingsIcon className="h-5 w-5" />
              <span>Settings</span>
            </Link>
            <Link
              className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
              href="#"
            >
              <LogOutIcon className="h-5 w-5" />
              <span>Log out</span>
            </Link>
          </nav>
        </aside>
        <main className="flex-1">
          <header className="flex items-center justify-between py-4">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input className="pl-10" placeholder="Search" type="search" />
              </div>
              <Avatar>
                <AvatarImage alt="Sanjoy_R" src="https://github.com/sanjoy.png" />
                <AvatarFallback>SR</AvatarFallback>
              </Avatar>
            </div>
          </header>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <div className="grid grid-cols-3 gap-6 mb-6">
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Income</CardTitle>
                    <CardDescription>45 Transaction</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-semibold">$2,502,00</div>
                  </CardContent>
                  <CardFooter className="text-green-500">+12%</CardFooter>
                </Card>
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Spending</CardTitle>
                    <CardDescription>12 Transaction</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-semibold">$1,143,00</div>
                  </CardContent>
                  <CardFooter className="text-red-500">-4%</CardFooter>
                </Card>
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Activity</CardTitle>
                    <CardDescription>Total Profit</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-semibold">$12,342</div>
                  </CardContent>
                  <CardFooter className="text-gray-500">+2%</CardFooter>
                </Card>
              </div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-[300px] bg-muted-foreground" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>ID</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Payment</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Alna_M</TableCell>
                        <TableCell>323133</TableCell>
                        <TableCell>+34$OS</TableCell>
                        <TableCell>
                          <Badge variant="secondary">Pending</Badge>
                        </TableCell>
                        <TableCell>22/03/23</TableCell>
                        <TableCell>5495 2343 3500 ****</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Jason_A</TableCell>
                        <TableCell>134325</TableCell>
                        <TableCell>+200$</TableCell>
                        <TableCell>
                          <Badge variant="default">Completed</Badge>
                        </TableCell>
                        <TableCell>19/03/23</TableCell>
                        <TableCell>VISA 4263 9269 4026 ****</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Alex_D</TableCell>
                        <TableCell>433229</TableCell>
                        <TableCell>+421$</TableCell>
                        <TableCell>
                          <Badge variant="secondary">Canceled</Badge>
                        </TableCell>
                        <TableCell>15/03/23</TableCell>
                        <TableCell>3742 4545 4500 ****</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Milan_K</TableCell>
                        <TableCell>632132</TableCell>
                        <TableCell>+1200$</TableCell>
                        <TableCell>
                          <Badge variant="default">Completed</Badge>
                        </TableCell>
                        <TableCell>12/03/23</TableCell>
                        <TableCell>5554 6514 4232 ****</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-semibold">$23,240,000</div>
                  <div className="flex space-x-2 mt-4">
                    <Button variant="default">Send</Button>
                    <Button variant="outline">Withdraw</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Cards</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-black rounded-lg p-4 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <CreditCardIcon className="h-8 w-8" />
                      <ContactIcon className="h-8 w-8" />
                    </div>
                    <div className="text-2xl font-bold mb-4">63758 45698 2567 7546</div>
                    <div className="flex justify-between">
                      <div>
                        <div className="text-sm">Name</div>
                        <div className="font-bold">Sanjoy Roy</div>
                      </div>
                      <div>
                        <div className="text-sm">Exp Date</div>
                        <div className="font-bold">08/28</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Input placeholder="1234 2345 6789" />
                  </div>
                  <div className="mt-4">
                    <Input placeholder="Recipient Name" />
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <Input placeholder="Amount" />
                    <Select>
                      <SelectTrigger id="currency">
                        <SelectValue placeholder="USD" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="usd">USD</SelectItem>
                        <SelectItem value="eur">EUR</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="mt-4">
                    <Button>Send Money</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
