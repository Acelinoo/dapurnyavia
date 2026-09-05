import React from 'react';
import { Clock, ChefHat, ArrowDown, ShoppingBag, Star, MessageSquarePlus, MapPin, Flame } from 'lucide-react';
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
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-[#FAF6F0] culinary-pattern border-b border-[#DEC1AF]/50">
      
      {/* Ornamen Garis Halus di Paling Atas */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#7A191E] via-[#B91C1C] to-[#7A191E]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Kolom Kiri: Tipografi Editorial & Tombol Aksi */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Lokasi & Status Operasional */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#DEC1AF] shadow-xs text-xs text-[#231F20]">
              <MapPin className="w-3.5 h-3.5 text-[#7A191E] flex-shrink-0" />
              <span className="font-semibold text-[#7A191E]">Soreang, Bandung:</span>
              <span>Depan Taman Kota &bull; <strong>Selasa Libur</strong></span>
            </div>

            {/* Judul Utama Editorial */}
            <h1 className="font-display font-black text-3xl sm:text-5xl md:text-[3.25rem] text-[#231F20] tracking-tight leading-[1.15]">
              Hidangan Rumahan, <br />
              <span className="text-[#7A191E] relative inline-block">
                Rasa Bintang Lima.
                <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-[#7A191E]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subjudul & Narasi Kuliner Sesuai Naskah Asli */}
            <p className="text-sm sm:text-base md:text-lg text-[#786F66] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Sensasi renyah <strong>Udang Keju Crispy</strong> ala gacoan yang molor, <strong>Dimsum Keju Lumer</strong> goreng, <strong>Basreng Chili Oil</strong> daun jeruk yang harum pedas, serta <strong>Cireng Isi</strong> gurih. Selalu digoreng dadakan saat pesanan Anda tiba!
            </p>

            {/* Tombol Aksi Utama */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
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
                title="Buka form Google Maps langsung untuk mengetik ulasan Anda"
              >
                <MessageSquarePlus className="w-4 h-4 text-[#7A191E]" />
                <span>Beri Ulasan di Google</span>
              </a>
            </div>

            {/* Tiga Pilar Layanan Utama */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-[#DEC1AF]/40 max-w-lg mx-auto lg:mx-0 text-left">
              <div 
                onClick={onOpenCart}
                className="p-2.5 sm:p-3 rounded-xl bg-white/90 border border-[#DEC1AF]/70 shadow-xs cursor-pointer hover:border-[#7A191E] transition-all relative"
              >
                <div className="flex items-center justify-between mb-1">
                  <Clock className="w-4 h-4 text-[#7A191E]" />
                  {totalCartItems > 0 && (
                    <span className="text-[10px] font-bold text-white bg-[#7A191E] px-1.5 py-0.5 rounded-full leading-none">
                      {totalCartItems}
                    </span>
                  )}
                </div>
                <span className="font-bold text-xs text-[#231F20] block leading-tight">Pesan Cepat</span>
                <span className="text-[10px] text-[#786F66]">
                  {totalCartItems > 0 ? `${totalCartItems} di keranjang` : 'Tanpa Antre'}
                </span>
              </div>

              <div 
                onClick={onScrollToMenu}
                className="p-2.5 sm:p-3 rounded-xl bg-white/90 border border-[#DEC1AF]/70 shadow-xs cursor-pointer hover:border-[#7A191E] transition-all"
              >
                <ChefHat className="w-4 h-4 text-[#7A191E] mb-1" />
                <span className="font-bold text-xs text-[#231F20] block leading-tight">Menu Spesial</span>
                <span className="text-[10px] text-[#786F66]">Rasa Otentik</span>
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-white/90 border border-[#DEC1AF]/70 shadow-xs">
                <Flame className="w-4 h-4 text-[#7A191E] mb-1" />
                <span className="font-bold text-xs text-[#231F20] block leading-tight">Goreng Dadakan</span>
                <span className="text-[10px] text-[#786F66]">Hangat & Renyah</span>
              </div>
            </div>

          </div>

          {/* Kolom Kanan: Showcase Fotografi Kuliner Menggugah Selera */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              
              {/* Efek Panggung / Halo Hangat di Belakang Foto */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#EAD5C7] to-[#DEC1AF] rounded-3xl filter blur-xl scale-95 -z-10" />

              {/* Foto Utama: Udang Keju Crispy Rekomendasi Dapurnya viaaa */}
              <div className="relative bg-white p-3 sm:p-4 rounded-3xl border-2 border-[#DEC1AF] shadow-warm-lg overflow-visible group">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#F3ECE1] shadow-inner">
                  <img
                    src="/images/hero-udang-keju.jpg"
                    alt="Udang Keju Crispy Mozarella Lumer — Dapurnya viaaa"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Tag Elegan Best Seller di Pojok Kanan Atas Foto */}
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#7A191E]/95 text-white font-mono font-bold text-[11px] tracking-wider uppercase shadow-md backdrop-blur-xs border border-white/20">
                      🔥 MENU BEST SELLER
                    </span>
                  </div>
                </div>

                {/* Kartu Mengambang 1: Basreng Chili Oil Daun Jeruk (Kiri Bawah) */}
                <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white p-2.5 sm:p-3 rounded-2xl border border-[#DEC1AF] shadow-warm-md flex items-center gap-3 max-w-[210px] z-20">
                  <img
                    src="/images/dishes/basreng-chilioil.jpg"
                    alt="Basreng Chili Oil"
                    className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="text-left">
                    <span className="font-bold text-xs text-[#231F20] block leading-tight">
                      Basreng Chili Oil
                    </span>
                    <span className="text-[10px] text-[#7A191E] font-medium block mt-0.5">
                      Wangi Daun Jeruk 🌶️
                    </span>
                  </div>
                </div>

                {/* Kartu Mengambang 2: Rating Google Terverifikasi (Kanan Atas) */}
                <a
                  href={BUSINESS_INFO.writeReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -top-3 -right-3 sm:-right-5 bg-white py-2 px-3.5 rounded-2xl border border-amber-300 shadow-warm-md flex items-center gap-2 hover:scale-105 transition-transform z-20"
                  title="Klik untuk langsung menulis ulasan di Google Maps"
                >
                  <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 flex-shrink-0">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-xs text-[#231F20]">Rating 4.9</span>
                      <span className="text-[10px] text-amber-500">★★★★★</span>
                    </div>
                    <span className="text-[10px] text-[#786F66] block">
                      60+ Ulasan Google
                    </span>
                  </div>
                </a>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
