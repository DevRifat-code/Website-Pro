'use client';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    slug: 'modern-php-development-best-practices',
    title: 'Modern PHP Development Best Practices',
    category: 'Web Development',
    author: 'MD. RIFAT HOSSAIN',
    date: 'May 15, 2024',
    image: 'bg-gradient-to-br from-blue-500 to-purple-600',
    content: `PHP continues to evolve with modern features like readonly properties, named arguments, and attributes. In this comprehensive guide, I'll walk you through the best practices for building robust PHP applications in 2024.

## Key Takeaways:
- Use PHP 8.x features for better performance
- Follow PSR standards for code consistency
- Implement proper error handling and logging
- Use dependency injection
- Write testable code

Modern PHP development requires understanding of both traditional OOP concepts and newer functional programming patterns. Start by upgrading to PHP 8.3 and take advantage of its performance improvements.`,
  },
  {
    slug: 'how-to-start-software-business-2024',
    title: 'How to Start a Software Business in 2024',
    category: 'Business',
    author: 'MD. RIFAT HOSSAIN',
    date: 'May 10, 2024',
    image: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    content: `Starting a software business in 2024 requires more than just coding skills. You need to understand market needs, pricing strategies, and customer acquisition.

## Steps to Success:
1. Identify your target market
2. Build a minimum viable product
3. Gather user feedback
4. Iterate and improve
5. Scale your business

The software industry is growing rapidly. With the right approach, you can build a profitable business serving clients worldwide.`,
  },
  {
    slug: 'complete-guide-invoice-system-development',
    title: 'Complete Guide to Invoice System Development',
    category: 'Tutorial',
    author: 'MD. RIFAT HOSSAIN',
    date: 'May 5, 2024',
    image: 'bg-gradient-to-br from-orange-500 to-red-600',
    content: `Building an invoice system requires careful planning and implementation. This guide covers everything from database design to generating PDF invoices.

## Features Required:
- Client management
- Product/Service catalog
- Invoice generation
- Payment tracking
- PDF export
- Email sending

I'll show you how to build a completeInvoice system using modern web technologies.`,
  },
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-700">Go Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <article>
          <div className={`h-64 ${post.image} rounded-2xl flex items-center justify-center mb-8`}>
            <h1 className="text-4xl font-bold text-white text-center px-8">{post.title}</h1>
          </div>

          <div className="flex items-center gap-6 text-gray-500 mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" /> {post.author}
            </span>
            <span className="text-blue-600 font-medium">{post.category}</span>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                }
                if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ') || paragraph.startsWith('4. ') || paragraph.startsWith('5. ')) {
                  return <li key={index} className="text-gray-700 ml-4">{paragraph.replace(/^\d+\. /, '')}</li>;
                }
                if (paragraph.startsWith('- ')) {
                  return <li key={index} className="text-gray-700 ml-4">{paragraph.replace('- ', '')}</li>;
                }
                return <p key={index} className="text-gray-700 mb-4">{paragraph}</p>;
              })}
            </div>
          </div>

          <div className="flex items-center justify-between mt-8 pt-8 border-t">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}