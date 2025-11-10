import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function MenuPage() {
  const menuItems = [
    {
      category: "Menu Utama",
      items: [
        { name: "Ayam Bumbu Rempah", desc: "Ayam dengan bumbu rempah pilihan, lembut dan empuk" },
        { name: "Rendang Nusantara", desc: "Rendang daging sapi dengan santan dan rempah autentik" },
        { name: "Ayam Woku", desc: "Ayam dengan bumbu woku tradisional yang menggugah selera" },
        { name: "Ikan Bakar Bumbu Kuning", desc: "Ikan bakar dengan bumbu kuning yang kaya cita rasa" },
        { name: "Nasi Liwet Spesial", desc: "Nasi liwet gurih dengan lauk pelengkap pilihan" },
      ],
    },
    {
      category: "Menu Sambal & Pendamping",
      items: [{ name: "Sambal Matah Signature", desc: "Sambal matah segar dengan bahan pilihan terbaik" }],
    },
  ]

  const spiceProducts = [
    { name: "Bumbu Rendang Premium", desc: "Praktis, lezat, siap membuat rendang nikmat", image: "/images/4-min.jpg" },
    { name: "Sambal Terasi RasaNusa", desc: "Sambal tradisional dengan cita rasa otentik", image: "/images/5-min.jpg" },
    { name: "Bumbu Opor Instan", desc: "Membuat opor ayam praktis tanpa ribet", image: "/images/6-min.jpg" },
    { name: "Bumbu Rica-Rica", desc: "Cita rasa rica-rica asli dalam satu paket", image: "/images/7-min.jpg" },
    { name: "Bumbu Kare Nusantara", desc: "Kare yang nikmat dan mudah disajikan", image: "/images/8-min.jpg" },
  ]

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Menu & Produk RasaNusa</h1>
          <p className="text-xl text-gray-300">Cita rasa autentik Nusantara dalam setiap gigitan</p>
        </div>
      </section>

      {/* Menu Restoran */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Menu Restoran</h2>
          <div className="w-20 h-1 bg-[#D32F2F] mx-auto mb-16"></div>

          <div className="space-y-12">
            {menuItems.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b-2 border-[#D32F2F]">
                  {section.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="p-6 bg-gradient-to-r from-[#FFF5F5] to-[#FFF9F9] rounded-lg hover:shadow-lg transition-shadow"
                    >
                      <h4 className="text-xl font-bold text-foreground mb-2">{item.name}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bumbu Siap Masak */}
      <section className="py-20 bg-linear-to-r from-[#FFF5F5] to-[#FFF9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Bumbu Siap Masak</h2>
          <div className="w-20 h-1 bg-[#D32F2F] mx-auto mb-16"></div>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Hadirkan cita rasa restoran ke rumah Anda dengan produk bumbu siap masak berkualitas premium dari RasaNusa
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spiceProducts.map((product, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={"Bumbu Siap Masak"}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{product.name}</h4>
                <p className="text-muted-foreground mb-4">{product.desc}</p>
                <button className="w-full bg-[#D32F2F] text-white font-semibold py-2 rounded-lg hover:bg-[#B71C1C] transition-colors">
                  Beli Sekarang
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
