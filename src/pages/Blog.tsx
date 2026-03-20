import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: "UK Self-Sponsorship: A Comprehensive Guide for 2026",
    excerpt: "Learn how to sponsor yourself to work in the UK without a traditional employer. We break down the legal requirements and process.",
    date: "March 1, 2026",
    author: "Shams Britvisa",
    category: "Self-Sponsorship",
    image: "https://picsum.photos/seed/uk-visa/800/600"
  },
  {
    title: "New Changes to Skilled Worker Visa Salary Thresholds",
    excerpt: "The Home Office has announced significant updates to the minimum salary requirements for Skilled Worker visas. Here's what you need to know.",
    date: "February 25, 2026",
    author: "Immigration Expert",
    category: "Visa Updates",
    image: "https://picsum.photos/seed/business/800/600"
  },
  {
    title: "Top 5 Reasons for UK Visitor Visa Refusals",
    excerpt: "Avoid common pitfalls that lead to visa rejections. Our experts share insights on how to strengthen your application.",
    date: "February 18, 2026",
    author: "Legal Team",
    category: "Visitor Visa",
    image: "https://picsum.photos/seed/travel/800/600"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-zinc-50 selection:bg-brand-red selection:text-white">
      <Navbar />
      <main className="pt-24 sm:pt-32 pb-12 sm:pb-24">
        <section className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-brand-black mb-4 sm:mb-8"
            >
              OUR <span className="text-brand-red">BLOG</span>
            </motion.h1>
            <p className="text-base sm:text-xl text-zinc-600 font-medium leading-relaxed">
              Stay updated with the latest UK immigration news, guides, and expert insights.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {blogPosts.map((post, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl border border-zinc-100 group"
              >
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                    <span className="bg-brand-red text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 sm:gap-4 text-zinc-400 text-xs sm:text-sm mb-3 sm:mb-4 font-bold">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="sm:w-[14px] sm:h-[14px]" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={12} className="sm:w-[14px] sm:h-[14px]" />
                      {post.author}
                    </div>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-brand-black mb-3 sm:mb-4 leading-tight group-hover:text-brand-red transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-600 font-medium mb-4 sm:mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    to="#" 
                    className="inline-flex items-center gap-2 text-brand-red font-black hover:gap-3 transition-all text-sm sm:text-base"
                  >
                    Read More <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 mt-16 sm:mt-24">
          <div className="bg-brand-black rounded-[24px] sm:rounded-[40px] p-8 sm:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-4xl font-black mb-4 sm:mb-6">Subscribe to our Newsletter</h2>
            <p className="text-base sm:text-xl text-zinc-400 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Get the latest immigration updates and expert tips delivered straight to your inbox.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3.5 sm:py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-brand-red transition-all w-full"
              />
              <button 
                type="submit"
                className="bg-brand-red text-white px-8 py-3.5 sm:py-4 rounded-full font-black hover:bg-white hover:text-brand-red transition-all shadow-xl w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
