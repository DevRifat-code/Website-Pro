'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X, LayoutDashboard, Package, ShoppingCart, FileText, Users, LogOut, DollarSign, BarChart3 } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { label: 'Total Revenue', value: '$12,450', icon: DollarSign, color: 'text-green-500', bg: 'bg-green-500/20' },
  { label: 'Total Orders', value: '156', icon: ShoppingCart, color: 'text-blue-500', bg: 'bg-blue-500/20' },
  { label: 'Total Products', value: '12', icon: Package, color: 'text-purple-500', bg: 'bg-purple-500/20' },
  { label: 'Total Users', value: '89', icon: Users, color: 'text-orange-500', bg: 'bg-orange-500/20' },
];

const recentOrders = [
  { id: 'ORD-001', customer: 'John Doe', product: 'Invoice Software', amount: '$49', status: 'Completed', date: '2024-05-15' },
  { id: 'ORD-002', customer: 'Sarah Smith', product: 'E-Commerce System', amount: '$79', status: 'Pending', date: '2024-05-14' },
  { id: 'ORD-003', customer: 'Mike Johnson', product: 'School Management', amount: '$69', status: 'Completed', date: '2024-05-13' },
];

const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Products', href: '/dashboard/products', icon: Package },
  { name: 'Orders', href: '/dashboard/orders', icon: ShoppingCart },
  { name: 'Invoices', href: '/dashboard/invoices', icon: FileText },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
];

export const dynamic = 'force-dynamic';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex">
      <aside className="fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gray-800 p-6 hidden lg:block">
        <h2 className="text-xl font-bold text-white mb-2">Admin Panel</h2>
        <p className="text-sm text-gray-400 mb-6">Welcome, Admin</p>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg">
              <item.icon className="w-5 h-5" /> {item.name}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-8 lg:ml-64">
        <h1 className="text-3xl font-bold text-white mb-8">Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className={`w-12 h-12 ${stat.bg} rounded-lg flex items-center justify-center mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-6">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-400">Order ID</th>
                  <th className="text-left py-3 px-4 text-gray-400">Customer</th>
                  <th className="text-left py-3 px-4 text-gray-400">Product</th>
                  <th className="text-left py-3 px-4 text-gray-400">Amount</th>
                  <th className="text-left py-3 px-4 text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-700/50">
                    <td className="py-3 px-4 text-white">{order.id}</td>
                    <td className="py-3 px-4 text-white">{order.customer}</td>
                    <td className="py-3 px-4 text-white">{order.product}</td>
                    <td className="py-3 px-4 text-white">{order.amount}</td>
                    <td className="py-3 px-4"><span className={`px-2 py-1 rounded-full text-xs ${order.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{order.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}