'use client';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Products', href: '#products' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  { title: 'Web Application', desc: 'Custom web applications built with modern technologies.', icon: '🌐' },
  { title: 'E-Commerce Solutions', desc: 'Complete e-commerce solutions to grow your online business.', icon: '🛒' },
  { title: 'Invoice Software', desc: 'Powerful invoice & billing software for your business.', icon: '📄' },
  { title: 'Blog & News Websites', desc: 'SEO optimized blog & news websites with modern design.', icon: '📰' },
  { title: 'PHP & MySQL', desc: 'Secure, fast and scalable PHP & MySQL based solutions.', icon: '⚡' },
];

const products = [
  { name: 'Invoice Software', price: '$49', tag: 'Featured', tagColor: 'bg-yellow-500' },
  { name: 'E-Commerce System', price: '$79', tag: 'Popular', tagColor: 'bg-blue-500' },
  { name: 'News Portal', price: '$39', tag: 'New', tagColor: 'bg-green-500' },
  { name: 'School Management', price: '$69', tag: 'Bestseller', tagColor: 'bg-purple-500' },
];

const stats = [
  { value: '50+', label: 'Projects Completed' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5', label: 'Premium Products' },
  { value: '2+', label: 'Years Experience' },
];

const blogs = [
  { category: 'Web Development', title: 'Modern PHP Development Best Practices', date: 'May 15, 2024' },
  { category: 'Business', title: 'How to Start a Software Business in 2024', date: 'May 10, 2024' },
  { category: 'Tutorial', title: 'Complete Guide to Invoice System Development', date: 'May 5, 2024' },
];

const footerLinks = {
  quick: ['Home', 'Products', 'Services', 'About', 'Contact'],
  products: ['Invoice Software', 'E-Commerce System', 'News Portal', 'School Management'],
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">R MD. RIFAT HOSSAIN</span>
              <span className="ml-2 text-sm text-gray-500 hidden sm:block">Full Stack Developer</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-700 hover:text-blue-600 transition-colors">
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Hire Me
              </a>
            </div>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block px-4 py-3 text-gray-700 hover:bg-gray-50">
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="inline-block px-4 py-1 bg-green-500 text-white text-sm rounded-full mb-4">Available for Freelance Work</span>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">Hello, I'm</h1>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-blue-300">MD. RIFAT HOSSAIN</h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-6">Full Stack Web Developer & Digital Creator</p>
              <p className="text-gray-400 mb-8 max-w-xl">I build powerful, scalable and modern web applications. I also develop ready-to-use software solutions that help businesses grow faster.</p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
                {['PHP', 'MySQL', 'JavaScript', 'Firebase', 'GitHub'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm">{skill}</span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#products" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                  View My Products
                </a>
                <a href="#contact" className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center">
                  Hire Me
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-64 h-64 lg:w-80 lg:h-80 bg-blue-700 rounded-full flex items-center justify-center">
                <span className="text-8xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What I Do</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
            <p className="text-gray-600 mb-4">Ready-to-use solutions for your business</p>
            <a href="#products" className="inline-block px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
              View All Products
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`${product.tagColor} text-white text-center py-1 text-sm`}>
                  {product.tag}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">Complete solution for your business needs.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">View Details →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl lg:text-5xl font-bold text-blue-300 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <div className="bg-blue-700 rounded-xl p-8 text-center">
                <span className="text-8xl">👨‍💻</span>
              </div>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
              <h3 className="text-xl text-blue-600 mb-4">Passionate Web Developer</h3>
              <p className="text-gray-600 mb-6">I am MD. Rifat Hossain, a passionate Full Stack Web Developer. I love to create modern, fast and secure web applications. I also develop ready-made PHP scripts and software solutions.</p>
              <p className="text-gray-600 mb-6">My goal is to provide the best digital solutions that help businesses and individuals achieve their goals.</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <span className="text-2xl">✅</span>
                  <p className="text-gray-700 font-medium">Clean Code</p>
                </div>
                <div className="text-center">
                  <span className="text-2xl">🎨</span>
                  <p className="text-gray-700 font-medium">Modern Design</p>
                </div>
                <div className="text-center">
                  <span className="text-2xl">⚡</span>
                  <p className="text-gray-700 font-medium">Fast Support</p>
                </div>
                <div className="text-center">
                  <span className="text-2xl">🔄</span>
                  <p className="text-gray-700 font-medium">Regular Updates</p>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Latest From Blog</h2>
            <a href="#blog" className="text-blue-600 hover:text-blue-700">View All Blog →</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <span className="text-sm text-blue-600 font-medium">{blog.category}</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2">{blog.title}</h3>
                <p className="text-gray-500 text-sm">{blog.date}</p>
                <button className="text-blue-600 hover:text-blue-700 mt-4 font-medium">Read More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Contact Me</h2>
            <p className="text-gray-400">Have a project in mind? Let's talk!</p>
          </div>
          <form className="max-w-xl mx-auto space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500" />
            <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">R MD. RIFAT HOSSAIN</h3>
              <p className="text-gray-400 text-sm">Full Stack Developer</p>
              <p className="text-gray-400 text-sm mt-2">Building digital solutions that help businesses grow and succeed in the digital world.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                {footerLinks.quick.map((link) => (
                  <li key={link}><a href="#" className="hover:text-white">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                {footerLinks.products.map((product) => (
                  <li key={product}><a href="#" className="hover:text-white">{product}</a></li>
                ))}
                <li><a href="#" className="text-blue-400 hover:text-blue-300">All Products →</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white text-2xl">📘</a>
                <a href="#" className="text-gray-400 hover:text-white text-2xl">🐦</a>
                <a href="#" className="text-gray-400 hover:text-white text-2xl">📺</a>
                <a href="#" className="text-gray-400 hover:text-white text-2xl">🐙</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 MD. Rifat Hossain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}