import React from 'react';
import { Facebook, Youtube, Instagram, Music2, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-brand-black text-white pt-12 sm:pt-24 pb-8 sm:pb-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Column 1: Company Info */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start mb-6 sm:mb-8">
              <img 
                src="https://i.ibb.co/wF5Q8bqt/Untitled-2000-x-800-px-1.png" 
                alt="Shams Britvisa Logo" 
                className="h-20 sm:h-28 w-auto"
              />
            </div>
            <p className="text-white/60 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Providing expert UK immigration guidance with a focus on affordability and success. Regulated by the OISC.
            </p>
            <div className="flex justify-center sm:justify-start gap-4">
              {[
                { Icon: Facebook, href: 'https://www.facebook.com/share/CoJKqWPu2Nq7C99w/?mibextid=LQQJ4d' },
                { Icon: Youtube, href: 'https://www.youtube.com/channel/UCUrhgnmIAbf43Olr_-Yk55w' },
                { Icon: Instagram, href: 'https://www.instagram.com/shamsbritvisalawyers/profilecard/?igsh=bG1oaHIxcHp5Y21w' },
                { Icon: Music2, href: 'https://www.tiktok.com/@shams.bvlawyers?_t=8qx1ZGiOkfx&_r=1' }
              ].map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold mb-6 sm:mb-8">Quick Links</h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'Courses', href: '/courses' },
                { name: 'How It Works', href: '/how-it-works' },
                { name: 'About Us', href: '/#why-choose-us' },
                { name: 'Our Experts', href: '/#credentials' },
                { name: 'IAA Verification', href: '/iaa-verification' },
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Legal Disclaimer', href: '/legal-disclaimer' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/60 hover:text-brand-red transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold mb-6 sm:mb-8">Our Services</h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { name: 'Business Immigration', href: '/business-immigration' },
                { name: 'Family Visa', href: '/family-visa' },
                { name: 'Sponsor Licence', href: '/sponsor-licence' },
                { name: 'Skilled Worker Visa', href: '/skilled-worker' },
                { name: 'Self-Sponsorship', href: '/self-sponsorship' },
                { name: 'Innovator Founder', href: '/innovator-founder' },
                { name: 'ILR in 3 Years', href: '/ilr-3-years' },
                { name: 'Global Talent Visa', href: '/global-talent-visa' }
              ].map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="text-white/60 hover:text-brand-red transition-colors">{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold mb-6 sm:mb-8">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-brand-red" />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Email Us</p>
                  <a href="mailto:info@shamsbvlawyers.com" className="text-sm hover:text-brand-red transition-colors">info@shamsbvlawyers.com</a>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-brand-red" />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Call Us</p>
                  <a href="tel:03301338857" className="text-sm hover:text-brand-red transition-colors">0330 133 8857</a>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-brand-red" />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Our Office</p>
                  <p className="text-sm text-white/60">Manchester, United Kingdom</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 sm:pt-12 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-sm text-white/60 max-w-4xl text-center lg:text-left">
            <p className="font-bold text-white mb-4 leading-relaxed text-xs sm:text-sm">
              Shams Britvisa Lawyers Ltd is a Company registered in England and Wales (Company Registration No: 14182242. 
              The company is regulated by the Office of the Immigration Services Commissioner (OISC) in Level 1 Immigration category, 
              ensuring compliance with immigration laws and standards. OISC Registration No: F202200117
            </p>
            <p className="text-[10px] sm:text-xs text-white/30">© 2024 Shams Britvisa Lawyers Ltd. All Rights Reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <img src="https://picsum.photos/seed/stripe/100/40" alt="Stripe Logo" className="opacity-50 grayscale hover:grayscale-0 transition-all h-8 sm:h-10" />
          </div>
        </div>
      </div>
    </footer>
  );
};
