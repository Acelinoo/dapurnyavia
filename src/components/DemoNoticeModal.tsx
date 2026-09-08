import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Sparkles } from 'lucide-react';

interface DemoNoticeModalProps {
  /** Delay kemunculan popup dalam milidetik (default: 3000ms = 3 detik) */
  delayMs?: number;
  /** Kunci sessionStorage untuk memastikan popup hanya muncul 1 kali per sesi */
  storageKey?: string;
}

export const DemoNoticeModal: React.FC<DemoNoticeModalProps> = ({
  delayMs = 3000,
  storageKey = 'dapurnyavia_demo_notice_shown',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Pastikan hanya berjalan pada sisi browser/klien
    if (typeof window === 'undefined') return;

    // Cek apakah popup sudah pernah ditampilkan dalam sesi kunjungan saat ini
    const hasShown = sessionStorage.getItem(storageKey);
    if (hasShown) return;

    // Timer muncul otomatis setelah jeda waktu (3 detik)
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Tandai ke sessionStorage agar tidak pernah muncul lagi pada sesi ini
      try {
        sessionStorage.setItem(storageKey, 'true');
      } catch {
        // Fallback aman jika private browsing membatasi storage
      }
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs, storageKey]);

  // Handler menutup popup dengan animasi keluar (exit animation) yang halus
  const handleClose = React.useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 200);
  }, [isClosing]);

  // Keyboard shortcut: tutup dengan tombol Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  // Template pesan WhatsApp resmi GerobakLink
  const waMessage = 'Halo Kak Acelino, saya tertarik dengan website Dapurnya Via yang saya lihat dan ingin mengetahui lebih lanjut mengenai pembuatan website.';
  const waUrl = `https://wa.me/6289655223792?text=${encodeURIComponent(waMessage)}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-notice-title"
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs transition-opacity duration-200 ${
        isClosing ? 'opacity-0' : 'animate-fadeIn'
      }`}
      onClick={(e) => {
        // Tutup jika mengklik area backdrop di luar modal card
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div
        className={`relative w-full max-w-lg bg-[#FAF6F0] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#DEC1AF] overflow-hidden transition-all duration-200 ${
          isClosing ? 'opacity-0 scale-95' : 'animate-scaleUp'
        }`}
      >
        {/* Aksen Gradien Tipis di Atas Kartu */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#7A191E] via-[#C8785E] to-[#7A191E]" />

        {/* Tombol Tutup Silang (X) di Sudut Kanan Atas */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Tutup pemberitahuan"
          className="absolute top-4 right-4 p-2 rounded-full text-[#786F66] hover:text-[#231F20] hover:bg-[#EAD5C7]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#7A191E]/30"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Konten Utama Popup */}
        <div className="p-6 sm:p-8 space-y-5">
          {/* Badge & Judul */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7A191E]/10 border border-[#7A191E]/20 text-[#7A191E] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#7A191E]" />
              <span>Prototype Preview</span>
            </div>
            <h3
              id="demo-notice-title"
              className="text-2xl sm:text-3xl font-bold font-display text-[#231F20] tracking-tight"
            >
              Website Demo
            </h3>
          </div>

          {/* Isi Paragraf Informasi */}
          <div className="space-y-3 text-sm sm:text-base text-[#4A423E] leading-relaxed">
            <p>
              Website ini merupakan contoh/prototype yang dibuat khusus untuk{' '}
              <strong className="text-[#231F20] font-semibold">Dapurnya Via</strong> dan belum menjadi website resmi.
            </p>
            <p className="text-xs sm:text-sm text-[#786F66]">
              Versi resmi nantinya dapat disesuaikan dengan menu terbaru, harga, informasi bisnis, foto produk, kontak, serta kebutuhan Dapurnya Via.
            </p>
          </div>

          {/* Kotak Callout Penawaran GerobakLink */}
          <div className="bg-white/85 border border-[#DEC1AF] rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-xs">
            <p className="font-display font-bold text-sm sm:text-base text-[#7A191E]">
              Tertarik menggunakan website ini untuk bisnis Kakak?
            </p>
            <p className="text-xs sm:text-sm text-[#5C534D] mt-1">
              Hubungi GerobakLink untuk mendapatkan versi resminya.
            </p>
          </div>

          {/* Baris Tombol CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            {/* Tombol Utama: WhatsApp GerobakLink */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#25D366]/40"
            >
              <MessageCircle className="w-5 h-5 flex-shrink-0" />
              <span>Hubungi GerobakLink</span>
            </a>

            {/* Tombol Kedua: Tutup & Lanjut Lihat Website */}
            <button
              type="button"
              onClick={handleClose}
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[#DEC1AF] text-[#786F66] hover:text-[#231F20] hover:bg-white/70 font-semibold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#7A191E]/20"
            >
              Lihat Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoNoticeModal;
