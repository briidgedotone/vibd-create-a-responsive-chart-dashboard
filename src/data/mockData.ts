export interface DashboardData {
  stats: {
    revenue: number;
    revenueChange: number;
    users: number;
    usersChange: number;
    orders: number;
    ordersChange: number;
    conversionRate: number;
    conversionRateChange: number;
  };
  barData: Array<{ name: string; value: number }>;
  lineData: Array<{ name: string; visitors: number; customers: number }>;
  pieData: Array<{ name: string; value: number; color: string }>;
  areaData: Array<{ name: string; value: number }>;
}

export function generateMockData(): DashboardData {
  // Generate random stats
  const revenue = Math.floor(Math.random() * 500000) + 200000;
  const users = Math.floor(Math.random() * 10000) + 5000;
  const orders = Math.floor(Math.random() * 2000) + 500;
  const conversionRate = parseFloat((Math.random() * 5 + 2).toFixed(2));

  // Generate bar chart data for monthly revenue
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const barData = months.map(month => ({
    name: month,
    value: Math.floor(Math.random() * 50) + 20
  }));

  // Generate line chart data for traffic and conversion
  const lineData = Array.from({ length: 10 }, (_, i) => ({
    name: `W${i + 1}`,
    visitors: Math.floor(Math.random() * 50) + 30,
    customers: Math.floor(Math.random() * 20) + 5
  }));

  // Generate pie chart data for traffic sources
  const pieData = [
    { name: 'Organic', value: Math.floor(Math.random() * 40) + 20, color: '#3b82f6' },
    { name: 'Direct', value: Math.floor(Math.random() * 30) + 15, color: '#10b981' },
    { name: 'Social', value: Math.floor(Math.random() * 25) + 10, color: '#f59e0b' },
    { name: 'Referral', value: Math.floor(Math.random() * 20) + 5, color: '#6366f1' },
  ];

  // Generate area chart data for user activity
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const areaData = days.map(day => ({
    name: day,
    value: Math.floor(Math.random() * 40) + 10
  }));

  return {
    stats: {
      revenue,
      revenueChange: parseFloat((Math.random() * 10 - 5).toFixed(1)),
      users,
      usersChange: parseFloat((Math.random() * 15).toFixed(1)),
      orders,
      ordersChange: parseFloat((Math.random() * 12 - 2).toFixed(1)),
      conversionRate,
      conversionRateChange: parseFloat((Math.random() * 8 - 3).toFixed(1)),
    },
    barData,
    lineData,
    pieData,
    areaData
  };
}