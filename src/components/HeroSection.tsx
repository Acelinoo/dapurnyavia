import React from 'react';
import { Clock, ChefHat, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onScrollToMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToMenu }) => {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden culinary-pattern border-b border-[#DEC1AF]/40">
      {/* Container Utama */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Baris Visual Hero: Sisi Kiri (Pesan Cepat), Tengah (Logo Gambar 2), Sisi Kanan (Menu Spesial) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8">
          
          {/* Sisi Kiri: Pesan Cepat / Tanpa Antre */}
          <div className="hidden lg:flex lg:col-span-4 items-center gap-4 justify-end pr-6">
            <div className="flex items-center gap-3.5 bg-white/80 backdrop-blur-xs p-3.5 rounded-xl border border-[#DEC1AF]/60 shadow-warm-sm">
              <div className="w-12 h-12 rounded-full bg-[#EAD5C7] border border-[#DEC1AF] flex items-center justify-center text-[#591115] shadow-xs flex-shrink-0">
                <Clock className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="text-left">
                <h3 className="font-display font-bold text-base text-[#231F20] leading-tight">
                  Pesan Cepat
                </h3>
                <p className="text-xs text-[#786F66] font-medium mt-0.5">
                  Tanpa Antre
                </p>
              </div>
            </div>
          </div>

          {/* Bagian Tengah: Visual Logo Utama Gambar 2 */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
            <div className="relative max-w-[240px] sm:max-w-[280px] w-full px-2">
              <div 
                onClick={onScrollToMenu}
                className="cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 group"
                title="Klik untuk melihat menu Dapurnya. viaaa"
              >
                <img
                  src="/images/logo.png"
                  alt="Logo Resmi Dapurnya. viaaa"
                  className="w-full h-auto object-contain mx-auto drop-shadow-lg rounded-2xl border-2 border-[#DEC1AF]/80 bg-white p-3 sm:p-4"
                />
              </div>

              {/* Tombol Aksi Bersih ke Menu */}
              <div className="mt-6">
                <button
                  onClick={onScrollToMenu}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#7A191E] text-white text-xs sm:text-sm font-semibold hover:bg-[#591115] shadow-warm-sm transition-all active:scale-95"
                >
                  <span>Pesan Sekarang</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Fitur Fungsional untuk Mobile & Tablet */}
              <div className="flex lg:hidden items-center justify-center gap-4 mt-6">
                <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-lg border border-[#DEC1AF]/60 shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-[#EAD5C7] border border-[#DEC1AF] flex items-center justify-center text-[#591115] flex-shrink-0">
                    <Clock className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div className="text-left">
                    <span className="font-bold text-xs block leading-none">Pesan Cepat</span>
                    <span className="text-[10px] text-[#786F66]">Tanpa Antre</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-lg border border-[#DEC1AF]/60 shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-[#EAD5C7] border border-[#DEC1AF] flex items-center justify-center text-[#591115] flex-shrink-0">
                    <ChefHat className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div className="text-left">
                    <span className="font-bold text-xs block leading-none">Menu Spesial</span>
                    <span className="text-[10px] text-[#786F66]">Cita Rasa Otentik</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Sisi Kanan: Menu Spesial / Cita Rasa Otentik */}
          <div className="hidden lg:flex lg:col-span-4 items-center gap-4 justify-start pl-6">
            <div className="flex items-center gap-3.5 bg-white/80 backdrop-blur-xs p-3.5 rounded-xl border border-[#DEC1AF]/60 shadow-warm-sm">
              <div className="w-12 h-12 rounded-full bg-[#EAD5C7] border border-[#DEC1AF] flex items-center justify-center text-[#591115] shadow-xs flex-shrink-0">
                <ChefHat className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="text-left">
                <h3 className="font-display font-bold text-base text-[#231F20] leading-tight">
                  Menu Spesial
                </h3>
                <p className="text-xs text-[#786F66] font-medium mt-0.5">
                  Cita Rasa Otentik
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
