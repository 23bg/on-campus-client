import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { DollarSign, Users, UserPlus, BarChart } from "lucide-react"

export default function Overview() {
  return (
    <div className="dark:bg-black min-h-screen">
      {/* Page Header */}
      <div className="border-b bg-white dark:bg-black">
        <div className="pt-24 px-6 md:px-36 pb-10 space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Overview</h1>
          <p className="text-muted-foreground text-md">Quick stats and insights</p>
        </div>
      </div>

      <div className="px-6 md:px-36 pt-16 pb-20 space-y-10">
        {/* Stat Cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,245</div>
              <p className="text-xs text-muted-foreground">+5.3% from last week</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$21,430</div>
              <p className="text-xs text-muted-foreground">+12.1% this month</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">New Signups</CardTitle>
              <UserPlus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,132</div>
              <p className="text-xs text-muted-foreground">+3.8% from last week</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32.5%</div>
              <p className="text-xs text-muted-foreground">-1.2% improvement</p>
            </CardContent>
          </Card>
        </div>

        {/* Chart Placeholder */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-base font-medium">Traffic Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-muted-foreground border rounded-md">
              [Insert Chart Here]
            </div>
          </CardContent>
        </Card>
      </div>
    </div>

  )
}
