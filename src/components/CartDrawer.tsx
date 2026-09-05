import React, { useState } from 'react';
import type { CartItem, OrderMethod } from '../types/cart';
import { BUSINESS_INFO } from '../data/reviewsData';
import { X, Plus, Minus, Trash2, Send, ShoppingBag, MapPin, Clock, Utensils } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [method, setMethod] = useState<OrderMethod>('takeaway');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [generalNotes, setGeneralNotes] = useState('');
  const [formError, setFormError] = useState('');

  if (!isOpen) return null;

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckoutWhatsApp = () => {
    if (!customerName.trim()) {
      setFormError('Silakan masukkan nama pemesan.');
      return;
    }
    if (method === 'delivery' && !deliveryAddress.trim()) {
      setFormError('Silakan isi alamat lengkap pengantaran.');
      return;
    }
    if (method === 'dinein' && !tableNumber.trim()) {
      setFormError('Silakan isi nomor meja Anda.');
      return;
    }
    setFormError('');

    // Format Teks Pesanan WhatsApp Formal & Terstruktur
    const methodLabels: Record<OrderMethod, string> = {
      takeaway: 'Ambil Sendiri (Takeaway)',
      delivery: 'Pesan Antar (Delivery)',
      dinein: 'Makan di Tempat (Dine-in)'
    };

    let message = `*FORMULIR PEMESANAN — DAPURNYA. VIAAA*\n`;
    message += `_Jl. Raya Gading Tutuka, Depan Taman Kota Soreang_\n`;
    message += `--------------------------------------------------\n`;
    message += `Halo admin Dapurnya. viaaa, saya ingin memesan menu:\n\n`;

    cartItems.forEach((item, idx) => {
      const itemSubtotal = item.price * item.quantity;
      message += `${idx + 1}. *${item.name}* (x${item.quantity})\n`;
      if (item.portionLabel) {
        message += `   - Porsi: ${item.portionLabel}\n`;
      }
      if (item.spicyLevel) {
        message += `   - Varian / Pedas: ${item.spicyLevel}\n`;
      }
      if (item.notes) {
        message += `   - Catatan: ${item.notes}\n`;
      }
      message += `   - Subtotal: Rp ${itemSubtotal.toLocaleString('id-ID')}\n\n`;
    });

    message += `--------------------------------------------------\n`;
    message += `*TOTAL ESTIMASI: Rp ${totalPrice.toLocaleString('id-ID')}*\n`;
    message += `--------------------------------------------------\n`;
    message += `*RINCIAN PEMESAN:*\n`;
    message += `• Nama: ${customerName.trim()}\n`;
    if (customerPhone.trim()) {
      message += `• No. Kontak: ${customerPhone.trim()}\n`;
    }
    message += `• Metode: ${methodLabels[method]}\n`;

    if (method === 'delivery') {
      message += `• Alamat Antar: ${deliveryAddress.trim()}\n`;
    } else if (method === 'dinein') {
      message += `• No. Meja: ${tableNumber.trim()}\n`;
    } else if (method === 'takeaway' && pickupTime.trim()) {
      message += `• Estimasi Ambil: ${pickupTime.trim()}\n`;
    }

    if (generalNotes.trim()) {
      message += `• Catatan Tambahan: ${generalNotes.trim()}\n`;
    }

    message += `\nMohon konfirmasi ketersediaan dan total pembayarannya. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://api.whatsapp.com/send?phone=${BUSINESS_INFO.whatsappNumber}&text=${encodedMessage}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer Kontainer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF6F0] shadow-2xl flex flex-col border-l border-[#DEC1AF]">
          
          {/* Header Keranjang */}
          <div className="p-4 sm:p-5 bg-white border-b border-[#DEC1AF] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#EAD5C7] flex items-center justify-center text-[#7A191E]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-[#231F20] leading-none">
                  Keranjang Pesanan
                </h3>
                <span className="text-[11px] text-[#786F66]">
                  {cartItems.length} hidangan dipilih
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#786F66] hover:text-[#231F20] hover:bg-[#FAF6F0]"
              aria-label="Tutup Keranjang"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Isi Keranjang (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-12 h-12 text-[#DEC1AF] mx-auto mb-3 stroke-[1.5]" />
                <p className="font-display font-bold text-base text-[#231F20]">
                  Keranjang Belanja Masih Kosong
                </p>
                <p className="text-xs text-[#786F66] mt-1 max-w-xs mx-auto">
                  Silakan pilih hidangan favorit Anda dari katalog menu Dapurnya. viaaa.
                </p>
              </div>
            ) : (
              <>
                {/* Daftar Item */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#786F66]">
                    <span>[DAFTAR PESANAN]</span>
                    <button
                      onClick={onClearCart}
                      className="text-red-700 hover:underline"
                    >
                      Hapus Semua
                    </button>
                  </div>

                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white p-3.5 rounded-xl border border-[#DEC1AF]/60 shadow-warm-sm flex gap-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover bg-[#F3ECE1] flex-shrink-0"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <h4 className="font-bold text-sm text-[#231F20] leading-snug">
                              {item.name}
                            </h4>
                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="text-gray-400 hover:text-red-600 p-1"
                              title="Hapus"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          {(item.portionLabel || item.spicyLevel) && (
                            <p className="text-[11px] text-[#7A191E] font-medium mt-0.5">
                              {[item.portionLabel, item.spicyLevel].filter(Boolean).join(' • ')}
                            </p>
                          )}
                          {item.notes && (
                            <p className="text-[10px] text-[#786F66] italic mt-0.5">
                              "{item.notes}"
                            </p>
                          )}
                        </div>

                        <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-[#DEC1AF]/20">
                          <span className="font-bold text-xs sm:text-sm text-[#7A191E]">
                            Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                          </span>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="w-6 h-6 rounded border border-[#DEC1AF] flex items-center justify-center hover:bg-[#FAF6F0] active:scale-95"
                            >
                              <Minus className="w-3 h-3 text-[#7A191E]" />
                            </button>
                            <span className="font-mono text-xs font-bold w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="w-6 h-6 rounded border border-[#DEC1AF] flex items-center justify-center hover:bg-[#FAF6F0] active:scale-95"
                            >
                              <Plus className="w-3 h-3 text-[#7A191E]" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pemilihan Metode Pesanan */}
                <div className="bg-white p-4 rounded-xl border border-[#DEC1AF]/60 shadow-warm-sm space-y-4">
                  <label className="text-xs font-bold text-[#231F20] tracking-wide uppercase block font-mono">
                    [METODE PEMESANAN]
                  </label>

                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setMethod('takeaway')}
                      className={`p-2.5 rounded-lg border text-xs font-semibold flex flex-col items-center justify-center gap-1 transition-all ${
                        method === 'takeaway'
                          ? 'border-[#7A191E] bg-[#FAF6F0] text-[#7A191E]'
                          : 'border-[#DEC1AF]/60 text-[#786F66] hover:text-[#231F20]'
                      }`}
                    >
                      <Clock className="w-4 h-4" />
                      <span>Takeaway</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setMethod('delivery')}
                      className={`p-2.5 rounded-lg border text-xs font-semibold flex flex-col items-center justify-center gap-1 transition-all ${
                        method === 'delivery'
                          ? 'border-[#7A191E] bg-[#FAF6F0] text-[#7A191E]'
                          : 'border-[#DEC1AF]/60 text-[#786F66] hover:text-[#231F20]'
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                      <span>Delivery</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setMethod('dinein')}
                      className={`p-2.5 rounded-lg border text-xs font-semibold flex flex-col items-center justify-center gap-1 transition-all ${
                        method === 'dinein'
                          ? 'border-[#7A191E] bg-[#FAF6F0] text-[#7A191E]'
                          : 'border-[#DEC1AF]/60 text-[#786F66] hover:text-[#231F20]'
                      }`}
                    >
                      <Utensils className="w-4 h-4" />
                      <span>Dine-in</span>
                    </button>
                  </div>

                  {/* Formulir Detail Pemesan */}
                  <div className="space-y-3 pt-2 text-xs">
                    <div>
                      <label className="block text-[#786F66] mb-1 font-medium">
                        Nama Pemesan *
                      </label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Contoh: Ibu Rina / Bpk. Hendra"
                        className="w-full p-2.5 rounded-lg border border-[#DEC1AF] focus:outline-none focus:border-[#7A191E] bg-[#FAF6F0]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#786F66] mb-1 font-medium">
                        Nomor WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="Contoh: 0812xxxxxxx"
                        className="w-full p-2.5 rounded-lg border border-[#DEC1AF] focus:outline-none focus:border-[#7A191E] bg-[#FAF6F0]"
                      />
                    </div>

                    {method === 'delivery' && (
                      <div>
                        <label className="block text-[#786F66] mb-1 font-medium">
                          Alamat Pengantaran Lengkap *
                        </label>
                        <textarea
                          rows={2}
                          value={deliveryAddress}
                          onChange={(e) => setDeliveryAddress(e.target.value)}
                          placeholder="Nama jalan, nomor rumah, perumahan, patokan..."
                          className="w-full p-2.5 rounded-lg border border-[#DEC1AF] focus:outline-none focus:border-[#7A191E] bg-[#FAF6F0]"
                        />
                      </div>
                    )}

                    {method === 'dinein' && (
                      <div>
                        <label className="block text-[#786F66] mb-1 font-medium">
                          Nomor Meja *
                        </label>
                        <input
                          type="text"
                          value={tableNumber}
                          onChange={(e) => setTableNumber(e.target.value)}
                          placeholder="Contoh: Meja 04"
                          className="w-full p-2.5 rounded-lg border border-[#DEC1AF] focus:outline-none focus:border-[#7A191E] bg-[#FAF6F0]"
                        />
                      </div>
                    )}

                    {method === 'takeaway' && (
                      <div>
                        <label className="block text-[#786F66] mb-1 font-medium">
                          Perkiraan Jam Ambil (Opsional)
                        </label>
                        <input
                          type="text"
                          value={pickupTime}
                          onChange={(e) => setPickupTime(e.target.value)}
                          placeholder="Contoh: 15 menit lagi / Jam 17.30"
                          className="w-full p-2.5 rounded-lg border border-[#DEC1AF] focus:outline-none focus:border-[#7A191E] bg-[#FAF6F0]"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-[#786F66] mb-1 font-medium">
                        Catatan Pesanan Tambahan (Opsional)
                      </label>
                      <input
                        type="text"
                        value={generalNotes}
                        onChange={(e) => setGeneralNotes(e.target.value)}
                        placeholder="Contoh: Minta saus dipisah ya"
                        className="w-full p-2.5 rounded-lg border border-[#DEC1AF] focus:outline-none focus:border-[#7A191E] bg-[#FAF6F0]"
                      />
                    </div>
                  </div>

                  {formError && (
                    <p className="text-xs text-red-700 bg-red-50 p-2 rounded border border-red-200">
                      {formError}
                    </p>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Footer Keranjang & Tombol WhatsApp Checkout */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-5 bg-white border-t border-[#DEC1AF] space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#786F66]">Total Estimasi</span>
                <span className="font-display font-bold text-xl text-[#7A191E]">
                  Rp {totalPrice.toLocaleString('id-ID')}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCheckoutWhatsApp}
                className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-warm-md active:scale-98 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Pesanan ke WhatsApp</span>
              </button>

              <p className="text-[11px] text-[#786F66] text-center">
                Pesanan akan langsung terhubung ke WhatsApp resmi Dapurnya. viaaa
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
