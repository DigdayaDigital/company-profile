"use client";

import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { MotionDiv } from '@/components/motion/MotionComponents';
import { AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Apa itu Digdaya Digital?',
    answer: 'Digdaya Digital adalah software house dan startup digital yang mengubah ide bisnis menjadi aplikasi, website, dan sistem powerful. Kami fokus pada solusi teknologi yang membantu pertumbuhan bisnis Anda.'
  },
  {
    question: 'Layanan apa saja yang ditawarkan?',
    answer: 'Kami menawarkan berbagai layanan digital termasuk Software Development (web & mobile apps), UI/UX Design, Cloud Solutions, konsultasi teknologi, dan pemeliharaan sistem. Semua disesuaikan dengan kebutuhan bisnis Anda.'
  },
  {
    question: 'Berapa lama waktu pengerjaan project?',
    answer: 'Waktu pengerjaan bervariasi tergantung kompleksitas project. Website company profile biasanya 2-4 minggu, aplikasi mobile 2-3 bulan, dan sistem enterprise 3-6 bulan. Kami akan memberikan timeline detail setelah analisis kebutuhan.'
  },
  {
    question: 'Apakah ada garansi dan maintenance?',
    answer: 'Ya, setiap project kami berikan garansi bug fixing dan kami menyediakan paket maintenance untuk memastikan sistem Anda selalu optimal. Support teknis tersedia untuk membantu Anda kapan saja.'
  },
  {
    question: 'Bagaimana proses kerja sama dimulai?',
    answer: 'Prosesnya mudah: 1) Konsultasi gratis untuk memahami kebutuhan, 2) Kami buatkan proposal dan estimasi biaya, 3) Kick-off meeting dan pembayaran DP, 4) Development dengan update berkala, 5) Testing dan deployment, 6) Training dan handover.'
  },
  {
    question: 'Apakah bisa bekerja untuk klien di luar Cilacap?',
    answer: 'Tentu saja! Kami melayani klien dari seluruh Indonesia dan luar negeri. Dengan teknologi komunikasi modern, kami bisa bekerja secara remote dengan efektif. Meeting bisa dilakukan via video call atau datang langsung jika diperlukan.'
  },
  {
    question: 'Berapa biaya untuk membuat website/aplikasi?',
    answer: 'Biaya bervariasi tergantung fitur dan kompleksitas. Hubungi kami untuk konsultasi gratis dan penawaran sesuai budget Anda.'
  },
  {
    question: 'Apakah source code akan diberikan?',
    answer: 'Ya, setelah pelunasan, seluruh source code dan aset digital menjadi milik Anda sepenuhnya. Kami juga menyediakan dokumentasi lengkap dan training agar tim Anda bisa maintain sistem ke depannya.'
  }
];

export function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 relative overflow-hidden bg-linear-to-b from-orange-50 to-white">
      {/* Decorative floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <MotionDiv
          animate={{
            y: [0, 40, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 w-96 h-96 bg-linear-to-br from-[#ff5100]/10 to-orange-200/10 rounded-[5rem] blur-3xl"
        />
        <MotionDiv
          animate={{
            y: [0, -40, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-linear-to-br from-orange-300/10 to-[#ff5100]/10 rounded-[4rem] blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Pertanyaan yang sering ditanyakan tentang layanan kami
          </p>
        </MotionDiv>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div
                className={`
                  bg-white rounded-4xl overflow-hidden
                  border-2 transition-all duration-300
                  ${openIndex === index 
                    ? 'border-[#ff5100] shadow-2xl shadow-[#ff5100]/20' 
                    : 'border-gray-200 hover:border-[#ff5100]/50 shadow-lg hover:shadow-xl'
                  }
                `}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group-hover:bg-linear-to-r group-hover:from-transparent group-hover:to-orange-50/30 transition-all duration-300"
                >
                  <span className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                    openIndex === index ? 'text-[#ff5100]' : 'text-gray-800 group-hover:text-[#ff5100]'
                  }`}>
                    {faq.question}
                  </span>
                  <MotionDiv
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`shrink-0 ml-4 transition-colors duration-300 ${
                      openIndex === index ? 'text-[#ff5100]' : 'text-gray-400 group-hover:text-[#ff5100]'
                    }`}
                  >
                    <IconChevronDown size={28} stroke={2.5} />
                  </MotionDiv>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <MotionDiv
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 pt-2">
                        <div className="w-full h-px bg-linear-to-r from-[#ff5100]/20 via-[#ff5100]/50 to-[#ff5100]/20 mb-4" />
                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </MotionDiv>
                  )}
                </AnimatePresence>
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* CTA Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-linear-to-br from-[#ff5100] to-[#ff7733] rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-[#ff5100]/20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Masih Ada Pertanyaan?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Tim kami siap membantu menjawab pertanyaan Anda dan memberikan konsultasi gratis untuk project Anda
            </p>
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://wa.me/6285712353595?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20Digdaya%20Digital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#ff5100] px-10 py-4 rounded-3xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Hubungi Kami
              </a>
            </MotionDiv>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}