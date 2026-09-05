import React from 'react';

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
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-[#f4f1e8] overflow-hidden select-none border-b border-[#DEC1AF]/40">
      {/* Container Lebar Penuh dengan Background Terintegrasi */}
      <div className="max-w-[1360px] mx-auto relative">
        
        {/* Gambar Desain Hero Section Resmi (Gambar 1 Persis) */}
        <div className="relative w-full aspect-[1024/434] overflow-hidden">
          <img
            src="/images/hero-reference.png"
            alt="Dapurnya. viaaa — Hidangan Rumahan, Rasa Bintang Lima"
            className="w-full h-full object-contain pointer-events-none"
          />

          {/* === INTERACTIVE HOTSPOTS & ACTION BUTTONS === */}

          {/* 1. Navigasi: Home */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute left-[2.4%] top-[3.8%] w-[5.4%] h-[7.5%] cursor-pointer rounded-full opacity-0 hover:opacity-20 hover:bg-[#591115] transition-opacity"
            title="Beranda"
            aria-label="Beranda"
          />

          {/* 2. Navigasi: Menu */}
          <button
            type="button"
            onClick={onScrollToMenu}
            className="absolute left-[8.2%] top-[3.8%] w-[4.6%] h-[7.5%] cursor-pointer rounded-md opacity-0 hover:opacity-20 hover:bg-[#591115] transition-opacity"
            title="Menu Best Seller"
            aria-label="Menu"
          />

          {/* 3. Navigasi: Contact */}
          <button
            type="button"
            onClick={() => handleScrollToSection('lokasi-operasional')}
            className="absolute left-[13.2%] top-[3.8%] w-[5.4%] h-[7.5%] cursor-pointer rounded-md opacity-0 hover:opacity-20 hover:bg-[#591115] transition-opacity"
            title="Lokasi & Kontak"
            aria-label="Contact"
          />

          {/* 4. Navigasi: Cart Button (Top Right) dengan Live Badge Counter */}
          <button
            type="button"
            onClick={onOpenCart}
            className="absolute left-[92.0%] top-[3.0%] w-[4.8%] h-[8.5%] cursor-pointer rounded-full flex items-center justify-center transition-transform active:scale-95 group"
            title="Buka Keranjang Pesanan"
            aria-label="Keranjang Pesanan"
          >
            {/* Live Counter Badge jika ada item di keranjang */}
            {totalCartItems > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-[#7A191E] text-white text-[10px] sm:text-xs font-bold rounded-full shadow-md animate-scaleIn">
                {totalCartItems}
              </span>
            )}
          </button>

          {/* 5. Fitur: Pesan Cepat / Tanpa Antre (Mid Left) */}
          <button
            type="button"
            onClick={onOpenCart}
            className="absolute left-[7.0%] top-[42.0%] w-[14.5%] h-[14.0%] cursor-pointer rounded-xl opacity-0 hover:opacity-15 hover:bg-[#591115] transition-opacity"
            title="Pesan Cepat — Buka Keranjang"
            aria-label="Pesan Cepat"
          />

          {/* 6. Fitur: Menu Spesial / Cita Rasa Otentik (Mid Right) */}
          <button
            type="button"
            onClick={onScrollToMenu}
            className="absolute left-[76.0%] top-[42.0%] w-[14.5%] h-[14.0%] cursor-pointer rounded-xl opacity-0 hover:opacity-15 hover:bg-[#591115] transition-opacity"
            title="Menu Spesial — Lihat Menu"
            aria-label="Menu Spesial"
          />

          {/* 7. Tombol CTA Utama: Pesan Sekarang (Bottom Center) */}
          <button
            type="button"
            onClick={onScrollToMenu}
            className="absolute left-[43.8%] top-[83.5%] w-[12.4%] h-[9.2%] cursor-pointer rounded-full opacity-0 hover:opacity-20 hover:bg-white active:scale-95 transition-all shadow-lg"
            title="Pesan Sekarang"
            aria-label="Pesan Sekarang"
          />

        </div>

      </div>
    </section>
  );
};
