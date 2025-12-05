import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  title: string
  children: ReactNode
  className?: string
}

export function Card({ title, children, className }: CardProps) {
  return (
    <div className={cn(
      "bg-white rounded-lg border border-gray-200 shadow-sm",
      "overflow-hidden",
      className
    )}>
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-medium text-gray-800">{title}</h3>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  )
}