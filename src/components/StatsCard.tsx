import { DollarSign, Users, ShoppingCart, Percent, TrendingUp, TrendingDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatsCardProps {
  title: string
  value: string
  change: number
  icon: 'dollar' | 'users' | 'shoppingCart' | 'percentage'
}

export function StatsCard({ title, value, change, icon }: StatsCardProps) {
  const icons = {
    dollar: <DollarSign className="w-5 h-5" />,
    users: <Users className="w-5 h-5" />,
    shoppingCart: <ShoppingCart className="w-5 h-5" />,
    percentage: <Percent className="w-5 h-5" />,
  }

  const isPositive = change >= 0
  
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        
        <div className={cn(
          "h-10 w-10 rounded-full flex items-center justify-center",
          icon === 'dollar' && "bg-blue-100 text-blue-600",
          icon === 'users' && "bg-purple-100 text-purple-600",
          icon === 'shoppingCart' && "bg-green-100 text-green-600",
          icon === 'percentage' && "bg-orange-100 text-orange-600",
        )}>
          {icons[icon]}
        </div>
      </div>
      
      <div className="mt-3 flex items-center">
        <div className={cn(
          "text-sm font-medium flex items-center",
          isPositive ? "text-green-600" : "text-red-600"
        )}>
          {isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
          {Math.abs(change)}%
        </div>
        <span className="text-xs text-gray-500 ml-2">since last month</span>
      </div>
    </div>
  )
}