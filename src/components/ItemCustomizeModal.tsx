import React, { useState } from 'react';
import type { MenuItem } from '../data/menuData';
import type { CartItem } from '../types/cart';
import { X, Plus, Minus, Check } from 'lucide-react';

interface ItemCustomizeModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (cartItem: CartItem) => void;
}

export const ItemCustomizeModal: React.FC<ItemCustomizeModalProps> = ({
  item,
  onClose,
  onAddToCart,
}) => {
  if (!item) return null;

  const [selectedPortion, setSelectedPortion] = useState(
    item.portionOptions ? item.portionOptions[0] : null
  );
  const [selectedSpicyLevel, setSelectedSpicyLevel] = useState(
    item.spicyLevels ? item.spicyLevels[0] : undefined
  );
  const [notes, setNotes] = useState('');
  const [quantity, setQuantity] = useState(1);

  const unitPrice = selectedPortion ? selectedPortion.price : item.price;
  const totalPrice = unitPrice * quantity;

  const handleConfirm = () => {
    const cartItemId = `${item.id}-${selectedPortion?.label || 'default'}-${selectedSpicyLevel || 'none'}`;
    const cartItem: CartItem = {
      id: cartItemId,
      menuId: item.id,
      name: item.name,
      price: unitPrice,
      quantity,
      portionLabel: selectedPortion?.label,
      spicyLevel: selectedSpicyLevel,
      notes: notes.trim() || undefined,
      image: item.image,
    };
    onAddToCart(cartItem);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#DEC1AF] max-h-[92vh] flex flex-col animate-scaleUp">
        
        {/* Header Gambar & Tombol Tutup */}
        <div className="relative h-48 sm:h-56 bg-[#F3ECE1] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors shadow-md"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
          {item.tag && (
            <span className="absolute bottom-3 left-3 bg-[#7A191E] text-white text-[11px] font-mono font-bold px-2.5 py-1 tracking-wider">
              {item.tag}
            </span>
          )}
        </div>

        {/* Konten Pilihan */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          <div>
            <h3 className="font-display font-bold text-xl text-[#231F20]">
              {item.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#786F66] mt-1.5 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Pilihan Porsi (Jika Ada) */}
          {item.portionOptions && (
            <div>
              <label className="text-xs font-bold text-[#231F20] tracking-wide uppercase block mb-2 font-mono">
                [PILIHAN PORSI]
              </label>
              <div className="space-y-2">
                {item.portionOptions.map((portion) => {
                  const isSelected = selectedPortion?.label === portion.label;
                  return (
                    <button
                      key={portion.label}
                      type="button"
                      onClick={() => setSelectedPortion(portion)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg border text-left text-sm transition-all ${
                        isSelected
                          ? 'border-[#7A191E] bg-[#FAF6F0] text-[#7A191E] font-semibold'
                          : 'border-[#DEC1AF]/60 hover:border-[#DEC1AF] text-[#231F20]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected ? 'border-[#7A191E] bg-[#7A191E]' : 'border-gray-300'
                          }`}
                        >
                          {isSelected && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
                        </div>
                        <span>{portion.label}</span>
                      </div>
                      <span className="font-bold">
                        Rp {portion.price.toLocaleString('id-ID')}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Pilihan Tingkat Kepedasan / Rasa (Jika Ada) */}
          {item.spicyLevels && (
            <div>
              <label className="text-xs font-bold text-[#231F20] tracking-wide uppercase block mb-2 font-mono">
                [TINGKAT KEPEDASAN & RASA]
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.spicyLevels.map((lvl) => {
                  const isSelected = selectedSpicyLevel === lvl;
                  return (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setSelectedSpicyLevel(lvl)}
                      className={`p-2.5 rounded-lg border text-xs text-left transition-all ${
                        isSelected
                          ? 'border-[#7A191E] bg-[#FAF6F0] text-[#7A191E] font-bold'
                          : 'border-[#DEC1AF]/60 hover:border-[#DEC1AF] text-[#231F20]'
                      }`}
                    >
                      {lvl}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Catatan Khusus */}
          <div>
            <label className="text-xs font-bold text-[#231F20] tracking-wide uppercase block mb-2 font-mono">
              [CATATAN TAMBAHAN]
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={item.notesPlaceholder || 'Tulis catatan pesanan Anda di sini...'}
              className="w-full text-xs sm:text-sm p-3 rounded-lg border border-[#DEC1AF]/80 focus:outline-none focus:border-[#7A191E] bg-[#FAF6F0]"
            />
          </div>

          {/* Pengatur Kuantitas */}
          <div className="flex items-center justify-between pt-2 border-t border-[#DEC1AF]/40">
            <span className="text-sm font-semibold text-[#231F20]">Jumlah Porsi</span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg border border-[#DEC1AF] flex items-center justify-center hover:bg-[#FAF6F0] active:scale-95"
              >
                <Minus className="w-4 h-4 text-[#7A191E]" />
              </button>
              <span className="font-bold text-base w-6 text-center font-mono">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg border border-[#DEC1AF] flex items-center justify-center hover:bg-[#FAF6F0] active:scale-95"
              >
                <Plus className="w-4 h-4 text-[#7A191E]" />
              </button>
            </div>
          </div>
        </div>

        {/* Tombol Konfirmasi Pemesanan */}
        <div className="p-4 sm:p-6 bg-[#FAF6F0] border-t border-[#DEC1AF]">
          <button
            type="button"
            onClick={handleConfirm}
            className="w-full py-3.5 px-6 rounded-xl bg-[#7A191E] hover:bg-[#591115] text-white font-bold text-sm sm:text-base flex items-center justify-between shadow-warm-md active:scale-98 transition-all"
          >
            <span>Tambahkan ke Keranjang</span>
            <span>Rp {totalPrice.toLocaleString('id-ID')}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
