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
    <section className="relative pt-24 sm:pt-28 pb-16 overflow-hidden bg-[#FAF6F0] culinary-pattern border-b border-[#DEC1AF]/50">
      
      {/* Ornamen Kanopi Merah Putih Khas Gerobak di Bagian Atas */}
      <div className="absolute top-0 left-0 right-0 h-3 flex overflow-hidden z-10 opacity-90">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-full ${i % 2 === 0 ? 'bg-[#7A191E]' : 'bg-white'}`}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Banner Penunjuk Lokasi & Hari Libur yang Ramah */}
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DEC1AF] shadow-xs text-xs text-[#231F20]">
            <MapPin className="w-3.5 h-3.5 text-[#7A191E]" />
            <span className="font-semibold text-[#7A191E]">Soreang, Bandung:</span>
            <span>Depan Taman Kota &bull; <strong>Selasa Libur</strong></span>
          </div>
        </div>

        {/* Baris Konten Utama: Teks Menarik di Kiri, Gerobak Ikonik & Badge Lucu di Kanan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Kolom Kiri: Slogan & Pilihan Aksi */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Tag Pengantar Manis */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#7A191E]/10 text-[#7A191E] text-xs font-mono font-bold tracking-wider">
              <span>GERAI CAMILAN GURIH & KEJU LUMER</span>
            </div>

            {/* Judul Utama */}
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#231F20] tracking-tight leading-[1.15]">
              Hidangan Rumahan, <br className="hidden sm:inline" />
              <span className="text-[#7A191E] relative inline-block">
                Rasa Bintang Lima.
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#7A191E]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subjudul Hangat & Menggugah Selera */}
            <p className="text-sm sm:text-base md:text-lg text-[#786F66] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Sensasi renyah <strong>Udang Keju Crispy</strong> ala gacoan yang molor, <strong>Dimsum Keju Lumer</strong> goreng, <strong>Basreng Chili Oil</strong> daun jeruk yang harum pedas, serta <strong>Cireng Isi</strong> gurih. Selalu digoreng dadakan saat pesanan Anda tiba!
            </p>

            {/* Tombol Aksi Utama & Tulis Ulasan Langsung */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onScrollToMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#7A191E] text-white font-bold text-sm sm:text-base hover:bg-[#591115] shadow-warm-md hover:shadow-warm-lg active:scale-95 transition-all border border-[#591115]"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Pesan Sekarang (Lihat Menu)</span>
                <ArrowDown className="w-4 h-4 ml-1" />
              </button>

              <a
                href={BUSINESS_INFO.writeReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#7A191E] font-bold text-sm sm:text-base border-2 border-[#7A191E] hover:bg-[#FAF6F0] active:scale-95 transition-all shadow-xs"
                title="Buka form ulasan Google Maps untuk menulis ulasan langsung"
              >
                <MessageSquarePlus className="w-4 h-4 text-[#7A191E]" />
                <span>Beri Ulasan di Google</span>
              </a>
            </div>

            {/* Dua Fitur Utama dari Gambar 1 (Pesan Cepat & Menu Spesial) */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#DEC1AF]/40 max-w-lg mx-auto lg:mx-0">
              <div 
                onClick={onOpenCart}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/80 border border-[#DEC1AF]/60 shadow-xs cursor-pointer hover:border-[#7A191E] transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-[#EAD5C7] border border-[#DEC1AF] flex items-center justify-center text-[#7A191E] group-hover:scale-105 transition-transform flex-shrink-0">
                  <Clock className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="text-left flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-sm text-[#231F20] block leading-tight">Pesan Cepat</span>
                    {totalCartItems > 0 && (
                      <span className="px-1.5 py-0.2 rounded-full bg-[#7A191E] text-white text-[10px] font-bold">
                        {totalCartItems}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-[#786F66]">Tanpa Antre</span>
                </div>
              </div>

              <div 
                onClick={onScrollToMenu}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/80 border border-[#DEC1AF]/60 shadow-xs cursor-pointer hover:border-[#7A191E] transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-[#EAD5C7] border border-[#DEC1AF] flex items-center justify-center text-[#7A191E] group-hover:scale-105 transition-transform flex-shrink-0">
                  <ChefHat className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="text-left">
                  <span className="font-display font-bold text-sm text-[#231F20] block leading-tight">Menu Spesial</span>
                  <span className="text-[11px] text-[#786F66]">Cita Rasa Otentik</span>
                </div>
              </div>
            </div>

          </div>

          {/* Kolom Kanan: Visual Gerobak Ikonik Gambar 1 dengan Floating Badges Lucu */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            
            {/* Lingkaran Panggung Hangat di Belakang Gerobak */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
              
              {/* Efek Glow & Alas Dudukan Hangat */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#EAD5C7]/80 to-[#E3CBBC]/60 rounded-full filter blur-xl scale-95 -z-10" />

              {/* Kartu Gerobak Ikonik Utama (Logo HD Gambar 1 & 2) */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#7A191E]/20 shadow-warm-lg hover:shadow-2xl transition-all duration-300 relative group text-center">
                
                {/* Visual Gerobak Ikonik */}
                <div className="relative w-48 sm:w-60 h-48 sm:h-60 mx-auto transition-transform duration-500 group-hover:scale-105">
                  <img
                    src="/images/logo.png"
                    alt="Gerobak Ikonik Dapurnya. viaaa"
                    className="w-full h-full object-contain drop-shadow-md"
                  />
                </div>

                {/* Tag Bawah Gerobak */}
                <div className="mt-4 pt-3 border-t border-[#DEC1AF]/40 flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-[#7A191E]">DAPURNYA. VIAAA</span>
                  <span className="text-[#786F66]">Soreang, Bandung</span>
                </div>

                {/* Floating Badge 1 (Kanan Atas): Keju Lumer */}
                <div className="absolute -top-3 -right-3 bg-white px-3.5 py-1.5 rounded-full border border-[#DEC1AF] shadow-warm-sm flex items-center gap-1.5 text-xs font-bold text-[#7A191E] animate-bounce">
                  <span>🧀</span>
                  <span>Keju Lumer Molor!</span>
                </div>

                {/* Floating Badge 2 (Kiri Bawah): Chili Oil Daun Jeruk */}
                <div className="absolute -bottom-3 -left-3 bg-[#7A191E] px-3.5 py-1.5 rounded-full text-white text-xs font-bold shadow-warm-sm flex items-center gap-1.5">
                  <span>🌶️</span>
                  <span>Chili Oil Daun Jeruk</span>
                </div>

                {/* Floating Badge 3 (Kanan Tengah): Rating Google */}
                <a
                  href={BUSINESS_INFO.writeReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white px-3 py-1.5 rounded-full border border-amber-300 shadow-md flex items-center gap-1 text-[11px] font-bold text-[#231F20] hover:scale-105 transition-transform"
                  title="Klik untuk memberi ulasan di Google Maps"
                >
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>4.9 di Google</span>
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
