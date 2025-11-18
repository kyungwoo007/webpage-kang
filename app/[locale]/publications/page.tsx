'use client';

import {useTranslations} from 'next-intl';
import {useState, useEffect} from 'react';
import {Search, Filter, BookOpen, FileText, Book, FileCheck} from 'lucide-react';
import publicationsData from '@/lib/data/publications.json';

interface Publication {
  id: string;
  authors: string[];
  year: number;
  title: string;
  journal: string;
  type: string;
  language: string;
  pages: string;
  raw: string;
}

export default function PublicationsPage() {
  const t = useTranslations('publications');
  const [publications, setPublications] = useState<Publication[]>([]);
  const [filteredPubs, setFilteredPubs] = useState<Publication[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLang, setSelectedLang] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest');

  useEffect(() => {
    setPublications(publicationsData as Publication[]);
    setFilteredPubs(publicationsData as Publication[]);
  }, []);

  useEffect(() => {
    let filtered = [...publications];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (pub) =>
          pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pub.authors.some((author) =>
            author.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          pub.journal?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Year filter
    if (selectedYear !== 'all') {
      filtered = filtered.filter((pub) => pub.year === parseInt(selectedYear));
    }

    // Type filter
    if (selectedType !== 'all') {
      filtered = filtered.filter((pub) => pub.type === selectedType);
    }

    // Language filter
    if (selectedLang !== 'all') {
      filtered = filtered.filter((pub) => pub.language === selectedLang);
    }

    // Sort
    filtered.sort((a, b) => {
      if (sortOrder === 'newest') {
        return (b.year || 0) - (a.year || 0);
      } else {
        return (a.year || 0) - (b.year || 0);
      }
    });

    setFilteredPubs(filtered);
  }, [searchTerm, selectedYear, selectedType, selectedLang, sortOrder, publications]);

  // Get unique years
  const years = Array.from(
    new Set(publications.map((p) => p.year).filter(Boolean))
  ).sort((a, b) => b - a);

  const typeIcons = {
    journal: FileText,
    conference: BookOpen,
    book: Book,
    proceeding: FileCheck
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('total')}: <span className="font-semibold text-[var(--primary)]">{filteredPubs.length}</span> / {publications.length}
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Filter size={20} className="text-[var(--primary)]" />
            <h2 className="text-lg font-semibold text-gray-900">{t('filter')}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder={t('search')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                />
              </div>
            </div>

            {/* Year Filter */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
            >
              <option value="all">{t('all')} {t('year')}</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
            >
              <option value="all">{t('all')} {t('type')}</option>
              <option value="journal">{t('journal')}</option>
              <option value="conference">{t('conference')}</option>
              <option value="book">{t('book')}</option>
              <option value="proceeding">{t('proceeding')}</option>
            </select>

            {/* Language & Sort */}
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
            >
              <option value="all">{t('all')} {t('language')}</option>
              <option value="en">{t('english')}</option>
              <option value="ko">{t('korean')}</option>
            </select>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              {filteredPubs.length} {filteredPubs.length === 1 ? 'result' : 'results'}
            </div>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
            >
              <option value="newest">{t('newest')}</option>
              <option value="oldest">{t('oldest')}</option>
            </select>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-4">
          {filteredPubs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl">
              <BookOpen size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">{t('noResults')}</p>
            </div>
          ) : (
            filteredPubs.map((pub) => {
              const IconComponent = typeIcons[pub.type as keyof typeof typeIcons] || FileText;
              
              return (
                <div
                  key={pub.id}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center">
                        <IconComponent size={24} className="text-white" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                          {pub.title.replace(/^[""]|[""]$/g, '')}
                        </h3>
                        <span className="ml-4 flex-shrink-0 inline-block px-3 py-1 text-sm font-medium rounded-full bg-[var(--primary)] text-white">
                          {pub.year}
                        </span>
                      </div>

                      {pub.authors && pub.authors.length > 0 && (
                        <p className="text-sm text-gray-600 mb-2">
                          {pub.authors.slice(0, 5).join(', ')}
                          {pub.authors.length > 5 && `, et al.`}
                        </p>
                      )}

                      {pub.journal && (
                        <p className="text-sm text-gray-700 italic mb-2">
                          {pub.journal}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-700">
                          {t(pub.type as any)}
                        </span>
                        <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-700">
                          {pub.language === 'ko' ? t('korean') : t('english')}
                        </span>
                        {pub.pages && (
                          <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-700">
                            pp. {pub.pages}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
