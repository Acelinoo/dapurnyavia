import React from 'react';
import { Clock, ChefHat, ArrowDown, ShoppingBag, Star, MessageSquarePlus, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/reviewsData';

interface HeroSectionProps {
  onScrollToMenu: () => void;
  onOpenCart: () => void;
  totalCartItems: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToMenu,
  onOpenCart,
  totalCartItems,
}) => {
  return (
    <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden bg-[#FAF6F0] culinary-pattern border-b border-[#DEC1AF]/50">
      
      {/* Ornamen Kanopi Garis Merah-Putih Ikonik di Bagian Paling Atas */}
      <div className="absolute top-0 left-0 right-0 h-3 flex overflow-hidden z-10 opacity-90">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-full ${i % 2 === 0 ? 'bg-[#7A191E]' : 'bg-white'}`}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Banner Penunjuk Lokasi & Penegasan Selasa Libur */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DEC1AF] shadow-xs text-xs text-[#231F20]">
            <MapPin className="w-3.5 h-3.5 text-[#7A191E]" />
            <span className="font-semibold text-[#7A191E]">Soreang, Bandung:</span>
            <span>Depan Taman Kota &bull; <strong>Selasa Libur</strong></span>
          </div>
        </div>

        {/* === PUSAT VISUAL: GEROBAK 3D IKONIK DI TENGAH === */}
        <div className="relative max-w-md mx-auto my-2 sm:my-4 flex items-center justify-center">
          
          {/* Efek Panggung / Halo Hangat */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#EAD5C7]/70 via-[#E3CBBC]/40 to-transparent rounded-full filter blur-2xl scale-110 -z-10" />

          {/* Kartu Gerobak 3D */}
          <div className="relative group cursor-pointer transition-transform duration-300 hover:scale-[1.03]">
            <img
              src="/images/gerobak-3d.png"
              alt="Ikon Gerobak 3D Dapurnya. viaaa"
              className="w-56 sm:w-64 md:w-72 h-auto object-contain mx-auto drop-shadow-xl"
            />

            {/* Floating Badge 1: Keju Lumer Molor (Kiri Atas) */}
            <div className="hidden sm:flex absolute -top-2 -left-6 bg-white px-3.5 py-1.5 rounded-full border border-[#DEC1AF] shadow-warm-sm items-center gap-1.5 text-xs font-bold text-[#7A191E] animate-bounce">
              <span>🧀</span>
              <span>Keju Lumer Molor!</span>
            </div>

            {/* Floating Badge 2: Chili Oil Daun Jeruk (Kanan Bawah) */}
            <div className="hidden sm:flex absolute -bottom-2 -right-6 bg-[#7A191E] px-3.5 py-1.5 rounded-full text-white text-xs font-bold shadow-warm-sm items-center gap-1.5">
              <span>🌶️</span>
              <span>Chili Oil Daun Jeruk</span>
            </div>

            {/* Floating Badge 3: Rating Google (Kiri Bawah) */}
            <a
              href={BUSINESS_INFO.writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex absolute top-1/2 -left-10 -translate-y-1/2 bg-white px-3 py-1.5 rounded-full border border-amber-300 shadow-md items-center gap-1 text-[11px] font-bold text-[#231F20] hover:scale-105 transition-transform"
              title="Klik untuk langsung menulis ulasan di Google Maps"
            >
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>⭐ 4.9 di Google</span>
            </a>
          </div>

        </div>

        {/* Dua Fitur Pendukung Simetris di Bawah Gerobak (Pesan Cepat & Menu Spesial) */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 my-4">
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-2 rounded-xl bg-white border border-[#DEC1AF] shadow-xs hover:border-[#7A191E] transition-all group active:scale-95"
          >
            <div className="w-8 h-8 rounded-full bg-[#EAD5C7] flex items-center justify-center text-[#7A191E] flex-shrink-0 group-hover:scale-105 transition-transform">
              <Clock className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-xs sm:text-sm text-[#231F20] block leading-none">Pesan Cepat</span>
                {totalCartItems > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full bg-[#7A191E] text-white text-[10px] font-bold">
                    {totalCartItems}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-[#786F66]">Tanpa Antre</span>
            </div>
          </button>

          <button
            onClick={onScrollToMenu}
            className="flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-2 rounded-xl bg-white border border-[#DEC1AF] shadow-xs hover:border-[#7A191E] transition-all group active:scale-95"
          >
            <div className="w-8 h-8 rounded-full bg-[#EAD5C7] flex items-center justify-center text-[#7A191E] flex-shrink-0 group-hover:scale-105 transition-transform">
              <ChefHat className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div className="text-left">
              <span className="font-display font-bold text-xs sm:text-sm text-[#231F20] block leading-none">Menu Spesial</span>
              <span className="text-[10px] text-[#786F66]">Cita Rasa Otentik</span>
            </div>
          </button>
        </div>

        {/* === TEKS UTAMA PERSIS SESUAI PERMINTAAN PENGGUNA === */}
        <div className="max-w-2xl mx-auto space-y-4 pt-2">
          
          {/* Judul Utama */}
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#231F20] tracking-tight leading-[1.18]">
            Hidangan Rumahan, <br />
            <span className="text-[#7A191E] relative inline-block">
              Rasa Bintang Lima.
              <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-[#7A191E]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>

          {/* Subjudul Lengkap */}
          <p className="text-sm sm:text-base md:text-lg text-[#786F66] leading-relaxed max-w-xl mx-auto">
            Sensasi renyah <strong>Udang Keju Crispy</strong> ala gacoan yang molor, <strong>Dimsum Keju Lumer</strong> goreng, <strong>Basreng Chili Oil</strong> daun jeruk yang harum pedas, serta <strong>Cireng Isi</strong> gurih. Selalu digoreng dadakan saat pesanan Anda tiba!
          </p>

          {/* Tombol Aksi Utama & Tulis Ulasan Langsung */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <button
              onClick={onScrollToMenu}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#7A191E] text-white font-bold text-sm sm:text-base hover:bg-[#591115] shadow-warm-md hover:shadow-warm-lg active:scale-95 transition-all border border-[#591115]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Pesan Sekarang (Lihat Menu)</span>
              <ArrowDown className="w-4 h-4 ml-0.5" />
            </button>

            <a
              href={BUSINESS_INFO.writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#7A191E] font-bold text-sm sm:text-base border-2 border-[#7A191E] hover:bg-[#FAF6F0] active:scale-95 transition-all shadow-xs"
              title="Buka form ulasan Google Maps untuk langsung mengetik ulasan Anda"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#7A191E]" />
              <span>Beri Ulasan di Google</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
