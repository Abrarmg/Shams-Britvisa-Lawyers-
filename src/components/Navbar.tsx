import React, { useState } from 'react';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisaDropdownOpen, setIsVisaDropdownOpen] = useState(false);
  const location = useLocation();

  const visaGroups = [
    {
      title: 'Business & Work',
      links: [
        { name: 'Sponsor Licence & Work Routes', href: '/sponsor-licence' },
        { name: 'Self-Sponsorship Route', href: '/self-sponsorship' },
        { name: 'Skilled Worker', href: '/skilled-worker' },
        { name: 'Seasonal Worker Visa', href: '/seasonal-worker-visa' },
        { name: 'Corporate Immigration', href: '/corporate-immigration' },
        { name: 'Innovator Founder Visa', href: '/innovator-founder' },
        { name: 'High Potential Individual Visa', href: '/high-potential-individual-visa' },
        { name: 'Global Talent Visa', href: '/global-talent-visa' },
      ]
    },
    {
      title: 'Settlement & Family',
      links: [
        { name: 'Indefinite Leave to Remain (ILR)', href: '/ilr-3-years' },
        { name: 'Fast Track ILR', href: '/fast-track-ilr' },
        { name: 'Spouse Visa', href: '/spouse-visa' },
        { name: 'Fiancé Visa', href: '/fiance-visa' },
        { name: 'British Citizenship & Child Registration', href: '/british-citizenship' },
        { name: 'UK Ancestry Visa', href: '/uk-ancestry-visa' },
      ]
    },
    {
      title: 'EU & Other Services',
      links: [
        { name: 'EU Settled Status', href: '/eu-settled-status' },
        { name: 'EU Pre-Settled Status', href: '/eu-pre-settled-status' },
        { name: 'UK Visitor Visa - all types', href: '/visa-services/visitor-visa' },
        { name: 'BN(O) Status Visa', href: '/bno-status-visa' },
        { name: 'Diplomats & Domestic Staff Visa', href: '/diplomats-domestic-staff-visa' },
        { name: 'Administrative Review', href: '/administrative-review' },
        { name: 'Fee Waiver', href: '/fee-waiver' },
        { name: 'Refusal Reasons', href: '/refusals-appeals' },
        { name: 'Global Visas', href: '/global-visas' },
      ]
    }
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Visa Services', dropdown: visaGroups },
    { name: 'Courses', href: '/courses' },
    { name: 'Document Review', href: '/document-checking' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Contact Bar */}
      <div className="bg-brand-black text-white py-2 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <a href="tel:03301338857" className="flex items-center gap-2 hover:text-brand-red transition-colors group">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={10} className="text-white sm:hidden" />
                <Phone size={12} className="text-white hidden sm:block" />
              </div>
              <span>0330 133 8857</span>
            </a>
            <a href="mailto:info@shamsbvlawyers.com" className="flex items-center gap-2 hover:text-brand-red transition-colors group">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={10} className="text-white sm:hidden" />
                <Mail size={12} className="text-white hidden sm:block" />
              </div>
              <span>info@shamsbvlawyers.com</span>
            </a>
          </div>
          <div className="hidden sm:block text-white/60">
            IAA Regulated Immigration Experts
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-md border-b border-black/10 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Logo */}
        <Link to="/" className="flex items-center group cursor-pointer shrink-0">
          <img 
            src="https://i.ibb.co/rfyLd4Sj/image-640x187-1.png" 
            alt="Shams Britvisa Logo" 
            className="h-10 sm:h-12 md:h-16 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Links - Centered */}
        <div className="hidden lg:flex items-center justify-center flex-1 gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.dropdown && setIsVisaDropdownOpen(true)}
              onMouseLeave={() => link.dropdown && setIsVisaDropdownOpen(false)}
            >
              {link.dropdown ? (
                <div 
                  className="flex items-center gap-1.5 text-sm font-bold tracking-tight text-brand-black hover:text-brand-red cursor-pointer py-2 transition-colors duration-200"
                >
                  <span className="hover:text-brand-red transition-all">
                    {link.name}
                  </span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${isVisaDropdownOpen ? 'rotate-180' : ''}`} />
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

        {/* Mega Menu Dropdown - Outside the centered div but inside nav for full width */}
        <AnimatePresence>
          {isVisaDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-0 right-0 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.10)] border-t-[3px] border-t-[#E8192C] rounded-b-lg z-50"
              onMouseEnter={() => setIsVisaDropdownOpen(true)}
              onMouseLeave={() => setIsVisaDropdownOpen(false)}
            >
              <div className="max-w-7xl mx-auto px-10 py-10">
                <div className="grid grid-cols-3 gap-12">
                  {navLinks.find(l => l.name === 'Visa Services')?.dropdown?.map((group, idx) => (
                    <div key={idx} className="mb-8">
                      <h3 className="text-[#1a1a1a] text-[15px] font-bold mb-2 uppercase tracking-tight">
                        {group.title}
                      </h3>
                      <div className="flex flex-col">
                        {group.links.map((item, lIdx) => (
                          <Link
                            key={lIdx}
                            to={item.href}
                            className="text-[#444444] text-[14px] leading-[1.8] hover:text-[#E8192C] transition-colors duration-200"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick Actions */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Link 
              to="/booking"
              className="bg-brand-red text-white px-8 py-4 rounded-full font-bold text-base hover:bg-red-700 hover:scale-[1.02] transition-all duration-200 shadow-lg active:scale-95 block"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-brand-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-black/5 flex flex-col"
            style={{ maxHeight: 'calc(100vh - 120px)' }}
          >
            <div className="p-6 flex-1 overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name} className="mb-4 last:mb-0">
                  {link.dropdown ? (
                    <div className="py-2">
                      <span 
                        className="text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-4 block"
                      >
                        {link.name}
                      </span>
                      <div className="grid gap-6 pl-4 border-l border-zinc-100">
                        {link.dropdown.map((group, idx) => (
                          <div key={idx} className="mb-4 last:mb-0">
                            <span className="text-[13px] font-bold text-[#1a1a1a] uppercase tracking-wider mb-3 block">
                              {group.title}
                            </span>
                            <div className="flex flex-col gap-1">
                              {group.links.map((item, lIdx) => (
                                <Link
                                  key={lIdx}
                                  to={item.href}
                                  className="py-3 text-[14px] text-[#444444] hover:text-[#E8192C] transition-colors min-h-[44px] flex items-center"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.href || '#'}
                      className="block py-4 text-base font-bold text-brand-black hover:text-brand-red transition-colors min-h-[44px] flex items-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="p-6 bg-white border-t border-zinc-100 sticky bottom-0">
              <Link 
                to="/booking"
                className="bg-brand-red text-white w-full py-4 rounded-full font-bold text-center block hover:bg-red-700 transition-all shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

