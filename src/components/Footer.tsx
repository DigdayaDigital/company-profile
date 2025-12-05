import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { MotionDiv, MotionA } from '@/components/motion/MotionComponents';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/people/Digdaya-Digital/61584618411682/' },
    { icon: Instagram, href: 'https://www.instagram.com/digdayadigital/' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/digdaya-digital/' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Main Footer */}
      <div className="bg-linear-to-br from-[#ff5100] to-[#ff7733] text-white py-16 px-6 rounded-t-[60px] relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
            {/* Logo and Description */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="flex items-center gap-3 mb-6">
                {/* <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-[25px] flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">DD</span>
                </div> */}
                <Image src="/images/logo-footer.png" alt="Digdaya Digital Logo" width={64} height={64} />
                <span className="text-2xl">Digdaya Digital</span>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed max-w-md">
                Menghadirkan solusi digital inovatif untuk transformasi bisnis Anda di era modern.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <MotionA
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-[18px] flex items-center justify-center hover:bg-white/30 transition-colors shadow-lg"
                  >
                    <social.icon className="w-5 h-5" />
                  </MotionA>
                ))}
              </div>
            </MotionDiv>

            {/* Quick Links */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['Tentang Kami', 'Layanan', 'Portofolio', 'Berita', 'Kontak', 'FAQ'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase().replace(' ', '-')}`} 
                      className="text-white/80 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </MotionDiv>

            {/* Contact Info */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl mb-6">Kontak</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 shrink-0" />
                  <span className="text-white/80">Jl. Wijayakusuma, Cilacap, Jawa Tengah, Indonesia</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 shrink-0" />
                  <span className="text-white/80">+62 857 1235 3595</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 shrink-0" />
                  <span className="text-white/80">info@digdayadigital.com</span>
                </li>
              </ul>
            </MotionDiv>
          </div>

          {/* Bottom Bar */}
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 pt-8 border-t border-white/20 text-center text-white/80"
          >
            <p>&copy; 2025 Digdaya Digital. All rights reserved.</p>
          </MotionDiv>
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-[40px] blur-2xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-[50px] blur-2xl" />
      </div>
    </footer>
  );
}