import {Metadata} from 'next';

export function generateMetadata({locale}: {locale: string}): Metadata {
  const isKorean = locale === 'ko';
  
  return {
    title: isKorean 
      ? '강경우 교수 | 한양대학교 ERICA 캠퍼스'
      : 'Professor K. Kang | Hanyang University ERICA',
    description: isKorean
      ? '한양대학교 ERICA 캠퍼스 교통공학과 강경우 교수. 지능형 교통 시스템, 화물 물류, 교통 경제학 분야의 선도적 연구자.'
      : 'Professor Kyung-Woo Kang at Hanyang University ERICA Campus. Leading researcher in Intelligent Transportation Systems, Freight Logistics, and Transportation Economics.',
    keywords: isKorean
      ? ['강경우', '한양대학교', 'ERICA', '교통공학', '지능형 교통 시스템', 'ITS', '물류', '교통 경제학']
      : ['Kyung-Woo Kang', 'Hanyang University', 'ERICA', 'Transportation', 'ITS', 'Logistics', 'Transportation Economics'],
    authors: [{name: 'Professor Kyung-Woo Kang'}],
    openGraph: {
      title: isKorean ? '강경우 교수' : 'Professor K. Kang',
      description: isKorean
        ? '한양대학교 ERICA 캠퍼스 교통공학과'
        : 'Transportation Engineering, Hanyang University ERICA',
      url: 'https://professor-kang.vercel.app',
      siteName: isKorean ? '강경우 교수 웹사이트' : 'Professor K. Kang Website',
      locale: locale === 'ko' ? 'ko_KR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: isKorean ? '강경우 교수' : 'Professor K. Kang',
      description: isKorean
        ? '한양대학교 ERICA 캠퍼스 교통공학과'
        : 'Transportation Engineering, Hanyang University ERICA',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
