import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Clock, MapPin } from 'lucide-react';

interface NavbarProps {
  totalCartItems: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ totalCartItems, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Bilah Informasi Operasional Formal (Tanpa Titik Neon) */}
      <div className="bg-[#591115] text-[#F3ECE1] text-xs py-2 px-4 border-b border-[#7A191E]/40">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <Clock className="w-3.5 h-3.5 text-[#EAD5C7]" />
            <span>
              Buka Rabu – Senin: 10.00 – 21.00 WIB &bull; <strong className="text-white font-semibold underline decoration-[#DEC1AF] underline-offset-2">Hari Selasa Libur</strong>
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#EAD5C7]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Depan Taman Kota Soreang, Bandung</span>
          </div>
        </div>
      </div>

      {/* Navigasi Utama */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF6F0]/95 backdrop-blur-md shadow-warm-md py-3 border-b border-[#DEC1AF]/40'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Identitas */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="Logo Dapurnya. viaaa"
              className="w-10 h-10 object-contain rounded-md shadow-sm border border-[#DEC1AF]/50 group-hover:scale-105 transition-transform"
            />
            <div className="text-left">
              <span className="font-display font-bold text-xl tracking-tight text-[#7A191E] block leading-none">
                Dapurnya. <span className="text-[#231F20]">viaaa</span>
              </span>
              <span className="text-[10px] tracking-widest text-[#786F66] uppercase font-medium mt-0.5 block">
                Soreang &bull; Est. 2024
              </span>
            </div>
          </a>

          {/* Navigasi Desktop (Tanpa Pill Badge, Menggunakan Garis Bawah Elegan) */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#231F20]">
            <a
              href="#"
              className="py-1 text-[#7A191E] border-b-2 border-[#7A191E] font-semibold transition-colors"
            >
              Beranda
            </a>
            <a
              href="#menu-bestseller"
              className="py-1 border-b-2 border-transparent hover:border-[#7A191E] hover:text-[#7A191E] transition-colors"
            >
              Menu Best Seller
            </a>
            <a
              href="#katalog-menu"
              className="py-1 border-b-2 border-transparent hover:border-[#7A191E] hover:text-[#7A191E] transition-colors"
            >
              Katalog Menu
            </a>
            <a
              href="#ulasan-google"
              className="py-1 border-b-2 border-transparent hover:border-[#7A191E] hover:text-[#7A191E] transition-colors"
            >
              Ulasan Google (4.9 ⭐)
            </a>
            <a
              href="#lokasi-operasional"
              className="py-1 border-b-2 border-transparent hover:border-[#7A191E] hover:text-[#7A191E] transition-colors"
            >
              Lokasi & Jadwal
            </a>
          </div>

          {/* Aksi Kanan: Tombol Keranjang Belanja */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCart}
              className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#EAD5C7] text-[#7A191E] hover:bg-[#DEC1AF] active:scale-95 transition-all shadow-warm-sm border border-[#DEC1AF]"
              aria-label="Buka Keranjang Pesanan"
              title="Lihat Keranjang Pesanan"
            >
              <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
              {totalCartItems > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1 rounded-full bg-[#7A191E] text-white text-[11px] font-bold shadow-sm">
                  {totalCartItems}
                </span>
              )}
            </button>

            {/* Tombol Hamburger Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#231F20] hover:text-[#7A191E]"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Tampilan Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF6F0] border-b border-[#DEC1AF] px-6 py-5 shadow-lg">
            <div className="flex flex-col space-y-4 text-base font-medium text-[#231F20]">
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#DEC1AF]/40 text-[#7A191E] font-semibold"
              >
                Beranda
              </a>
              <a
                href="#menu-bestseller"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#DEC1AF]/40 hover:text-[#7A191E]"
              >
                Menu Best Seller
              </a>
              <a
                href="#katalog-menu"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#DEC1AF]/40 hover:text-[#7A191E]"
              >
                Katalog Menu Lengkap
              </a>
              <a
                href="#ulasan-google"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#DEC1AF]/40 hover:text-[#7A191E]"
              >
                Ulasan Google Maps
              </a>
              <a
                href="#lokasi-operasional"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#7A191E]"
              >
                Lokasi & Jadwal Operasional
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
