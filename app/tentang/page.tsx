import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MapPin, Calendar, Users, Lightbulb } from "lucide-react"

export default function TentangPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#1A1A1A] to-[#2A2A2A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Tentang RasaNusa</h1>
          <p className="text-xl text-gray-300">Perjalanan kami menghadirkan cita rasa asli Nusantara</p>
        </div>
      </section>

      {/* Tentang Kami */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Siapa Kami?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                RasaNusa adalah brand kuliner modern yang didirikan pada tahun 2024 dengan komitmen untuk menghadirkan
                cita rasa autentik Nusantara melalui berbagai platform bisnis kuliner yang inovatif dan berkualitas
                tinggi.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kami menggabungkan resep tradisional yang telah diwariskan turun-temurun dengan standar produksi modern
                dan higienis untuk menciptakan pengalaman kuliner yang tak terlupakan bagi setiap pelanggan kami.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#F8F8F8] to-[#F3F3F3] rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="text-[#D32F2F] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Est. 2024</h3>
                    <p className="text-muted-foreground">
                      Brand kuliner muda dengan visi besar menghadirkan rasa Indonesia
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#D32F2F] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Berbasis Jakarta</h3>
                    <p className="text-muted-foreground">Kantor pusat di Kebayoran Baru dengan pabrik di Bekasi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-20 bg-gradient-to-r from-[#FFF5F5] to-[#FFF9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Visi & Misi Kami</h2>
            <div className="w-20 h-1 bg-[#D32F2F] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Visi */}
            <div className="bg-white rounded-xl p-10 shadow-lg border-t-4 border-[#D32F2F]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#D32F2F] rounded-lg flex items-center justify-center">
                  <Lightbulb size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Visi</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Menjadi brand kuliner terkemuka yang menghadirkan rasa autentik Nusantara dalam kemasan modern, sehingga
                setiap keluarga Indonesia dapat menikmati hidangan berkualitas premium dengan mudah dan terjangkau.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-xl p-10 shadow-lg border-t-4 border-[#FF8C00]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#FF8C00] rounded-lg flex items-center justify-center">
                  <Users size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Misi</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-[#D32F2F] font-bold flex-shrink-0">•</span>
                  <span>Mengolah makanan dengan bahan berkualitas dan standar higienis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D32F2F] font-bold flex-shrink-0">•</span>
                  <span>Mempertahankan cita rasa tradisional Indonesia</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D32F2F] font-bold flex-shrink-0">•</span>
                  <span>Berinovasi menciptakan bumbu praktis untuk keluarga</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D32F2F] font-bold flex-shrink-0">•</span>
                  <span>Menyediakan layanan pelanggan yang ramah dan cepat</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lokasi */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Lokasi Kami</h2>
          <div className="w-20 h-1 bg-[#D32F2F] mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#F8F8F8] to-[#F3F3F3] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="text-[#D32F2F]" size={28} />
                Kantor Pusat
              </h3>
              <p className="text-muted-foreground mb-4">RasaNusa Indonesia</p>
              <address className="text-foreground text-lg leading-relaxed not-italic font-semibold">
                Jl. Wijaya Kusuma No. 17
                <br />
                Kebayoran Baru
                <br />
                Jakarta Selatan, 12170
              </address>
            </div>

            <div className="bg-gradient-to-br from-[#F8F8F8] to-[#F3F3F3] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="text-[#FF8C00]" size={28} />
                Pabrik / Dapur Produksi
              </h3>
              <p className="text-muted-foreground mb-4">Fasilitas Produksi</p>
              <address className="text-foreground text-lg leading-relaxed not-italic font-semibold">
                Jl. Industri Mandala No. 5<br />
                Bekasi Barat
                <br />
                Jawa Barat, 17137
              </address>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
