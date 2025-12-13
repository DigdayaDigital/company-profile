import { Settings, Palette, Cloud, TrendingUp, BrainCircuit, Sparkles } from 'lucide-react';
import { MotionDiv, MotionA } from '@/components/motion/MotionComponents';

const services = [
  {
    icon: Settings,
    title: 'Software Development',
    description: 'Solusi perangkat lunak custom yang disesuaikan dengan kebutuhan bisnis Anda untuk meningkatkan efisiensi dan produktivitas.',
    url: 'https://wa.me/6285712353595?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20Software%20Development%20Anda.',
    keywords: ['software development', 'custom software', 'aplikasi bisnis', 'sistem informasi'],
    category: 'SoftwareApplication',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Desain antarmuka yang intuitif dan pengalaman pengguna yang memukau untuk meningkatkan engagement dan konversi.',
    url: 'https://wa.me/6285712353595?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20UI/UX%20Design%20Anda.',
    keywords: ['ui design', 'ux design', 'desain antarmuka', 'user experience'],
    category: 'DesignService',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Infrastruktur cloud yang scalable dan aman untuk mendukung pertumbuhan bisnis Anda di era digital.',
    url: 'https://wa.me/6285712353595?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20Cloud%20Solutions%20Anda.',
    keywords: ['cloud computing', 'cloud infrastructure', 'aws', 'azure', 'google cloud'],
    category: 'ComputerService',
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimization',
    description: 'Tingkatkan visibilitas online Anda dengan strategi SEO yang efektif dan hasil yang terukur.',
    url: 'https://wa.me/6285712353595?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20SEO%20Optimization%20Anda.',
    keywords: ['seo', 'search engine optimization', 'digital marketing', 'google ranking'],
    category: 'MarketingService',
  },
  {
    icon: BrainCircuit,
    title: 'AI Automation',
    description: 'Optimalkan proses bisnis Anda dengan solusi AI yang cerdas dan otomatisasi seperti N8N yang efisien.',
    url: 'https://wa.me/6285712353595?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20AI%20Automation%20Anda.',
    keywords: ['ai automation', 'artificial intelligence', 'business automation', 'n8n', 'workflow automation'],
    category: 'AutomationService',
  },
  {
    icon: Sparkles,
    title: 'AI Integration',
    description: 'Integrasikan teknologi AI terbaru ke dalam sistem Anda untuk meningkatkan kinerja dan inovasi bisnis.',
    url: 'https://wa.me/6285712353595?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20AI%20Integration%20Anda.',
    keywords: ['ai integration', 'machine learning', 'chatbot', 'ai solutions'],
    category: 'TechnologyIntegration',
  }
];

export function Services() {
  // Schema.org structured data for SEO
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Digdaya Digital",
    "url": "https://www.digdayadigital.com",
    "description": "Software house dan digital agency terpercaya di Cilacap yang menyediakan layanan pengembangan software, UI/UX design, cloud solutions, SEO optimization, dan AI automation.",
    // "address": {
    //   "@type": "PostalAddress",
    //   "streetAddress": "Jl. Wijayakusuma",
    //   "addressLocality": "Cilacap",
    //   "addressRegion": "Jawa Tengah",
    //   "addressCountry": "ID"
    // },
    // "contactPoint": {
    //   "@type": "ContactPoint",
    //   "telephone": "+62-857-1235-3595",
    //   "contactType": "customer service",
    //   "email": "info@digdayadigital.com",
    //   "availableLanguage": ["Indonesian", "English"]
    // },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Layanan Digital",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "serviceType": service.category,
          "provider": {
            "@type": "Organization",
            "name": "Digdaya Digital"
          }
        },
        "position": index + 1
      }))
    }
  };

  return (
    <section 
      id="layanan" 
      className="py-24 px-6 relative overflow-hidden"
      itemScope 
      itemType="https://schema.org/ItemList"
    >
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <div className="container mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-gray-800 mb-4">Layanan Kami</h2>
          <p className="text-xl text-gray-600">Solusi digital terbaik untuk bisnis Anda</p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <MotionDiv
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div
                className="bg-white rounded-[40px] p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                style={{
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                }}
              >
                {/* 3D Icon Container */}
                <MotionDiv
                  className="w-20 h-20 bg-linear-to-br from-[#ff5100] to-[#ff7733] rounded-[30px] flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    boxShadow: '0 15px 30px rgba(255, 81, 0, 0.3)',
                  }}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </MotionDiv>

                <h3 className="text-2xl text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                <MotionA
                  href={service.url}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-linear-to-r from-[#ff5100] to-[#ff7733] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
                >
                  Selengkapnya
                </MotionA>

                {/* Decorative gradient blob */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-linear-to-br from-orange-100 to-transparent rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}