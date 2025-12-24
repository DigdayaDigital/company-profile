import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import dynamic from 'next/dynamic';
import { SectionLoader } from '@/components/ui/section-loader';

// Lazy load komponen yang tidak terlihat di initial viewport
const Portfolio = dynamic(() => import('@/components/home/Portfolio').then(mod => ({ default: mod.Portfolio })), {
  loading: () => <SectionLoader />,
});

const Testimonials = dynamic(() => import('@/components/home/Testimonials').then(mod => ({ default: mod.Testimonials })), {
  loading: () => <SectionLoader />,
});

const News = dynamic(() => import('@/components/home/News').then(mod => ({ default: mod.News })), {
  loading: () => <SectionLoader />,
});

const FrequentlyAskedQuestions = dynamic(() => import('@/components/home/FrequentlyAskedQuestions').then(mod => ({ default: mod.FrequentlyAskedQuestions })), {
  loading: () => <SectionLoader />,
});

const Contact = dynamic(() => import('@/components/home/Contact').then(mod => ({ default: mod.Contact })), {
  loading: () => <SectionLoader />,
});

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Digdaya Digital",
    "alternateName": "PT Digdaya Digital Indonesia",
    "url": "https://www.digdayadigital.com",
    "logo": "https://www.digdayadigital.com/images/logo.png",
    "description": "Partner digital terpercaya yang siap membantu mengubah ide bisnis Anda menjadi aplikasi dan website yang powerful. Ayo wujudkan bisnis impian Anda bersama kami!",
    "slogan": "Wujudkan Bisnis Digital Impian Anda Bersama Kami",
    "foundingDate": "2025",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Wijayakusuma",
      "addressLocality": "Cilacap",
      "addressRegion": "Jawa Tengah",
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-857-1235-3595",
      "contactType": "customer service",
      "email": "info@digdayadigital.com",
      "availableLanguage": ["Indonesian", "English"]
    },
    "sameAs": [
      "https://www.facebook.com/people/Digdaya-Digital/61584618411682/",
      "https://www.instagram.com/digdayadigital/",
      "https://www.linkedin.com/company/digdaya-digital/"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        {/* <Clients /> */}
        <Testimonials />
        <News />
        <FrequentlyAskedQuestions />
        <Contact />
      </main>
    </>
  );
}
