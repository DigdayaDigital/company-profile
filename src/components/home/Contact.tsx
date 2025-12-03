import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { MotionDiv, MotionA } from '@/components/motion/MotionComponents';
import { ContactForm } from '@/components/client/ContactForm';

const contactInfo = [
  {
    icon: IconMail,
    title: 'Email',
    content: 'hello@digdayadigital.com',
    link: 'mailto:hello@digdayadigital.com',
  },
  {
    icon: IconPhone,
    title: 'Telepon/WhatsApp',
    content: '+62 857 1235 3595',
    link: 'https://wa.me/6285712353595',
  },
  {
    icon: IconMapPin,
    title: 'Alamat',
    content: 'Cilacap, Jawa Tengah, Indonesia',
    link: null,
  },
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/people/Digdaya-Digital/61584618411682/' },
  { icon: Instagram, href: 'https://www.instagram.com/digdayadigital/' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/digdaya-digital/' },
];

export function Contact() {
  return (
    <section id="kontak" className="py-24 px-6 relative overflow-hidden bg-linear-to-b from-white to-orange-50">
      {/* Decorative floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <MotionDiv
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-linear-to-br from-[#ff5100]/10 to-orange-200/10 rounded-[4rem] blur-3xl"
        />
        <MotionDiv
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-linear-to-br from-[#ff5100]/10 to-orange-300/10 rounded-[5rem] blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-gray-800 mb-4">Hubungi Kami</h2>
          <p className="text-xl text-gray-600">Mari wujudkan proyek digital Anda bersama kami</p>
        </MotionDiv>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl text-gray-800 mb-6">Mari Berkolaborasi</h3>
              <p className="text-gray-600 text-lg mb-8">
                Kami siap membantu mewujudkan visi digital Anda. Hubungi kami untuk konsultasi gratis dan diskusi tentang proyek Anda.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <MotionDiv
                  key={info.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group"
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      className="flex items-start gap-4 bg-white p-6 rounded-4xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="w-14 h-14 bg-linear-to-br from-[#ff5100] to-[#ff7733] rounded-[1.2rem] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg text-gray-800 mb-1">{info.title}</h4>
                        <p className="text-gray-600">{info.content}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 bg-white p-6 rounded-4xl shadow-lg border border-gray-100">
                      <div className="w-14 h-14 bg-linear-to-br from-[#ff5100] to-[#ff7733] rounded-[1.2rem] flex items-center justify-center shrink-0 shadow-lg">
                        <info.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg text-gray-800 mb-1">{info.title}</h4>
                        <p className="text-gray-600">{info.content}</p>
                      </div>
                    </div>
                  )}
                </MotionDiv>
              ))}
            </div>

            {/* Social Media */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-xl text-gray-800 mb-4">Ikuti Kami</h4>
              <div className="flex gap-4 text-[#ff5100]">
                {socialLinks.map((social, index) => (
                  <MotionA
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 bg-white rounded-[1.2rem] flex items-center justify-center shadow-lg hover:bg-[#ff5100] hover:text-white transition-colors duration-300"
                  >
                    <social.icon className="w-6 h-6" />
                  </MotionA>
                ))}
              </div>
            </MotionDiv>
          </MotionDiv>

          {/* Contact Form */}
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
