import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MapPin, Clock, Phone } from "lucide-react"

export default function OutletPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Outlet RasaNusa</h1>
          <p className="text-xl text-gray-300">Kunjungi outlet terdekat Anda</p>
        </div>
      </section>

      {/* Outlets */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Lokasi Outlet Kami</h2>
          <div className="w-20 h-1 bg-[#D32F2F] mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "RasaNusa Kebayoran",
                address: "Jl. Wijaya Kusuma No. 17, Kebayoran Baru, Jakarta Selatan",
                phone: "(021) 8051-7782",
                hours: "Senin - Minggu, 10:00 - 22:00",
              },
              {
                name: "RasaNusa Taman Puri",
                address: "Mall Taman Puri, Lantai 2, Jakarta Barat",
                phone: "(021) 8051-7783",
                hours: "Senin - Minggu, 10:00 - 22:00",
              },
              {
                name: "RasaNusa Pondok Indah",
                address: "Pondok Indah, Jl. Metro Pondok Indah, Jakarta Selatan",
                phone: "(021) 8051-7784",
                hours: "Senin - Minggu, 11:00 - 23:00",
              },
            ].map((outlet, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-white to-[#F8F8F8] rounded-xl p-8 shadow-lg border-l-4 border-[#D32F2F] hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-foreground mb-6">{outlet.name}</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#D32F2F] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">Alamat</p>
                      <p className="text-foreground">{outlet.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="text-[#D32F2F] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">Telepon</p>
                      <a
                        href={`tel:${outlet.phone}`}
                        className="text-foreground hover:text-[#D32F2F] transition-colors"
                      >
                        {outlet.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="text-[#D32F2F] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">Jam Operasional</p>
                      <p className="text-foreground">{outlet.hours}</p>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-6 bg-[#D32F2F] text-white font-semibold py-2 rounded-lg hover:bg-[#B71C1C] transition-colors">
                  Lihat di Map
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-[#FFF5F5] to-[#FFF9F9] rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Pesan Lewat Online</h3>
            <p className="text-muted-foreground mb-6">
              Tidak bisa datang ke outlet? Anda bisa memesan melalui WhatsApp atau menggunakan layanan delivery kami.
            </p>
            <a
              href="https://wa.me/6281288994412"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D32F2F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B71C1C] transition-colors inline-block"
            >
              Chat WhatsApp Sekarang
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
