"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, MessageCircle, MapPin, Phone } from "lucide-react"
import {FaTiktok, FaFacebook, FaYoutube, FaInstagramSquare} from "react-icons/fa"
import { useState } from "react"

export default function KontakPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Terima kasih telah menghubungi kami! Kami akan merespon sesegera mungkin.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-xl text-gray-300">Kami siap membantu Anda 24/7</p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Informasi Kontak</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D32F2F] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Telepon</h3>
                    <a
                      href="tel:+62210851-7782"
                      className="text-muted-foreground hover:text-[#D32F2F] text-lg transition-colors"
                    >
                      (021) 8051-7782
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D32F2F] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/6281288994412"
                      className="text-muted-foreground hover:text-[#D32F2F] text-lg transition-colors"
                    >
                      +62 812-8899-4412
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D32F2F] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:info@rasanusa.co.id"
                      className="text-muted-foreground hover:text-[#D32F2F] text-lg transition-colors"
                    >
                      info@rasanusa.co.id
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D32F2F] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Kantor Pusat</h3>
                    <p className="text-muted-foreground">
                      Jl. Wijaya Kusuma No. 17
                      <br />
                      Kebayoran Baru, Jakarta Selatan 12170
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="font-bold text-lg text-foreground mb-4">Ikuti Media Sosial Kami</h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center gap-3 text-muted-foreground hover:text-[#D32F2F] transition-colors"
                  >
                    <span className="flex items-center gap-2"><FaInstagramSquare size={24} className="text-[#D32F2F]" /> @rasanusa.id</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-muted-foreground hover:text-[#D32F2F] transition-colors"
                  >
                    <span className="flex items-center gap-2"><FaFacebook size={24} className="text-[#D32F2F]" /> Facebook: RasaNusa Indonesia</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-muted-foreground hover:text-[#D32F2F] transition-colors"
                  >
                    <span className="flex items-center gap-2"><FaTiktok size={24} className="text-[#D32F2F]" /> TikTok: @rasanusa.official</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-muted-foreground hover:text-[#D32F2F] transition-colors"
                  >
                    <span className="flex items-center gap-2"><FaYoutube size={24} className="text-[#D32F2F]" /> YouTube: RasaNusa Official</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-[#FFF5F5] to-[#FFF9F9] rounded-xl p-10">
              <h3 className="text-2xl font-bold text-foreground mb-6">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Nama</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-[#D32F2F] bg-white"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-[#D32F2F] bg-white"
                    placeholder="Email Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Pesan</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-[#D32F2F] bg-white h-32 resize-none"
                    placeholder="Pesan Anda"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#D32F2F] text-white font-semibold py-3 rounded-lg hover:bg-[#B71C1C] transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
