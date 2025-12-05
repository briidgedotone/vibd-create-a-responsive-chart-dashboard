import { ResponsiveContainer } from 'recharts'
import { BarChartCard } from '@/components/charts/BarChartCard'
import { LineChartCard } from '@/components/charts/LineChartCard'
import { PieChartCard } from '@/components/charts/PieChartCard'
import { AreaChartCard } from '@/components/charts/AreaChartCard'
import { StatsCard } from '@/components/StatsCard'
import { DashboardData } from '@/data/mockData'

interface DashboardProps {
  data: DashboardData
}

export function Dashboard({ data }: DashboardProps) {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard 
          title="Total Revenue" 
          value={`$${data.stats.revenue.toLocaleString()}`}
          change={data.stats.revenueChange} 
          icon="dollar"
        />
        <StatsCard 
          title="Total Users" 
          value={data.stats.users.toLocaleString()}
          change={data.stats.usersChange} 
          icon="users"
        />
        <StatsCard 
          title="New Orders" 
          value={data.stats.orders.toLocaleString()}
          change={data.stats.ordersChange} 
          icon="shoppingCart"
        />
        <StatsCard 
          title="Conversion Rate" 
          value={`${data.stats.conversionRate}%`}
          change={data.stats.conversionRateChange} 
          icon="percentage"
        />
      </div>
      
      {/* Charts - First Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AreaChartCard data={data.areaData} />
        <BarChartCard data={data.barData} />
      </div>
      
      {/* Charts - Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LineChartCard data={data.lineData} />
        </div>
        <PieChartCard data={data.pieData} />
      </div>
    </div>
  )
}