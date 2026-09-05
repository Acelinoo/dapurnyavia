import React from 'react';
import { BUSINESS_INFO } from '../data/reviewsData';
import { MapPin, Clock, Navigation, AlertCircle } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const schedule = [
    { day: 'Senin', hours: '10.00 – 21.00 WIB', isClosed: false },
    { day: 'Selasa', hours: 'LIBUR (TUTUP)', isClosed: true },
    { day: 'Rabu', hours: '10.00 – 21.00 WIB', isClosed: false },
    { day: 'Kamis', hours: '10.00 – 21.00 WIB', isClosed: false },
    { day: 'Jumat', hours: '10.00 – 21.00 WIB', isClosed: false },
    { day: 'Sabtu', hours: '10.00 – 21.30 WIB', isClosed: false },
    { day: 'Minggu', hours: '10.00 – 21.30 WIB', isClosed: false },
  ];

  return (
    <section id="lokasi-operasional" className="py-16 sm:py-20 bg-[#FAF6F0] border-b border-[#DEC1AF]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header Bagian */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#7A191E] uppercase block mb-2 font-mono">
            [PANDUAN LOKASI & WAKTU LAYANAN]
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#231F20] tracking-tight">
            Lokasi & Jadwal Operasional
          </h2>
          <div className="w-16 h-0.5 bg-[#7A191E] mx-auto my-3" />
          <p className="text-sm sm:text-base text-[#786F66]">
            Kunjungi gerai kami di seberang Taman Kota Soreang atau pesan untuk pengantaran langsung ke tempat Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Kolom Kiri: Informasi Alamat & Jadwal Operasional Formal */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Alamat Fisik */}
            <div className="bg-white p-6 rounded-2xl border border-[#DEC1AF]/80 shadow-warm-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#FAF6F0] border border-[#DEC1AF] flex items-center justify-center text-[#7A191E] flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#231F20]">
                    Alamat Gerai
                  </h4>
                  <p className="text-xs sm:text-sm text-[#786F66] mt-1.5 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-[#7A191E] font-medium mt-2">
                    Patokan: Tepat di depan Taman Kota Soreang, gerai dengan kanopi bergaris merah putih khas Dapurnya. viaaa.
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#DEC1AF]/30">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#7A191E] hover:bg-[#591115] text-white text-xs sm:text-sm font-semibold transition-all shadow-warm-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Buka Navigasi Rute di Google Maps</span>
                </a>
              </div>
            </div>

            {/* Tabel Jadwal Operasional Mingguan */}
            <div className="bg-white p-6 rounded-2xl border border-[#DEC1AF]/80 shadow-warm-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#FAF6F0] border border-[#DEC1AF] flex items-center justify-center text-[#7A191E]">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-base text-[#231F20]">
                  Jadwal Operasional
                </h4>
              </div>

              {/* Peringatan Khusus Selasa Libur (Tipografi Formal) */}
              <div className="p-3 rounded-lg bg-[#FAF6F0] border border-[#DEC1AF] mb-4 flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#7A191E] flex-shrink-0" />
                <span className="text-xs text-[#591115] font-semibold">
                  Pemberitahuan: Gerai Libur dan Tutup Setiap Hari Selasa.
                </span>
              </div>

              <div className="divide-y divide-[#DEC1AF]/30 text-xs sm:text-sm">
                {schedule.map((item) => (
                  <div
                    key={item.day}
                    className={`py-2.5 flex items-center justify-between ${
                      item.isClosed
                        ? 'bg-red-50/50 px-2 rounded font-semibold text-red-800'
                        : 'text-[#231F20]'
                    }`}
                  >
                    <span>{item.day}</span>
                    <span className="font-mono">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Kolom Kanan: Google Maps Embed Responsif */}
          <div className="lg:col-span-7">
            <div className="bg-white p-3 sm:p-4 rounded-2xl border border-[#DEC1AF]/80 shadow-warm-md">
              <div className="relative w-full h-[380px] sm:h-[460px] rounded-xl overflow-hidden bg-[#F3ECE1]">
                <iframe
                  title="Peta Lokasi Dapurnya via Soreang"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.841005230913!2d107.53977277579477!3d-7.027968668853112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ed00587c25d7%3A0x2deda361c80e8df6!2sDapurnya%20via!5e0!3m2!1sid!2sid!4v1725537600000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-3 text-center sm:text-left sm:flex items-center justify-between text-xs text-[#786F66] mt-2">
                <span>📍 Titik Koordinat: -7.027974, 107.542353</span>
                <span className="font-semibold text-[#7A191E]">Kecamatan Soreang, Kabupaten Bandung</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
