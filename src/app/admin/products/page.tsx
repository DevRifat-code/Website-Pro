'use client';
import { useState } from 'react';
import { Plus, Edit, Trash2, Eye, Search, Filter, MoreVertical, Package, DollarSign, Tag } from 'lucide-react';

const products = [
  { id: 1, name: 'Invoice Software', price: 49, category: 'Software', status: 'Active', sales: 156, image: '📄' },
  { id: 2, name: 'E-Commerce System', price: 79, category: 'E-Commerce', status: 'Active', sales: 89, image: '🛒' },
  { id: 3, name: 'News Portal', price: 39, category: 'CMS', status: 'Active', sales: 45, image: '📰' },
  { id: 4, name: 'School Management', price: 69, category: 'Education', status: 'Active', sales: 67, image: '🏫' },
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Products</h1>
            <p className="text-gray-400">Manage your products</p>
          </div>
          <button onClick={() => setShowAddModal(true)} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus className="w-4 h-4" /> Add Product
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6">
            <Package className="w-8 h-8 text-blue-500 mb-2" />
            <p className="text-2xl font-bold text-white">12</p>
            <p className="text-gray-400">Total Products</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <DollarSign className="w-8 h-8 text-green-500 mb-2" />
            <p className="text-2xl font-bold text-white">$12,450</p>
            <p className="text-gray-400">Total Revenue</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <Tag className="w-8 h-8 text-purple-500 mb-2" />
            <p className="text-2xl font-bold text-white">4</p>
            <p className="text-gray-400">Categories</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <Package className="w-8 h-8 text-orange-500 mb-2" />
            <p className="text-2xl font-bold text-white">357</p>
            <p className="text-gray-400">Total Sales</p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white" placeholder="Search products..." />
          </div>
          <button className="flex items-center gap-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>

        {/* Products Table */}
        <div className="bg-gray-800 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="text-left py-4 px-6 text-gray-300">Product</th>
                <th className="text-left py-4 px-6 text-gray-300">Category</th>
                <th className="text-left py-4 px-6 text-gray-300">Price</th>
                <th className="text-left py-4 px-6 text-gray-300">Sales</th>
                <th className="text-left py-4 px-6 text-gray-300">Status</th>
                <th className="text-right py-4 px-6 text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-t border-gray-700">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{product.image}</span>
                      <span className="font-medium text-white">{product.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-300">{product.category}</td>
                  <td className="py-4 px-6 text-white">${product.price}</td>
                  <td className="py-4 px-6 text-gray-300">{product.sales}</td>
                  <td className="py-4 px-6">
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">{product.status}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2 justify-end">
                      <button className="p-2 text-gray-400 hover:text-white"><Eye className="w-4 h-4" /></button>
                      <button className="p-2 text-gray-400 hover:text-white"><Edit className="w-4 h-4" /></button>
                      <button className="p-2 text-red-400 hover:text-red-300"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}