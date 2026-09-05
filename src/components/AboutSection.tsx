import React from 'react';
import { Heart, ShieldCheck, Flame } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF6F0] border-b border-[#DEC1AF]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Kolom Kiri: Visual & Aksen Identitas */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden shadow-warm-lg border-2 border-[#DEC1AF] bg-white p-3">
              <img
                src="/images/dishes/dimsum-keju.jpg"
                alt="Keju Lumer Dapurnya. viaaa"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="p-4 text-center bg-[#FAF6F0] rounded-lg mt-3 border border-[#DEC1AF]/50">
                <span className="font-display font-bold text-lg text-[#7A191E] block">
                  "Made with love especially for you."
                </span>
                <span className="text-xs text-[#786F66] mt-0.5 block">
                  Filosofi utama dapur kami dalam setiap porsi sajian.
                </span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Teks Cerita Usaha Formal */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold tracking-widest text-[#7A191E] uppercase block mb-2 font-mono">
              [TENTANG KAMI]
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#231F20] tracking-tight leading-snug">
              Dedikasi Rasa Rumahan dengan Kualitas Bintang Lima
            </h2>
            <div className="w-16 h-0.5 bg-[#7A191E] my-4" />

            <p className="text-sm sm:text-base text-[#786F66] leading-relaxed mb-4">
              <strong>Dapurnya. viaaa</strong> bermula dari kecintaan mendalam terhadap kreasi kuliner gurih rumahan. Kami meyakini bahwa hidangan istimewa tidak harus mahal, namun wajib diolah dengan bahan-bahan bermutu tinggi dan kebersihan yang terjaga.
            </p>

            <p className="text-sm sm:text-base text-[#786F66] leading-relaxed mb-8">
              Mulai dari racikan udang keju dengan lelehan keju mozarella melimpah, dimsum goreng keemasan, basreng renyah berbumbu minyak cabai dan daun jeruk aromatik, hingga cireng isi gurih pedas — seluruh pesanan digoreng secara dadakan agar dapat dinikmati dalam kondisi hangat dan bertekstur sempurna.
            </p>

            {/* 3 Pilar Keunggulan Formal */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-[#DEC1AF]/60 shadow-warm-sm">
                <div className="w-9 h-9 rounded-lg bg-[#FAF6F0] flex items-center justify-center text-[#7A191E] mb-3">
                  <Flame className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#231F20] mb-1">
                  Goreng Dadakan
                </h4>
                <p className="text-xs text-[#786F66] leading-relaxed">
                  Selalu disajikan segar dan hangat langsung dari wajan penggorengan.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#DEC1AF]/60 shadow-warm-sm">
                <div className="w-9 h-9 rounded-lg bg-[#FAF6F0] flex items-center justify-center text-[#7A191E] mb-3">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#231F20] mb-1">
                  Keju Lumer Premium
                </h4>
                <p className="text-xs text-[#786F66] leading-relaxed">
                  Isian keju berkualitas yang meleleh gurih di setiap gigitan.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#DEC1AF]/60 shadow-warm-sm">
                <div className="w-9 h-9 rounded-lg bg-[#FAF6F0] flex items-center justify-center text-[#7A191E] mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#231F20] mb-1">
                  Higienis & Halal
                </h4>
                <p className="text-xs text-[#786F66] leading-relaxed">
                  Pengolahan bersih dengan standar bahan pangan halal dan higienis.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
