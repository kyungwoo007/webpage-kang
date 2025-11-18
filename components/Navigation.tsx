'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useTranslations, useLocale} from 'next-intl';
import {useState, useEffect} from 'react';
import {Menu, X, Globe} from 'lucide-react';

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('publications'), href: `/${locale}/publications` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'ko' : 'en';
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = path;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center space-x-2"
          >
            <div className="text-2xl font-bold">
              <span style={{color: 'var(--primary)'}}>Prof.</span>
              <span className="ml-1" style={{color: 'var(--accent)'}}>
                K. Kang
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[var(--primary)] ${
                  pathname === item.href
                    ? 'text-[var(--primary)]'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLocale}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] transition-colors"
            >
              <Globe size={16} />
              <span className="text-sm font-medium">
                {locale === 'en' ? '한국어' : 'English'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium transition-colors hover:bg-gray-50 ${
                  pathname === item.href
                    ? 'text-[var(--primary)] bg-gray-50'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                toggleLocale();
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
            >
              <Globe size={18} />
              <span>{locale === 'en' ? '한국어' : 'English'}</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
