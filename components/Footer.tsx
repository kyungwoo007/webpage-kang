'use client';

import Link from 'next/link';
import {useTranslations, useLocale} from 'next-intl';
import {Mail, MapPin, ExternalLink} from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tContact = useTranslations('contact');
  const locale = useLocale();

  const quickLinks = [
    { name: tNav('home'), href: `/${locale}` },
    { name: tNav('about'), href: `/${locale}/about` },
    { name: tNav('publications'), href: `/${locale}/publications` },
    { name: tNav('contact'), href: `/${locale}/contact` },
  ];

  const socialLinks = [
    { name: 'ResearchGate', href: '#', icon: ExternalLink },
    { name: 'Google Scholar', href: '#', icon: ExternalLink },
    { name: 'LinkedIn', href: '#', icon: ExternalLink },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* University Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              {t('university')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-[var(--accent)]" />
                <p
                  className="text-sm"
                  dangerouslySetInnerHTML={{
                    __html: tContact('address')
                  }}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0 text-[var(--accent)]" />
                <a
                  href="mailto:kkw@hanyang.ac.kr"
                  className="text-sm hover:text-white transition-colors"
                >
                  kkw@hanyang.ac.kr
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              Professional Profiles
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <link.icon size={16} />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Professor K. Kang. {t('rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
