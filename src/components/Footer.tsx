import React from 'react';
import { Facebook, Youtube, Instagram, Music2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-brand-black text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center mb-8">
              <img 
                src="https://i.ibb.co/wF5Q8bqt/Untitled-2000-x-800-px-1.png" 
                alt="Shams Britvisa Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-white/60 mb-8 leading-relaxed">
              Providing expert UK immigration guidance with a focus on affordability and success. Regulated by the IAA.
            </p>
            <div className="flex gap-4">
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
          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'Courses', href: '/courses' },
                { name: 'How It Works', href: '/how-it-works' },
                { name: 'About Us', href: '/#why-choose-us' },
                { name: 'Our Experts', href: '/#credentials' },
                { name: 'Privacy Policy', href: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/60 hover:text-brand-red transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-bold mb-8">Our Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'Sponsor Licence', href: '/sponsor-licence' },
                { name: 'Skilled Worker Visa', href: '/skilled-worker' },
                { name: 'Self-Sponsorship', href: '/self-sponsorship' },
                { name: 'Family & Spouse Visa', href: '/spouse-visa' },
                { name: 'Innovator Founder', href: '/innovator-founder' },
                { name: 'Global Talent Visa', href: '/global-talent-visa' }
              ].map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="text-white/60 hover:text-brand-red transition-colors">{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-white/40 max-w-2xl text-center md:text-left">
            <p className="mb-2">© 2024 Shams Britvisa Lawyers Ltd. All Rights Reserved.</p>
            <p>
              Shams Britvisa Lawyers Ltd is a private limited company registered in England and Wales. 
              We are regulated by the IAA - Registration No. F202200117.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <img src="https://picsum.photos/seed/iaa/100/40" alt="IAA Logo" className="opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://picsum.photos/seed/stripe/100/40" alt="Stripe Logo" className="opacity-50 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
};
