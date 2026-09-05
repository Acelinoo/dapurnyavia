import React from 'react';
import { Clock, ChefHat, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onScrollToMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToMenu }) => {
  return (
    <section className="relative pt-24 sm:pt-28 pb-12 overflow-hidden culinary-pattern">
      {/* Container Utama */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Baris Visual Hero: Sisi Kiri (Pesan Cepat), Tengah (Booth Dapurnya. viaaa), Sisi Kanan (Menu Spesial) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 pt-6 sm:pt-10 pb-4">
          
          {/* Sisi Kiri: Pesan Cepat / Tanpa Antre */}
          <div className="hidden lg:flex lg:col-span-3 items-center gap-4 justify-end pr-4">
            <div className="flex items-center gap-3">
              <div className="w-13 h-13 rounded-full bg-[#EAD5C7] border border-[#DEC1AF] flex items-center justify-center text-[#591115] shadow-warm-sm flex-shrink-0">
                <Clock className="w-6 h-6 stroke-[2]" />
              </div>
              <div className="text-left">
                <h3 className="font-display font-bold text-lg text-[#231F20] leading-tight">
                  Pesan Cepat
                </h3>
                <p className="text-xs text-[#786F66] font-medium">
                  Tanpa Antre
                </p>
              </div>
            </div>
          </div>

          {/* Bagian Tengah: Visual Gerobak Dapurnya. viaaa & Hidangan Krispi Rempah */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center text-center relative">
            <div className="relative max-w-sm sm:max-w-md w-full px-4">
              
              {/* Gambar Booth & Sajian Utama (Gambar 1 Hero Reference) */}
              <div className="relative group cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src="/images/hero-reference.png"
                  alt="Dapurnya viaaa — Sajian Kuliner Rumahan Rasa Bintang Lima"
                  className="w-full h-auto object-contain mx-auto drop-shadow-md rounded-xl"
                />
              </div>

              {/* Fitur Fungsional untuk Mobile & Tablet */}
              <div className="flex lg:hidden items-center justify-center gap-6 mt-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#EAD5C7] border border-[#DEC1AF] flex items-center justify-center text-[#591115]">
                    <Clock className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div className="text-left">
                    <span className="font-bold text-sm block leading-none">Pesan Cepat</span>
                    <span className="text-[11px] text-[#786F66]">Tanpa Antre</span>
                  </div>
                </div>

                <div className="w-px h-8 bg-[#DEC1AF]" />

                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#EAD5C7] border border-[#DEC1AF] flex items-center justify-center text-[#591115]">
                    <ChefHat className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div className="text-left">
                    <span className="font-bold text-sm block leading-none">Menu Spesial</span>
                    <span className="text-[11px] text-[#786F66]">Cita Rasa Otentik</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Sisi Kanan: Menu Spesial / Cita Rasa Otentik */}
          <div className="hidden lg:flex lg:col-span-3 items-center gap-4 justify-start pl-4">
            <div className="flex items-center gap-3">
              <div className="w-13 h-13 rounded-full bg-[#EAD5C7] border border-[#DEC1AF] flex items-center justify-center text-[#591115] shadow-warm-sm flex-shrink-0">
                <ChefHat className="w-6 h-6 stroke-[2]" />
              </div>
              <div className="text-left">
                <h3 className="font-display font-bold text-lg text-[#231F20] leading-tight">
                  Menu Spesial
                </h3>
                <p className="text-xs text-[#786F66] font-medium">
                  Cita Rasa Otentik
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Lengkungan Bukit Hangat (Arched Mound) Sesuai Gambar 1 */}
      <div className="relative mt-2 sm:mt-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="hero-hill pt-10 sm:pt-14 pb-12 sm:pb-16 px-6 sm:px-12 text-center shadow-warm-md border-t border-[#DEC1AF]">
            
            {/* Judul Utama */}
            <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#4A1013] tracking-tight max-w-2xl mx-auto leading-tight sm:leading-snug">
              Hidangan Rumahan, Rasa Bintang Lima.
            </h1>

            {/* Subjudul */}
            <p className="text-[#591115]/90 text-sm sm:text-base md:text-lg font-medium mt-2 sm:mt-3 max-w-xl mx-auto">
              Hadirkan Keajaiban Dapur ke Meja Makan Anda.
            </p>

            {/* Tombol Aksi Pesan Sekarang */}
            <div className="mt-6 sm:mt-8">
              <button
                onClick={onScrollToMenu}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#7A191E] text-white font-medium text-sm sm:text-base hover:bg-[#591115] active:scale-98 transition-all shadow-warm-md border border-[#591115] group"
              >
                <span>Pesan Sekarang</span>
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Ringkasan Informasi Lokasi Ringkas di Dalam Bukit */}
            <p className="text-xs text-[#591115]/75 mt-6 font-medium">
              Jl. Raya Gading Tutuka &bull; Depan Taman Kota Soreang &bull; Setiap Selasa Libur
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};
