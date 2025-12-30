
import type { Metadata } from "next";
import { FloatingShape } from '@/components/home/FloatingShape';

export const metadata: Metadata = {
  title: "Kebijakan Privasi | Digdaya Digital",
  description: "Kebijakan privasi Digdaya Digital menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.",
  openGraph: {
    title: "Kebijakan Privasi | Digdaya Digital",
    description: "Kebijakan privasi Digdaya Digital menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.",
    type: "website",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShape
          color="from-[#ff5100] to-[#ff7733]"
          size="w-96 h-96"
          position="top-20 -left-20"
          delay={0}
          duration={25}
        />
        <FloatingShape
          color="from-orange-200 to-orange-100"
          size="w-80 h-80"
          position="top-1/3 -right-20"
          delay={1}
          duration={30}
        />
        <FloatingShape
          color="from-[#ff5100]/20 to-[#ff7733]/10"
          size="w-72 h-72"
          position="bottom-20 left-1/4"
          delay={2}
          duration={28}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 max-w-4xl">
        <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 md:p-12 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Kebijakan Privasi
          </h1>
          <p className="text-gray-600 mb-8">
            Terakhir diperbarui: 30 Desember 2025
          </p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Pendahuluan</h2>
              <p className="leading-relaxed">
                Digdaya Digital ("Digdaya Digital", "kami", "kita", atau "milik kami") 
                menghormati privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan 
                privasi ini akan menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi 
                informasi pribadi Anda ketika Anda mengunjungi website kami atau menggunakan layanan kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Informasi yang Kami Kumpulkan</h2>
              <p className="leading-relaxed mb-4">
                Kami dapat mengumpulkan dan memproses data berikut tentang Anda:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Informasi yang Anda berikan kepada kami secara langsung (nama, email, nomor telepon, perusahaan)</li>
                <li>Informasi teknis, termasuk alamat IP, jenis browser, dan sistem operasi</li>
                <li>Informasi tentang kunjungan Anda ke website kami, termasuk halaman yang Anda lihat</li>
                <li>Informasi yang dikumpulkan melalui cookies dan teknologi pelacakan serupa</li>
                <li>Data komunikasi ketika Anda menghubungi kami atau menggunakan formulir kontak</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Cara Kami Menggunakan Informasi Anda</h2>
              <p className="leading-relaxed mb-4">
                Kami menggunakan informasi yang kami kumpulkan untuk tujuan berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Menyediakan, mengoperasikan, dan memelihara layanan kami</li>
                <li>Meningkatkan, personalisasi, dan memperluas layanan kami</li>
                <li>Memahami dan menganalisis bagaimana Anda menggunakan layanan kami</li>
                <li>Mengembangkan produk, layanan, dan fitur baru</li>
                <li>Berkomunikasi dengan Anda untuk memberikan update, marketing, dan informasi lainnya</li>
                <li>Mengirim email promosi dan newsletter (dengan persetujuan Anda)</li>
                <li>Menemukan dan mencegah penipuan atau aktivitas berbahaya lainnya</li>
                <li>Mematuhi kewajiban hukum kami</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Cookies dan Teknologi Pelacakan</h2>
              <p className="leading-relaxed">
                Website kami menggunakan cookies dan teknologi pelacakan serupa untuk meningkatkan 
                pengalaman browsing Anda, menganalisis traffic website, dan memahami dari mana 
                pengunjung kami berasal. Anda dapat mengatur browser Anda untuk menolak cookies, 
                tetapi ini mungkin membatasi fungsionalitas website kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Berbagi Informasi</h2>
              <p className="leading-relaxed mb-4">
                Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada 
                pihak ketiga. Kami dapat membagikan informasi Anda dalam situasi berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Dengan penyedia layanan yang membantu kami mengoperasikan bisnis kami</li>
                <li>Untuk mematuhi kewajiban hukum atau merespons permintaan hukum</li>
                <li>Untuk melindungi hak, properti, atau keselamatan kami dan pengguna lain</li>
                <li>Dalam kasus merger, akuisisi, atau penjualan aset</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Keamanan Data</h2>
              <p className="leading-relaxed">
                Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk 
                melindungi data pribadi Anda dari akses yang tidak sah, perubahan, pengungkapan, 
                atau penghancuran. Namun, tidak ada metode transmisi melalui internet atau metode 
                penyimpanan elektronik yang 100% aman.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Hak Anda</h2>
              <p className="leading-relaxed mb-4">
                Anda memiliki hak-hak berikut terkait data pribadi Anda:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Hak untuk mengakses data pribadi yang kami miliki tentang Anda</li>
                <li>Hak untuk meminta koreksi data yang tidak akurat</li>
                <li>Hak untuk meminta penghapusan data Anda</li>
                <li>Hak untuk membatasi pemrosesan data Anda</li>
                <li>Hak untuk menolak pemrosesan data Anda</li>
                <li>Hak untuk portabilitas data</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Untuk melaksanakan hak-hak ini, silakan hubungi kami di{" "}
                <a href="mailto:info@digdayadigital.com" className="text-[#ff5100] hover:text-[#ff7733] underline">
                  info@digdayadigital.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Retensi Data</h2>
              <p className="leading-relaxed">
                Kami akan menyimpan data pribadi Anda hanya selama diperlukan untuk tujuan yang 
                ditetapkan dalam kebijakan privasi ini, kecuali periode retensi yang lebih lama 
                diperlukan atau diizinkan oleh hukum.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Privasi Anak-anak</h2>
              <p className="leading-relaxed">
                Layanan kami tidak ditujukan untuk anak-anak di bawah usia 13 tahun. Kami tidak 
                secara sengaja mengumpulkan informasi pribadi dari anak-anak di bawah 13 tahun. 
                Jika Anda adalah orang tua atau wali dan mengetahui bahwa anak Anda telah memberikan 
                kami data pribadi, silakan hubungi kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Perubahan Kebijakan Privasi</h2>
              <p className="leading-relaxed">
                Kami dapat memperbarui kebijakan privasi kami dari waktu ke waktu. Kami akan 
                memberi tahu Anda tentang perubahan apa pun dengan memposting kebijakan privasi 
                baru di halaman ini dan memperbarui tanggal "Terakhir diperbarui" di bagian atas 
                kebijakan ini.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Hubungi Kami</h2>
              <p className="leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-2">
                <p><strong className="text-gray-800">Digdaya Digital</strong></p>
                <p>Email: <a href="mailto:info@digdayadigital.com" className="text-[#ff5100] hover:text-[#ff7733] underline">info@digdayadigital.com</a></p>
                <p>Telepon: <a href="tel:+6285712353595" className="text-[#ff5100] hover:text-[#ff7733] underline">+62 857-1235-3595</a></p>
                <p>Alamat: Jl. Wijayakusuma, Cilacap, Jawa Tengah, Indonesia</p>
              </div>
            </section>

            <section className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 italic">
                Dengan menggunakan website kami, Anda menyetujui kebijakan privasi kami dan setuju 
                dengan syarat dan ketentuannya.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}