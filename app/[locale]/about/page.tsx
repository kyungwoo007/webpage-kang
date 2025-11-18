import {useTranslations} from 'next-intl';
import {Award, BookOpen, Users, TrendingUp, GraduationCap, Globe} from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('about');

  const achievements = [
    { icon: GraduationCap, title: 'Education', value: 'Ph.D. in Transportation Engineering' },
    { icon: Users, title: 'Experience', value: '30+ Years in Academia' },
    { icon: BookOpen, title: 'Publications', value: '300+ Research Papers' },
    { icon: Globe, title: 'Impact', value: 'International Recognition' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
        </div>

        {/* Profile Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] p-1">
                <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                  <Users size={120} className="text-[var(--primary)] opacity-20" />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Professor Kyung-Woo Kang (강경우)
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('bio')}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Expertise */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
            <Award className="text-[var(--primary)]" size={28} />
            <span>{t('expertise')}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {['areas.0', 'areas.1', 'areas.2', 'areas.3', 'areas.4', 'areas.5'].map((key, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-2 h-2 rounded-full bg-[var(--primary)] mt-2 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 font-medium">{t(key as any)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Interests */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center mb-4">
              <TrendingUp size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Intelligent Transportation Systems
            </h3>
            <p className="text-gray-600">
              Advanced research in ITS applications including electronic toll collection, 
              traffic management, and smart mobility solutions.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center mb-4">
              <BookOpen size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Freight & Logistics
            </h3>
            <p className="text-gray-600">
              Optimization of freight transportation systems, supply chain management, 
              and logistics network design.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center mb-4">
              <Award size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Transportation Economics
            </h3>
            <p className="text-gray-600">
              Economic analysis of transportation policies, congestion pricing, 
              and infrastructure investment evaluation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
