import { X, LayoutDashboard, BarChart2, PieChart, LineChart, Settings, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const navItems = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: "Dashboard", active: true },
    { icon: <BarChart2 className="w-5 h-5" />, label: "Bar Charts" },
    { icon: <LineChart className="w-5 h-5" />, label: "Line Charts" },
    { icon: <PieChart className="w-5 h-5" />, label: "Pie Charts" },
    { icon: <Settings className="w-5 h-5" />, label: "Settings" },
    { icon: <HelpCircle className="w-5 h-5" />, label: "Help" },
  ]

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed md:static inset-y-0 left-0 z-20 w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary-600 flex items-center justify-center text-white font-bold">
              CD
            </div>
            <h2 className="font-bold text-lg text-gray-800">Chart Dashboard</h2>
          </div>
          
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 text-gray-500 hover:text-gray-700 md:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="p-2">
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-md text-left",
                    item.active 
                      ? "bg-primary-50 text-primary-700" 
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gray-200"></div>
            <div>
              <p className="text-sm font-medium text-gray-800">John Doe</p>
              <p className="text-xs text-gray-500">john@example.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}