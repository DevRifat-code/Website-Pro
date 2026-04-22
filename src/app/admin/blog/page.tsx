'use client';
import { useState } from 'react';
import { Plus, Edit, Trash2, Eye, Search, MoreVertical, FileText, Calendar, User } from 'lucide-react';

const posts = [
  { id: 1, title: 'Modern PHP Development Best Practices', category: 'Web Development', author: 'MD. Rifat Hossain', date: 'May 15, 2024', status: 'Published', image: 'bg-gradient-to-br from-blue-500 to-purple-600' },
  { id: 2, title: 'How to Start a Software Business in 2024', category: 'Business', author: 'MD. Rifat Hossain', date: 'May 10, 2024', status: 'Published', image: 'bg-gradient-to-br from-emerald-500 to-teal-600' },
  { id: 3, title: 'Complete Guide to Invoice System Development', category: 'Tutorial', author: 'MD. Rifat Hossain', date: 'May 5, 2024', status: 'Draft', image: 'bg-gradient-to-br from-orange-500 to-red-600' },
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredPosts = posts.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || p.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Blog</h1>
            <p className="text-gray-400">Manage your blog posts</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus className="w-4 h-4" /> New Post
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6">
            <FileText className="w-8 h-8 text-blue-500 mb-2" />
            <p className="text-2xl font-bold text-white">24</p>
            <p className="text-gray-400">Total Posts</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <FileText className="w-8 h-8 text-green-500 mb-2" />
            <p className="text-2xl font-bold text-white">18</p>
            <p className="text-gray-400">Published</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <FileText className="w-8 h-8 text-yellow-500 mb-2" />
            <p className="text-2xl font-bold text-white">6</p>
            <p className="text-gray-400">Drafts</p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white" placeholder="Search posts..." />
          </div>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white">
            <option value="All">All Status</option>
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
          </select>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`h-40 ${post.image} flex items-center justify-center`}>
                <FileText className="w-12 h-12 text-white/80" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-400">{post.category}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${post.status === 'Published' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                    {post.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{post.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 text-sm">Edit</button>
                  <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">View</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}