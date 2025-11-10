import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChefHat, Flame, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-linear-to-br from-[#1A1A1A] to-[#2A2A2A] text-white overflow-hidden flex items-center">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D32F2F] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-10 left-0 w-80 h-80 bg-[#FF8C00] rounded-full opacity-10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                  Menghadirkan Rasa <span className="text-[#EF5350]">Asli Nusantara</span> ke Meja Anda
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  RasaNusa adalah brand kuliner modern yang menghadirkan cita rasa autentik Nusantara melalui hidangan
                  restoran, paket catering, dan bumbu siap masak berkualitas premium.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <Link
                  href="/menu"
                  className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
                >
                  Lihat Menu
                </Link>
                <Link
                  href="/outlet"
                  className="border-2 border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
                >
                  Kunjungi Outlet
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden md:block">
              <div className="relative">
                <img src="/images/1-min.jpg" alt="RasaNusa" className="w-full rounded-2xl shadow-2xl" />
                <div className="absolute -bottom-6 -left-6 bg-[#EF5350] text-white p-6 rounded-xl shadow-lg">
                  <p className="font-bold text-xl">Est. 2024</p>
                  <p className="text-sm">Rasa Asli Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Mengapa Memilih RasaNusa?</h2>
            <div className="w-20 h-1 bg-[#D32F2F] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ChefHat,
                title: "Resep Tradisional",
                desc: "Menggunakan resep autentik Nusantara yang diwariskan turun-temurun",
              },
              {
                icon: Award,
                title: "Kualitas Premium",
                desc: "Bahan baku terpilih dengan standar kebersihan dan kesehatan tertinggi",
              },
              {
                icon: Flame,
                title: "Rasa Otentik",
                desc: "Cita rasa asli Indonesia tanpa mengorbankan kualitas modern",
              },
              {
                icon: TrendingUp,
                title: "Inovasi Berkelanjutan",
                desc: "Terus berkembang dengan produk bumbu siap masak praktis",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-linear-to-br from-[#F8F8F8] to-[#F3F3F3] rounded-xl hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-[#D32F2F] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-white" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produk Unggulan */}
      <section className="py-20 bg-linear-to-r from-[#FFF5F5] to-[#FFF9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Produk Unggulan Kami</h2>
            <div className="w-20 h-1 bg-[#D32F2F] mx-auto"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Nikmati berbagai menu pilihan yang telah memanjakan lidah jutaan pelanggan RasaNusa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { name: "Ayam Bumbu Rempah", image: "/images/2-min.jpg" },
              { name: "Rendang Nusantara", image: "/images/3-min.jpg" },
              { name: "Ikan Bakar Bumbu Kuning", image: "/images/4-min.jpg" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-foreground mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">Cita rasa autentik yang memanjakan lidah Anda</p>
                  <button className="w-full bg-[#D32F2F] text-white font-semibold py-2 rounded-lg hover:bg-[#B71C1C] transition-colors">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/menu"
              className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-12 py-4 rounded-lg font-semibold transition-colors inline-block"
            >
              Lihat Menu Lengkap
            </Link>
          </div>
        </div>
      </section>

      {/* Bumbu Siap Masak Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Bumbu Siap Masak RasaNusa</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Hadirkan cita rasa restoran ke rumah Anda dengan koleksi bumbu siap masak RasaNusa yang praktis dan
                lezat.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Bumbu Rendang Premium",
                  "Sambal Terasi RasaNusa",
                  "Bumbu Opor Instan",
                  "Bumbu Rica-Rica",
                  "Bumbu Kare Nusantara",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#D32F2F] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/produk"
                className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Beli Sekarang
              </Link>
            </div>
            <div className="hidden md:block">
              <img src="/images/5-min.jpg" alt="Bumbu Siap Masak" className="w-full rounded-xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-[#D32F2F] to-[#B71C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ingin Mencoba Hidangan RasaNusa?</h2>
          <p className="text-lg mb-8 opacity-90">Kunjungi outlet kami atau pesan melalui WhatsApp sekarang juga!</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/6281288994412"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#D32F2F] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Chat WhatsApp
            </a>
            <Link
              href="/kontak"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#D32F2F] transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
