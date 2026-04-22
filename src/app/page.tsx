'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Code, ShoppingCart, FileText, Mail, Send, ArrowRight, Check, ExternalLink, FileCode, CheckCircle } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Products', href: '#products' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  { title: 'Web Application', desc: 'Custom web applications built with modern technologies.', icon: Code },
  { title: 'E-Commerce Solutions', desc: 'Complete e-commerce solutions to grow your online business.', icon: ShoppingCart },
  { title: 'Invoice Software', desc: 'Powerful invoice & billing software for your business.', icon: FileText },
  { title: 'Blog & News Websites', desc: 'SEO optimized blog & news websites with modern design.', icon: FileCode },
  { title: 'PHP & MySQL', desc: 'Secure, fast and scalable PHP & MySQL based solutions.', icon: CheckCircle },
];

const products = [
  { name: 'Invoice Software', price: '$49', tag: 'Featured', tagColor: 'bg-amber-500', desc: 'Complete invoicing & billing management system.' },
  { name: 'E-Commerce System', price: '$79', tag: 'Popular', tagColor: 'bg-blue-600', desc: 'Full featured e-commerce platform.' },
  { name: 'News Portal', price: '$39', tag: 'New', tagColor: 'bg-emerald-500', desc: 'Professional news & magazine website.' },
  { name: 'School Management', price: '$69', tag: 'Bestseller', tagColor: 'bg-purple-600', desc: 'Complete school management system.' },
];

const stats = [
  { value: '50+', label: 'Projects Completed' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5', label: 'Premium Products' },
  { value: '2+', label: 'Years Experience' },
];

const blogs = [
  { category: 'Web Development', title: 'Modern PHP Development Best Practices', date: 'May 15, 2024', image: 'bg-gradient-to-br from-blue-500 to-purple-600' },
  { category: 'Business', title: 'How to Start a Software Business in 2024', date: 'May 10, 2024', image: 'bg-gradient-to-br from-emerald-500 to-teal-600' },
  { category: 'Tutorial', title: 'Complete Guide to Invoice System Development', date: 'May 5, 2024', image: 'bg-gradient-to-br from-orange-500 to-red-600' },
];

const socialLinks = [
  { name: 'Facebook', icon: '📘', color: 'hover:bg-blue-600' },
  { name: 'Twitter', icon: '🐦', color: 'hover:bg-black' },
  { name: 'YouTube', icon: '📺', color: 'hover:bg-red-600' },
  { name: 'GitHub', icon: '🐙', color: 'hover:bg-gray-800' },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className={`text-xl font-bold transition-colors ${scrolled ? 'text-blue-600' : 'text-white'}`}>R</span>
              <span className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}> MD. RIFAT HOSSAIN</span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-blue-50 ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}>
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="ml-4 bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/30">
                Hire Me
              </a>
            </div>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block px-4 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <div className="p-4">
              <a href="#contact" className="block w-full bg-blue-600 text-white px-5 py-3 rounded-lg text-center font-semibold">Hire Me</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/cover.png" alt="cover" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-slate-900/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-green-400 text-sm font-medium">Available for Freelance Work</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-2">Hello, I'm</h1>
              <h1 className="text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 mb-4">MD. RIFAT HOSSAIN</h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-4 font-light">Full Stack Web Developer & Digital Creator</p>
              <p className="text-gray-400 mb-8 max-w-xl text-lg">I build powerful, scalable and modern web applications. I also develop ready-to-use software solutions that help businesses grow faster.</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
                {['PHP', 'MySQL', 'JavaScript', 'Firebase', 'GitHub'].map((skill) => (
                  <span key={skill} className="px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/20">{skill}</span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#products" className="group bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-600/30 flex items-center justify-center gap-2">
                  View My Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  Hire Me
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
                  <Image src="/profile.png" alt="MD. Rifat Hossain" width={320} height={320} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white text-gray-900 px-4 py-2 rounded-lg shadow-lg">
                  <span className="text-sm font-medium">🚀 Building Ideas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Services</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2">What I Do</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Products</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2">Our Premium Products</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Ready-to-use solutions for your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className={`${product.tagColor} text-white py-2 text-center text-sm font-semibold`}>
                  {product.tag}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 group/btn">
                      Details 
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#products" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
              View All Products <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-center">
                  <span className="text-9xl">👨‍💻</span>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white text-gray-900 px-6 py-3 rounded-xl shadow-lg">
                  <p className="font-bold">2+ Years</p>
                  <p className="text-sm text-gray-500">Experience</p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">About</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">About Me</h2>
              <h3 className="text-xl text-blue-600 mb-4 font-semibold">Passionate Web Developer</h3>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">I am MD. Rifat Hossain, a passionate Full Stack Web Developer. I love to create modern, fast and secure web applications. I also develop ready-made PHP scripts and software solutions.</p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">My goal is to provide the best digital solutions that help businesses and individuals achieve their goals.</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-gray-700 font-medium">Clean Code</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <FileCode className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-gray-700 font-medium">Modern Design</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <Code className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-gray-700 font-medium">Fast Support</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <ExternalLink className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <p className="text-gray-700 font-medium">Regular Updates</p>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/30">
                Download CV <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Blog</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2">Latest From Blog</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
                <div className={`h-40 ${blog.image} flex items-center justify-center`}>
                  <FileText className="w-12 h-12 text-white/80" />
                </div>
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-semibold">{blog.category}</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2 group-hover:text-blue-600 transition-colors">{blog.title}</h3>
                  <p className="text-gray-500 text-sm">{blog.date}</p>
                  <button className="text-blue-600 hover:text-blue-700 mt-4 font-medium flex items-center gap-1">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Contact</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-2">Get In Touch</h2>
            <p className="text-gray-400 mt-4">Have a project in mind? Let's talk!</p>
          </div>
          <form className="max-w-xl mx-auto space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors" />
              <input type="email" placeholder="Your Email" className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            <input type="text" placeholder="Subject" className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors" />
            <textarea placeholder="Your Message" rows={5} className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2">
              <Send className="w-5 h-5" /> Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">R MD. RIFAT HOSSAIN</h3>
              <p className="text-gray-400 text-sm mb-4">Full Stack Developer</p>
              <p className="text-gray-400 text-sm">Building digital solutions that help businesses grow and succeed in the digital world.</p>
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social, index) => (
                  <a key={index} href="#" className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors ${social.color}`}>
                    <span className="text-2xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                {['Home', 'Products', 'Services', 'About', 'Contact'].map((link) => (
                  <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Products</h4>
              <ul className="space-y-3 text-gray-400">
                {['Invoice Software', 'E-Commerce System', 'News Portal', 'School Management'].map((product) => (
                  <li key={product}><a href="#" className="hover:text-white transition-colors">{product}</a></li>
                ))}
                <li><a href="#" className="text-blue-400 hover:text-blue-300">All Products →</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> mdrifathossainpersonal@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 MD. Rifat Hossain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}