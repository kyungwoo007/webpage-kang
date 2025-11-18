import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {ArrowRight, BookOpen, Users, Award, TrendingUp} from 'lucide-react';

export default function HomePage({params}: {params: Promise<{locale: string}>}) {
  return (
    <div>
      <HeroSection params={params} />
      <AboutSection params={params} />
      <ResearchHighlights params={params} />
      <StatsSection params={params} />
    </div>
  );
}

function HeroSection({params}: {params: Promise<{locale: string}>}) {
  const t = useTranslations('hero');
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8">
          {/* Profile Image Placeholder */}
          <div className="mx-auto w-48 h-48 rounded-full bg-white/10 backdrop-blur-sm border-4 border-white/20 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center">
              <Users size={64} className="text-white/50" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              {t('greeting')}
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 font-light">
              {t('title')}
            </p>
            <p className="text-xl text-blue-200">
              {t('subtitle')}
            </p>
          </div>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-blue-100 leading-relaxed">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              href={`/${(async () => (await params).locale)()}/publications`}
              className="group px-8 py-4 bg-white text-[var(--primary)] rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <span>{t('cta')}</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              href={`/${(async () => (await params).locale)()}/contact`}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[var(--primary)] transition-all duration-300"
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}

function AboutSection({params}: {params: Promise<{locale: string}>}) {
  const t = useTranslations('about');
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">{t('title')}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{t('bio')}</p>
            
            <div className="pt-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('expertise')}
              </h3>
              <ul className="space-y-3">
                {['areas.0', 'areas.1', 'areas.2', 'areas.3', 'areas.4', 'areas.5'].map((key, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-[var(--primary)] flex-shrink-0" />
                    <span className="text-gray-700">{t(key as any)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] p-1">
              <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                <Award size={120} className="text-[var(--primary)] opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResearchHighlights({params}: {params: Promise<{locale: string}>}) {
  const highlights = [
    {
      icon: BookOpen,
      title: 'Transportation Systems',
      description: 'Advanced research in ITS and smart mobility solutions'
    },
    {
      icon: TrendingUp,
      title: 'Freight Logistics',
      description: 'Optimization of freight transportation and supply chains'
    },
    {
      icon: Award,
      title: 'Policy & Economics',
      description: 'Transportation policy analysis and economic modeling'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Focus</h2>
          <p className="text-xl text-gray-600">Core areas of expertise and investigation</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center mb-6">
                <item.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection({params}: {params: Promise<{locale: string}>}) {
  const stats = [
    { label: 'Years of Research', value: '30+' },
    { label: 'Publications', value: '300+' },
    { label: 'Research Projects', value: '50+' },
    { label: 'Citations', value: '1000+' }
  ];

  return (
    <section className="py-20 bg-[var(--primary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
