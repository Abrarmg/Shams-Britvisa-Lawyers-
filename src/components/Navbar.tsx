import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisaDropdownOpen, setIsVisaDropdownOpen] = useState(false);
  const location = useLocation();

  const visaServices = [
    { name: 'UK Visitor Visa - all types', href: '/visa-services/visitor-visa' },
    { name: 'Sponsor Licence & Work Routes', href: '/sponsor-licence' },
    { name: 'Self-Sponsorship Route', href: '/self-sponsorship' },
    { name: 'Indefinite Leave to Remain (ILR)', href: '/innovator-founder' },
    { name: 'Skilled Worker', href: '/skilled-worker' },
    { name: 'Spouse Visa', href: '/spouse-visa' },
    { name: 'Refusals & Appeals', href: '/refusals-appeals' },
    { name: 'Global Talent Visa', href: '/global-talent-visa' },
    { name: 'Global Visas', href: '/global-visas' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Visa Services', dropdown: visaServices },
    { name: 'Courses', href: '/courses' },
    { name: 'Document checking service', href: '/document-checking' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/10 py-5 px-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Logo */}
        <Link to="/" className="flex items-center group cursor-pointer shrink-0">
          <img 
            src="https://i.ibb.co/rfyLd4Sj/image-640x187-1.png" 
            alt="Shams Britvisa Logo" 
            className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Links - Centered */}
        <div className="hidden lg:flex items-center justify-center flex-1 gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <div 
                  className="flex items-center gap-1.5 text-sm font-bold tracking-tight text-brand-black hover:text-brand-red cursor-pointer py-2 transition-colors duration-200"
                  onMouseEnter={() => setIsVisaDropdownOpen(true)}
                  onMouseLeave={() => setIsVisaDropdownOpen(false)}
                >
                  <span className="hover:text-brand-red transition-all">
                    {link.name}
                  </span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${isVisaDropdownOpen ? 'rotate-180' : ''}`} />
                  
                  <AnimatePresence>
                    {isVisaDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl p-4 border border-zinc-100 mt-2"
                      >
                        <div className="grid gap-1">
                          {link.dropdown.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.href}
                              className="text-[13px] font-semibold text-zinc-600 hover:text-brand-red hover:bg-zinc-50 px-3 py-2 rounded-lg transition-all text-left block"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to={link.href || '#'}
                  className="text-sm font-bold tracking-tight text-brand-black hover:text-brand-red py-2 whitespace-nowrap transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full" />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Link 
            to="/booking"
            className="bg-brand-red text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-red-700 hover:scale-[1.02] transition-all duration-200 shadow-sm active:scale-95"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-brand-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl border-t border-black/5 overflow-hidden"
          >
            <div className="p-8 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="py-2">
                      <span 
                        className="text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-4 block"
                      >
                        {link.name}
                      </span>
                      <div className="grid gap-4 pl-4 border-l border-zinc-100">
                        {link.dropdown.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.href}
                            className="text-sm font-semibold text-zinc-600 hover:text-brand-red transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.href || '#'}
                      className="block py-3 text-base font-bold text-brand-black hover:text-brand-red transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-6 pt-8 border-t border-zinc-100">
                <Link 
                  to="/booking"
                  className="bg-brand-red text-white w-full py-4 rounded-full font-bold text-center block hover:bg-red-700 transition-all shadow-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

