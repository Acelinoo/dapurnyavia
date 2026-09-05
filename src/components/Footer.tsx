import React from 'react';
import { BUSINESS_INFO } from '../data/reviewsData';
import { MapPin, Clock, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#591115] text-[#F3ECE1] border-t-2 border-[#7A191E] pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#7A191E]/60">
          
          {/* Kolom 1: Profil Usaha */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Logo Dapurnya. viaaa"
                className="w-12 h-12 rounded-lg bg-white p-1 object-contain shadow-sm"
              />
              <div>
                <span className="font-display font-bold text-xl text-white block leading-tight">
                  Dapurnya. viaaa
                </span>
                <span className="text-xs text-[#EAD5C7]">
                  {BUSINESS_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#EAD5C7]/90 leading-relaxed max-w-sm">
              Sajian aneka camilan gurih renyah: Udang Keju Crispy, Dimsum Keju Lumer Goreng, Basreng Bumbu Chili Oil, dan Cireng Isi. Digoreng dadakan untuk menjaga kesegaran dan cita rasa prima.
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-white tracking-wider uppercase">
              Navigasi Halaman
            </h4>
            <div className="w-8 h-0.5 bg-[#DEC1AF]" />
            <ul className="space-y-2 text-xs sm:text-sm text-[#EAD5C7]">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  &rsaquo; Beranda
                </a>
              </li>
              <li>
                <a href="#menu-bestseller" className="hover:text-white transition-colors">
                  &rsaquo; Menu Best Seller
                </a>
              </li>
              <li>
                <a href="#katalog-menu" className="hover:text-white transition-colors">
                  &rsaquo; Katalog Menu Lengkap
                </a>
              </li>
              <li>
                <a href="#ulasan-google" className="hover:text-white transition-colors">
                  &rsaquo; Ulasan Google Maps
                </a>
              </li>
              <li>
                <a href="#lokasi-operasional" className="hover:text-white transition-colors">
                  &rsaquo; Lokasi & Jadwal Operasional
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak & Operasional */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-sm text-white tracking-wider uppercase">
              Informasi Layanan
            </h4>
            <div className="w-8 h-0.5 bg-[#DEC1AF]" />
            
            <div className="space-y-2.5 text-xs text-[#EAD5C7]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#DEC1AF] flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#DEC1AF] flex-shrink-0 mt-0.5" />
                <div>
                  <p>Rabu – Senin: 10.00 – 21.00 WIB</p>
                  <p className="text-amber-200 font-semibold mt-0.5">Hari Selasa: LIBUR</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://api.whatsapp.com/send?phone=${BUSINESS_INFO.whatsappNumber}&text=Halo%20Dapurnya.viaaa,%20saya%20ingin%20bertanya%20menu`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] text-white text-xs font-bold hover:bg-[#1EBE5D] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Hubungi via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Baris Hak Cipta Formal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#DEC1AF]/80 gap-3 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} <strong>Dapurnya. viaaa</strong>. Seluruh hak cipta dilindungi.
          </p>
          <p className="flex items-center justify-center gap-1">
            <span>Dibuat dengan cinta dan cita rasa otentik untuk masyarakat Soreang.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
