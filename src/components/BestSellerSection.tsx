import React from 'react';
import type { MenuItem } from '../data/menuData';
import { Plus } from 'lucide-react';

interface BestSellerSectionProps {
  items: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
}

export const BestSellerSection: React.FC<BestSellerSectionProps> = ({ items, onSelectItem }) => {
  const bestSellerItems = items.filter((item) => item.isBestSeller).slice(0, 4);

  return (
    <section id="menu-bestseller" className="py-16 sm:py-20 bg-[#FAF6F0] border-b border-[#DEC1AF]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header Bagian: Formal, Bersih, Tanpa Pill Badge */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-[#7A191E] uppercase block mb-2 font-mono">
            [PILIHAN TERFAVORIT]
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#231F20] tracking-tight">
            Menu Best Seller
          </h2>
          <div className="w-16 h-0.5 bg-[#7A191E] mx-auto my-3" />
          <p className="text-sm sm:text-base text-[#786F66]">
            Empat sajian kuliner andalan paling digemari pelanggan Dapurnya. viaaa di Soreang dengan bumbu khas dan keju lumer berkualitas.
          </p>
        </div>

        {/* Grid 4 Menu Best Seller */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {bestSellerItems.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-xl overflow-hidden border border-[#DEC1AF]/60 shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 flex flex-col group"
            >
              {/* Gambar Hidangan Poster Asli */}
              <div className="relative aspect-square overflow-hidden bg-[#F3ECE1]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Penanda Teks Bersih (Bukan Pill Badge) */}
                <div className="absolute top-3 left-3 bg-[#7A191E] text-white text-[10px] font-mono font-bold px-2 py-1 tracking-wider shadow-sm">
                  BEST SELLER
                </div>
              </div>

              {/* Konten Informasi Menu */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-[#231F20] group-hover:text-[#7A191E] transition-colors line-clamp-1">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-[#786F66] mt-2 line-clamp-2 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                {/* Harga dan Tombol Pemesanan */}
                <div className="mt-5 pt-4 border-t border-[#DEC1AF]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#786F66] block">Mulai dari</span>
                    <span className="font-display font-bold text-lg text-[#7A191E]">
                      Rp {dish.price.toLocaleString('id-ID')}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectItem(dish)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#FAF6F0] text-[#7A191E] border border-[#DEC1AF] hover:bg-[#7A191E] hover:text-white hover:border-[#7A191E] active:scale-95 transition-all text-xs font-semibold"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Pesan</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
