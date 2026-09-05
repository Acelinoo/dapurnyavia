import React, { useState } from 'react';
import { CATEGORIES, type MenuItem } from '../data/menuData';
import { Plus } from 'lucide-react';

interface MenuSectionProps {
  items: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ items, onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState('semua');

  const filteredItems = items.filter((item) => {
    if (activeCategory === 'semua') return true;
    if (activeCategory === 'bestseller') return item.isBestSeller;
    return item.category === activeCategory;
  });

  return (
    <section id="katalog-menu" className="py-16 sm:py-20 bg-[#FCFAF6] border-b border-[#DEC1AF]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header Bagian */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest text-[#7A191E] uppercase block mb-2 font-mono">
            [DAFTAR HIDANGAN LENGKAP]
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#231F20] tracking-tight">
            Katalog Menu Dapurnya. viaaa
          </h2>
          <div className="w-16 h-0.5 bg-[#7A191E] mx-auto my-3" />
          <p className="text-sm sm:text-base text-[#786F66]">
            Seluruh hidangan disiapkan menggunakan bahan segar dan digoreng secara dadakan agar tiba hangat dan renyah.
          </p>
        </div>

        {/* Filter Kategori Minimalis (Tanpa Pill Badge — Garis Bawah Elegan) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-6 border-b border-[#DEC1AF]/60 mb-10 pb-1">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-3 py-2 text-sm transition-all border-b-2 -mb-1 ${
                  isActive
                    ? 'border-[#7A191E] text-[#7A191E] font-bold'
                    : 'border-transparent text-[#786F66] hover:text-[#231F20] font-medium'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grid Katalog Menu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-xl overflow-hidden border border-[#DEC1AF]/50 shadow-warm-sm hover:shadow-warm-md transition-all duration-300 flex flex-col group"
            >
              {/* Foto Menu */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F3ECE1]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {dish.tag && (
                  <span className="absolute top-3 left-3 bg-[#591115] text-[#FAF6F0] text-[10px] font-mono font-bold px-2 py-0.5 tracking-wider">
                    {dish.tag}
                  </span>
                )}
              </div>

              {/* Konten Menu */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#231F20] leading-snug group-hover:text-[#7A191E] transition-colors">
                      {dish.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[#786F66] mt-2 leading-relaxed line-clamp-3">
                    {dish.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#DEC1AF]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#786F66] block">Harga</span>
                    <span className="font-display font-bold text-base sm:text-lg text-[#7A191E]">
                      Rp {dish.price.toLocaleString('id-ID')}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectItem(dish)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#FAF6F0] text-[#7A191E] border border-[#DEC1AF] hover:bg-[#7A191E] hover:text-white hover:border-[#7A191E] active:scale-95 transition-all text-xs font-semibold"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Tambah</span>
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
