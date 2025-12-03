"use client"

import { motion } from 'motion/react';
import { IconMail, IconPhone, IconMapPin, IconBrandWhatsapp, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';
import { useState } from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { toast } from "sonner"
import { useReducedMotion } from '@/hooks/useReducedMotion';

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
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      toast.success("Pesan berhasil dikirim!");
      // Optionally reset the form or show a success message
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    })
    .catch((error) => {
      toast.error("Terjadi kesalahan saat mengirim pesan.");
      // Optionally show an error message
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="kontak" className="py-24 px-6 relative overflow-hidden bg-linear-to-b from-white to-orange-50">
      {/* Decorative floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
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
        <motion.div
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
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-gray-800 mb-4">Hubungi Kami</h2>
          <p className="text-xl text-gray-600">Mari wujudkan proyek digital Anda bersama kami</p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
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
                <motion.div
                  key={info.title}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group"
                >
                  {info.link ? (
                    <a href={info.link} className="block">
                      <div className="flex items-center gap-4 p-6 bg-white rounded-4xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className="shrink-0 w-14 h-14 bg-linear-to-br from-[#ff5100] to-[#ff7733] rounded-[1.2rem] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <info.icon size={24} />
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-500 mb-1">{info.title}</h4>
                          <p className="text-lg text-gray-800 font-medium">{info.content}</p>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-6 bg-white rounded-4xl shadow-lg border border-gray-100">
                      <div className="shrink-0 w-14 h-14 bg-linear-to-br from-[#ff5100] to-[#ff7733] rounded-[1.2rem] flex items-center justify-center text-white shadow-lg">
                        <info.icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-sm text-gray-500 mb-1">{info.title}</h4>
                        <p className="text-lg text-gray-800 font-medium">{info.content}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-xl text-gray-800 mb-4">Ikuti Kami</h4>
              <div className="flex gap-4 text-[#ff5100]">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-orange-100/20 backdrop-blur-sm rounded-[18px] flex items-center justify-center hover:bg-orange-200/30 transition-colors shadow-lg"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#ff5100] focus:border-transparent transition-all duration-300"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#ff5100] focus:border-transparent transition-all duration-300"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#ff5100] focus:border-transparent transition-all duration-300"
                    placeholder="+62 812 3456 7890"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#ff5100] focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Ceritakan tentang proyek Anda..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-linear-to-r from-[#ff5100] to-[#ff7733] text-white py-4 px-8 rounded-3xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Kirim Pesan
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
