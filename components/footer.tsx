import Link from "next/link"
import { Phone, Mail, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-linear-to-br from-primary-red to-primary-red-dark rounded-lg flex items-center justify-center">
                <Image src="/images/logo.png" alt="RasaNusa" width={48} height={48} className="rounded-lg" />
              </div>
              <h3 className="text-lg font-bold">RasaNusa</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Menghadirkan rasa asli Nusantara dengan standar kualitas modern untuk meja keluarga Indonesia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Navigasi</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="hover:text-accent transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-accent transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/produk" className="hover:text-accent transition-colors">
                  Produk
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary-red" />
                <a href="tel:+62210851-7782" className="hover:text-accent transition-colors">
                  (021) 8051-7782
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="text-primary-red" />
                <a href="https://wa.me/6281288994412" className="hover:text-accent transition-colors">
                  +62 812-8899-4412
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary-red" />
                <a href="mailto:info@rasanusa.co.id" className="hover:text-accent transition-colors">
                  info@rasanusa.co.id
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Ikuti Kami</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-primary-red rounded-lg flex items-center justify-center hover:bg-primary-red-dark transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-red rounded-lg flex items-center justify-center hover:bg-primary-red-dark transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-red rounded-lg flex items-center justify-center hover:bg-primary-red-dark transition-colors"
                aria-label="Follow us on YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2025 RasaNusa Indonesia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
