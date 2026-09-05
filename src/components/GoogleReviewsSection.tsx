import React from 'react';
import { GOOGLE_REVIEWS_DATA, BUSINESS_INFO } from '../data/reviewsData';
import { Star, ExternalLink, MessageSquarePlus, CheckCircle2 } from 'lucide-react';

export const GoogleReviewsSection: React.FC = () => {
  return (
    <section id="ulasan-google" className="py-16 sm:py-20 bg-[#FCFAF6] border-b border-[#DEC1AF]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header Bagian */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#7A191E] uppercase block mb-2 font-mono">
            [INTEGRASI ULASAN GOOGLE MAPS]
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#231F20] tracking-tight">
            Kepuasan Pelanggan Nyata
          </h2>
          <div className="w-16 h-0.5 bg-[#7A191E] mx-auto my-3" />
          <p className="text-sm sm:text-base text-[#786F66]">
            Ulasan asli dari para pengunjung dan penikmat kuliner Dapurnya. viaaa di Google Maps Soreang, Bandung.
          </p>
        </div>

        {/* Ringkasan Skor Rating Google */}
        <div className="bg-white rounded-2xl border border-[#DEC1AF]/80 p-6 sm:p-8 max-w-3xl mx-auto shadow-warm-md mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Skor Rating */}
            <div className="flex items-center gap-5">
              <div className="text-center sm:text-left">
                <span className="font-display font-extrabold text-4xl sm:text-5xl text-[#7A191E] block leading-none">
                  {BUSINESS_INFO.ratingSummary.score}
                </span>
                <div className="flex items-center gap-1 justify-center sm:justify-start text-amber-500 my-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-[#786F66]">
                  Berdasarkan {BUSINESS_INFO.ratingSummary.totalReviews} ulasan Google
                </span>
              </div>
            </div>

            {/* Rekomendasi & Tombol Langsung */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-[#DEC1AF] bg-[#FAF6F0] text-[#7A191E] text-xs sm:text-sm font-semibold hover:bg-[#7A191E] hover:text-white hover:border-[#7A191E] transition-all shadow-xs"
              >
                <span>Lihat di Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#7A191E] text-white text-xs sm:text-sm font-semibold hover:bg-[#591115] transition-all shadow-warm-sm"
              >
                <MessageSquarePlus className="w-4 h-4" />
                <span>Tulis Ulasan</span>
              </a>
            </div>

          </div>
        </div>

        {/* Grid Kartu Ulasan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GOOGLE_REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-xl border border-[#DEC1AF]/60 shadow-warm-sm hover:shadow-warm-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header Ulasan */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-sm sm:text-base text-[#231F20]">
                        {rev.authorName}
                      </h4>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    </div>
                    <span className="text-[11px] text-[#786F66] block">
                      {rev.reviewerBadge}
                    </span>
                  </div>

                  <span className="text-[11px] text-[#786F66] whitespace-nowrap">
                    {rev.relativeTime}
                  </span>
                </div>

                {/* Rating Bintang */}
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Teks Ulasan */}
                <p className="text-xs sm:text-sm text-[#231F20]/85 leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              {/* Menu yang Diulas */}
              <div className="mt-4 pt-3 border-t border-[#DEC1AF]/30 flex items-center justify-between text-[11px]">
                <span className="text-[#786F66]">Menu Favorit:</span>
                <span className="font-mono font-semibold text-[#7A191E]">
                  [{rev.highlightDish}]
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
