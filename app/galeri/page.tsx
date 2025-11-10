import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function GaleriPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Galeri RasaNusa</h1>
          <p className="text-xl text-gray-300">Lihat berbagai hidangan dan suasana outlet kami</p>
        </div>
      </section>

      {/* Galeri */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Foto Produk & Suasana</h2>
          <div className="w-20 h-1 bg-[#D32F2F] mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "ayam bumbu rempah hidangan lezat",
              "rendang daging sapi tradisional",
              "ikan bakar bumbu kuning",
              "nasi liwet dengan lauk pauk",
              "interior outlet rasanusa",
              "suasana makan di restoran",
              "bumbu siap masak koleksi",
              "proses memasak di dapur",
              "pelanggan puas menikmati hidangan",
            ].map((item, i) => (
              <div key={i} className="relative h-64 bg-muted rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src={`/.jpg?height=300&width=400&query=${item}`}
                  alt={item}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold">Lihat Detail</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground text-lg">Lebih banyak foto tersedia di akun media sosial kami</p>
            <div className="flex gap-4 justify-center mt-8">
              <a href="#" className="text-[#D32F2F] font-semibold hover:underline">
                Instagram @rasanusa.id
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="#" className="text-[#D32F2F] font-semibold hover:underline">
                Facebook RasaNusa Indonesia
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
