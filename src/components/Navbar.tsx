import { Menu as MenuIcon, RefreshCw, Bell, UserCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavbarProps {
  onMenuClick: () => void
  onRefreshData: () => void
}

export function Navbar({ onMenuClick, onRefreshData }: NavbarProps) {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button 
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100"
          >
            <MenuIcon className="w-5 h-5" />
          </button>
          
          <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={onRefreshData}
            className={cn(
              "p-2 rounded-md text-gray-500 hover:bg-gray-100",
              "flex items-center gap-2 text-sm"
            )}
          >
            <RefreshCw className="w-4 h-4" />
            <span className="hidden sm:inline">Refresh Data</span>
          </button>
          
          <button className="p-2 rounded-md text-gray-500 hover:bg-gray-100 relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <button className="p-1 rounded-md text-gray-500 hover:bg-gray-100 ml-2">
            <UserCircle2 className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
}