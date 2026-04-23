'use client';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { Menu, X, LayoutDashboard, Package, ShoppingCart, FileText, Users, LogOut, DollarSign, BarChart3, TrendingUp, Eye, CreditCard, Wallet } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { label: 'Total Revenue', value: '$12,450', icon: DollarSign, color: 'text-green-500', bg: 'bg-green-500/20', change: '+12%' },
  { label: 'Total Orders', value: '156', icon: ShoppingCart, color: 'text-blue-500', bg: 'bg-blue-500/20', change: '+8%' },
  { label: 'Total Products', value: '12', icon: Package, color: 'text-purple-500', bg: 'bg-purple-500/20', change: '+2' },
  { label: 'Total Users', value: '89', icon: Users, color: 'text-orange-500', bg: 'bg-orange-500/20', change: '+15%' },
];

const recentOrders = [
  { id: 'ORD-001', customer: 'John Doe', product: 'Invoice Software', amount: '$49', status: 'Completed', date: 'May 15, 2024' },
  { id: 'ORD-002', customer: 'Sarah Smith', product: 'E-Commerce System', amount: '$79', status: 'Pending', date: 'May 14, 2024' },
  { id: 'ORD-003', customer: 'Mike Johnson', product: 'School Management', amount: '$69', status: 'Completed', date: 'May 13, 2024' },
  { id: 'ORD-004', customer: 'Emily Davis', product: 'News Portal', amount: '$39', status: 'Processing', date: 'May 12, 2024' },
];

const topProducts = [
  { name: 'Invoice Software', sales: 156, revenue: '$7,644' },
  { name: 'E-Commerce System', sales: 89, revenue: '$7,031' },
  { name: 'School Management', sales: 67, revenue: '$4,623' },
  { name: 'News Portal', sales: 45, revenue: '$1,755' },
];

const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Products', href: '/admin/products', icon: Package },
  { name: 'Orders', href: '#', icon: ShoppingCart },
  { name: 'Invoices', href: '/invoice', icon: FileText },
  { name: 'Analytics', href: '#', icon: BarChart3 },
  { name: 'Payments', href: '/payment', icon: CreditCard },
];

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          if (userDoc.exists()) {
            setUser({ uid: currentUser.uid, ...userDoc.data() });
          } else if (currentUser.uid === 'a5TmwfoR9rcWwyvYyjzQuW2eY382') {
            setUser({ uid: currentUser.uid, email: currentUser.email, name: 'Admin', role: 'admin' });
          } else {
            setUser({ uid: currentUser.uid, email: currentUser.email, name: currentUser.displayName || 'User' });
          }
        } catch (e) {
          if (currentUser.uid === 'a5TmwfoR9rcWwyvYyjzQuW2eY382') {
            setUser({ uid: currentUser.uid, email: currentUser.email, name: 'Admin', role: 'admin' });
          } else {
            setUser({ uid: currentUser.uid, email: currentUser.email, name: currentUser.displayName || 'User' });
          }
        }
      } else {
        router.push('/login');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gray-800 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform`}>
        <div className="p-6 border-b border-gray-700">
          <Link href="/" className="text-xl font-bold text-white">R Admin</Link>
          <p className="text-sm text-gray-400">Welcome, {user?.name || 'Admin'}</p>
        </div>
        <nav className="p-4 space-y-1">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors">
              <item.icon className="w-5 h-5" /> {item.name}
            </Link>
          ))}
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-gray-700 rounded-lg transition-colors w-full">
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        <header className="bg-gray-800 p-4 flex items-center justify-between lg:hidden">
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
          <span className="text-white font-bold">Dashboard</span>
        </header>

        <main className="flex-1 p-4 lg:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-white">Dashboard Overview</h1>
              <p className="text-gray-400">Welcome back, {user?.name || 'Admin'}!</p>
            </div>
            <div className="mt-4 lg:mt-0 flex gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                <Eye className="w-4 h-4" /> View Site
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-4 lg:p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 lg:w-12 h-10 lg:h-12 ${stat.bg} rounded-lg flex items-center justify-center`}>
                    <stat.icon className={`w-5 lg:w-6 h-5 lg:h-6 ${stat.color}`} />
                  </div>
                  <span className="text-green-400 text-sm flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> {stat.change}
                  </span>
                </div>
                <p className="text-xl lg:text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Orders */}
            <div className="bg-gray-800 rounded-xl p-4 lg:p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-white">Recent Orders</h2>
                <button className="text-blue-400 hover:text-blue-300 text-sm">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-gray-400 text-sm">Order</th>
                      <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-gray-400 text-sm">Customer</th>
                      <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-gray-400 text-sm">Amount</th>
                      <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-gray-400 text-sm">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-gray-700/50">
                        <td className="py-2 lg:py-3 px-2 lg:px-4 text-white text-sm">{order.id}</td>
                        <td className="py-2 lg:py-3 px-2 lg:px-4 text-gray-300 text-sm">{order.customer}</td>
                        <td className="py-2 lg:py-3 px-2 lg:px-4 text-white text-sm">{order.amount}</td>
                        <td className="py-2 lg:py-3 px-2 lg:px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            order.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 
                            order.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' : 
                            'bg-blue-500/20 text-blue-400'
                          }`}>{order.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Top Products */}
            <div className="bg-gray-800 rounded-xl p-4 lg:p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-white">Top Products</h2>
                <Link href="/admin/products" className="text-blue-400 hover:text-blue-300 text-sm">View All</Link>
              </div>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">{index + 1}</span>
                      <span className="text-white font-medium">{product.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-medium">{product.revenue}</p>
                      <p className="text-gray-400 text-sm">{product.sales} sales</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="text-lg font-bold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/admin/products" className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors text-center">
                <Package className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <p className="text-white font-medium">Add Product</p>
              </Link>
              <Link href="/invoice" className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors text-center">
                <FileText className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <p className="text-white font-medium">Create Invoice</p>
              </Link>
              <Link href="/payment" className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors text-center">
                <CreditCard className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <p className="text-white font-medium">Payments</p>
              </Link>
              <Link href="#" className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors text-center">
                <Wallet className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="text-white font-medium">Withdraw</p>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}