import { useState, useEffect } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { Navbar } from '@/components/Navbar'
import { Dashboard } from '@/components/Dashboard'
import { generateMockData } from '@/data/mockData'

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [dashboardData, setDashboardData] = useState(() => {
    const savedData = localStorage.getItem('dashboardData')
    return savedData ? JSON.parse(savedData) : generateMockData()
  })

  useEffect(() => {
    localStorage.setItem('dashboardData', JSON.stringify(dashboardData))
  }, [dashboardData])

  const refreshData = () => {
    setDashboardData(generateMockData())
  }
  
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar 
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar 
          onMenuClick={() => setSidebarOpen(true)}
          onRefreshData={refreshData}
        />
        
        <main className="flex-1 overflow-y-auto p-4">
          <Dashboard data={dashboardData} />
        </main>
      </div>
    </div>
  )
}