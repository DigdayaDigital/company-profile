
import type { Metadata } from "next";
import { FloatingShape } from '@/components/home/FloatingShape';

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan | Digdaya Digital",
  description: "Syarat dan ketentuan penggunaan layanan Digdaya Digital. Baca dengan seksama sebelum menggunakan layanan kami.",
  openGraph: {
    title: "Syarat dan Ketentuan | Digdaya Digital",
    description: "Syarat dan ketentuan penggunaan layanan Digdaya Digital. Baca dengan seksama sebelum menggunakan layanan kami.",
    type: "website",
  },
};

export default function TermsOfService() {
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
            Syarat dan Ketentuan
          </h1>
          <p className="text-gray-600 mb-8">
            Terakhir diperbarui: 30 Desember 2025
          </p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Pendahuluan</h2>
              <p className="leading-relaxed">
                Selamat datang di Digdaya Digital ("Digdaya Digital", "kami", "kita", 
                atau "milik kami"). Syarat dan Ketentuan ini mengatur penggunaan Anda atas website 
                kami dan layanan yang kami sediakan. Dengan mengakses atau menggunakan layanan kami, 
                Anda setuju untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan 
                bagian mana pun dari syarat ini, Anda tidak boleh menggunakan layanan kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Definisi</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-gray-800">"Layanan"</strong> mengacu pada semua layanan yang disediakan oleh Digdaya Digital, termasuk pengembangan aplikasi, pembuatan website, dan layanan digital lainnya.</li>
                <li><strong className="text-gray-800">"Pengguna"</strong> atau <strong className="text-gray-800">"Anda"</strong> mengacu pada individu atau entitas yang mengakses atau menggunakan layanan kami.</li>
                <li><strong className="text-gray-800">"Konten"</strong> mengacu pada teks, gambar, video, atau materi lain yang tersedia melalui layanan kami.</li>
                <li><strong className="text-gray-800">"Proyek"</strong> mengacu pada pekerjaan pengembangan yang disepakati antara Anda dan Digdaya Digital.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Penggunaan Layanan</h2>
              <p className="leading-relaxed mb-4">
                Dengan menggunakan layanan kami, Anda setuju untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Memberikan informasi yang akurat, terkini, dan lengkap</li>
                <li>Menjaga kerahasiaan kredensial akun Anda</li>
                <li>Bertanggung jawab atas semua aktivitas yang terjadi di bawah akun Anda</li>
                <li>Tidak menggunakan layanan kami untuk tujuan ilegal atau tidak sah</li>
                <li>Tidak mengganggu atau merusak layanan kami atau server</li>
                <li>Tidak mencoba mendapatkan akses tidak sah ke bagian mana pun dari layanan kami</li>
                <li>Mematuhi semua hukum dan peraturan yang berlaku</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Hak Kekayaan Intelektual</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">4.1 Kepemilikan Website</h3>
                  <p className="leading-relaxed">
                    Semua konten, fitur, dan fungsi website kami, termasuk tetapi tidak terbatas pada 
                    teks, grafik, logo, ikon, gambar, dan software, adalah milik eksklusif Digdaya Digital 
                    dan dilindungi oleh hukum hak cipta, merek dagang, dan hak kekayaan intelektual lainnya.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">4.2 Proyek Pengembangan</h3>
                  <p className="leading-relaxed">
                    Hak kekayaan intelektual atas proyek yang dikembangkan akan diatur dalam perjanjian 
                    terpisah untuk setiap proyek. Secara umum, setelah pembayaran penuh diterima, klien 
                    akan menerima hak penggunaan atas produk yang dikembangkan sesuai dengan ruang lingkup 
                    yang disepakati.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Layanan Pengembangan</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">5.1 Proposal dan Persetujuan</h3>
                  <p className="leading-relaxed">
                    Semua proyek dimulai dengan proposal yang menguraikan ruang lingkup, timeline, dan 
                    biaya. Proyek dimulai setelah proposal disetujui dan pembayaran awal diterima.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">5.2 Timeline dan Deliverable</h3>
                  <p className="leading-relaxed">
                    Timeline proyek adalah estimasi dan dapat berubah berdasarkan kompleksitas, perubahan 
                    ruang lingkup, atau keterlambatan dalam menerima informasi yang diperlukan dari klien. 
                    Kami akan berusaha sebaik mungkin untuk memenuhi timeline yang disepakati.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">5.3 Perubahan Ruang Lingkup</h3>
                  <p className="leading-relaxed">
                    Permintaan perubahan di luar ruang lingkup yang disepakati dapat mengakibatkan biaya 
                    tambahan dan perubahan timeline. Semua perubahan harus disetujui secara tertulis 
                    oleh kedua belah pihak.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">5.4 Tanggung Jawab Klien</h3>
                  <p className="leading-relaxed mb-2">Klien bertanggung jawab untuk:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Memberikan semua konten, informasi, dan aset yang diperlukan tepat waktu</li>
                    <li>Memberikan feedback dan persetujuan dalam waktu yang wajar</li>
                    <li>Memastikan semua konten yang diberikan tidak melanggar hak pihak ketiga</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Pembayaran dan Pengembalian Dana</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">6.1 Syarat Pembayaran</h3>
                  <p className="leading-relaxed mb-2">
                    Kecuali disepakati lain, struktur pembayaran kami adalah:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>50% down payment sebelum proyek dimulai</li>
                    <li>50% sisa pembayaran setelah proyek selesai dan sebelum delivery final</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">6.2 Metode Pembayaran</h3>
                  <p className="leading-relaxed">
                    Kami menerima pembayaran melalui transfer bank, e-wallet, dan metode pembayaran 
                    lain yang disepakati.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">6.3 Keterlambatan Pembayaran</h3>
                  <p className="leading-relaxed">
                    Keterlambatan pembayaran dapat mengakibatkan penangguhan pekerjaan atau pembatalan 
                    proyek. Jika pembayaran tertunda lebih dari 30 hari setelah jatuh tempo, kami berhak 
                    membatalkan proyek dan mempertahankan pembayaran yang telah diterima.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">6.4 Kebijakan Pengembalian Dana</h3>
                  <p className="leading-relaxed">
                    Pembayaran yang telah dilakukan umumnya tidak dapat dikembalikan. Namun, pengembalian 
                    dana dapat dipertimbangkan jika kami tidak dapat memulai atau menyelesaikan proyek 
                    karena alasan di pihak kami.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Garansi dan Dukungan</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">7.1 Garansi Bug</h3>
                  <p className="leading-relaxed">
                    Kami menyediakan garansi 30 hari untuk bug atau error yang muncul dalam fungsi 
                    yang dikembangkan sesuai spesifikasi yang disepakati. Garansi tidak mencakup 
                    masalah yang disebabkan oleh modifikasi pihak ketiga atau penggunaan yang tidak 
                    sesuai.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">7.2 Dukungan Berkelanjutan</h3>
                  <p className="leading-relaxed">
                    Dukungan teknis berkelanjutan, pemeliharaan, dan pengembangan fitur baru tersedia 
                    sebagai layanan terpisah dengan biaya tambahan.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Batasan Tanggung Jawab</h2>
              <p className="leading-relaxed mb-4">
                Sejauh diizinkan oleh hukum yang berlaku:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Digdaya Digital tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, atau konsekuensial</li>
                <li>Total kewajiban kami kepada Anda untuk klaim apa pun yang timbul dari atau terkait dengan layanan kami dibatasi hingga jumlah yang Anda bayarkan kepada kami untuk layanan tersebut</li>
                <li>Kami tidak menjamin bahwa layanan kami akan bebas dari error atau tidak terputus</li>
                <li>Kami tidak bertanggung jawab atas konten yang Anda atau pihak ketiga posting atau kirimkan melalui layanan kami</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Ganti Rugi</h2>
              <p className="leading-relaxed">
                Anda setuju untuk membela, mengganti rugi, dan membebaskan Digdaya Digital, direktur, 
                karyawan, dan agennya dari dan terhadap klaim, kerusakan, kewajiban, kerugian, dan 
                pengeluaran apa pun (termasuk biaya hukum yang wajar) yang timbul dari: (a) penggunaan 
                layanan kami oleh Anda; (b) pelanggaran Anda terhadap Syarat dan Ketentuan ini; (c) 
                pelanggaran Anda terhadap hak pihak ketiga mana pun; atau (d) konten yang Anda berikan 
                kepada kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Kerahasiaan</h2>
              <p className="leading-relaxed">
                Kami menghormati kerahasiaan informasi yang Anda bagikan dengan kami. Informasi rahasia 
                akan dijaga kerahasiaannya dan hanya digunakan untuk tujuan penyediaan layanan kepada 
                Anda. Jika diperlukan, kami dapat menandatangani Non-Disclosure Agreement (NDA) terpisah.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Pengakhiran</h2>
              <p className="leading-relaxed mb-4">
                Kami dapat mengakhiri atau menangguhkan akses Anda ke layanan kami segera, tanpa 
                pemberitahuan sebelumnya atau kewajiban, karena alasan apa pun, termasuk tanpa batasan 
                jika Anda melanggar Syarat dan Ketentuan ini.
              </p>
              <p className="leading-relaxed">
                Setelah pengakhiran, hak Anda untuk menggunakan layanan akan segera berhenti. Semua 
                ketentuan Syarat dan Ketentuan ini yang secara alami harus tetap berlaku setelah 
                pengakhiran akan tetap berlaku.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Perubahan Layanan dan Syarat</h2>
              <p className="leading-relaxed mb-4">
                Kami berhak untuk memodifikasi atau menghentikan layanan kami (atau bagian mana pun 
                darinya) dengan atau tanpa pemberitahuan sebelumnya.
              </p>
              <p className="leading-relaxed">
                Kami dapat merevisi Syarat dan Ketentuan ini dari waktu ke waktu. Perubahan akan 
                efektif segera setelah diposting di website kami. Penggunaan layanan kami yang 
                berkelanjutan setelah perubahan tersebut merupakan persetujuan Anda terhadap 
                syarat yang direvisi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Hukum yang Berlaku</h2>
              <p className="leading-relaxed">
                Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik 
                Indonesia. Setiap sengketa yang timbul dari atau terkait dengan Syarat dan Ketentuan 
                ini akan diselesaikan melalui pengadilan yang berwenang di Indonesia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">14. Ketentuan Umum</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Jika ada ketentuan dari Syarat dan Ketentuan ini yang dianggap tidak dapat diberlakukan atau tidak sah, ketentuan tersebut akan diubah dan ditafsirkan untuk mencapai tujuan ketentuan tersebut sejauh mungkin, dan ketentuan lainnya akan tetap berlaku penuh</li>
                <li>Kegagalan kami untuk menegakkan hak atau ketentuan apa pun dari Syarat dan Ketentuan ini tidak akan dianggap sebagai pengabaian hak tersebut</li>
                <li>Syarat dan Ketentuan ini merupakan keseluruhan perjanjian antara kami dan Anda mengenai layanan kami</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">15. Hubungi Kami</h2>
              <p className="leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
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
                Dengan menggunakan layanan kami, Anda mengakui bahwa Anda telah membaca, memahami, 
                dan setuju untuk terikat oleh Syarat dan Ketentuan ini.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}