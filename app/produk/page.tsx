import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ProdukPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-linear-to-r from-[#1A1A1A] to-[#2A2A2A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Produk RasaNusa</h1>
          <p className="text-xl text-gray-300">Kualitas premium untuk meja makan Anda</p>
        </div>
      </section>

      {/* Produk */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Bumbu Siap Masak Premium</h2>
          <div className="w-20 h-1 bg-[#D32F2F] mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Bumbu Rendang Premium",
                desc: "Hadirkan rendang autentik ke meja Anda dengan mudah",
                image: "/images/4-min.jpg",
              },
              {
                name: "Sambal Terasi RasaNusa",
                desc: "Sambal tradisional dengan cita rasa yang sempurna",
                image: "/images/5-min.jpg",
              },
              { name: "Bumbu Opor Instan", desc: "Opor ayam nikmat dalam hitungan menit", image: "/images/6-min.jpg" },
              {
                name: "Bumbu Rica-Rica",
                desc: "Bumbu lengkap untuk membuat rica-rica yang lezat",
                image: "/images/7-min.jpg",
              },
              {
                name: "Bumbu Kare Nusantara",
                desc: "Kare nikmat dengan cita rasa otentik Indonesia",
                image: "/images/8-min.jpg",
              },
              {
                name: "Bumbu Soto Ayam",
                desc: "Soto ayam gurih dan hangat dalam satu paket",
                image: "/images/1-min.jpg",
              },
            ].map((product, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-white to-[#F8F8F8] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-64 bg-muted overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{product.desc}</p>
                  <button className="w-full bg-[#D32F2F] text-white font-semibold py-3 rounded-lg hover:bg-[#B71C1C] transition-colors">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-20 bg-gradient-to-r from-[#FFF5F5] to-[#FFF9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">Mengapa Memilih Produk Kami?</h3>
            <ul className="grid md:grid-cols-2 gap-8">
              {[
                "Bahan baku pilihan berkualitas tinggi",
                "Tanpa pengawet berbahaya",
                "Proses produksi higienis dan standar",
                "Harga terjangkau untuk kualitas premium",
                "Mudah digunakan dan praktis",
                "Rasa autentik yang konsisten",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#D32F2F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-foreground text-lg">{item}</span>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
