import { Clients } from "@/components/home/Clients";
import { Contact } from "@/components/home/Contact";
import { FrequentlyAskedQuestions } from "@/components/home/FrequentlyAskedQuestions";
import { Hero } from "@/components/home/Hero";
import { Portfolio } from "@/components/home/Portfolio";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonials";
import { News } from "@/components/home/News";

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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Software Development",
            "description": "Solusi perangkat lunak custom yang disesuaikan dengan kebutuhan bisnis"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design",
            "description": "Desain antarmuka yang intuitif dan pengalaman pengguna yang memukau"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Solutions",
            "description": "Infrastruktur cloud yang scalable dan aman"
          }
        }
      ]
    }
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
