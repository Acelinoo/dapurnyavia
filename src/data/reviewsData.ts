export interface GoogleReview {
  id: string;
  authorName: string;
  reviewerBadge: string;
  rating: number;
  relativeTime: string;
  text: string;
  highlightDish: string;
}

export const GOOGLE_REVIEWS_DATA: GoogleReview[] = [
  {
    id: 'rev-1',
    authorName: 'Farhan Aditya',
    reviewerBadge: 'Local Guide • 46 Ulasan',
    rating: 5,
    relativeTime: '1 minggu lalu',
    text: 'Basreng bumbu chili oil-nya benar-benar nagih! Aroma daun jeruknya sangat harum dan bumbu pedas gurihnya meresap rata tanpa bikin tenggorokan serak. Udang kejunya juga renyah banget di luar dan kejunya meleleh lumer melimpah. Lokasi pas di depan taman kota Soreang.',
    highlightDish: 'Basreng Chili Oil & Udang Keju'
  },
  {
    id: 'rev-2',
    authorName: 'Nisa Rahmawati',
    reviewerBadge: 'Ulasan Terverifikasi Google',
    rating: 5,
    relativeTime: '2 minggu lalu',
    text: 'Dimsum keju lumer gorengnya juara! Pas digigit kejunya langsung meleleh hangat di lidah. Porsinya pas dan harganya sangat terjangkau. Tempatnya bersih dan pelayanannya cepat saat ambil pesanan.',
    highlightDish: 'Dimsum Keju Lumer Goreng'
  },
  {
    id: 'rev-3',
    authorName: 'Dimas Pratama',
    reviewerBadge: 'Local Guide • 24 Ulasan',
    rating: 5,
    relativeTime: '3 minggu lalu',
    text: 'Cireng isinya mantap, ayam suwirnya tebal dan gurih pedas mercon. Pesan takeaway lewat WhatsApp langsung disiapkan fresh baru diangkat dari wajan. Recommended banget buat warga Soreang dan sekitarnya.',
    highlightDish: 'Cireng Isi Ayam Suwir'
  },
  {
    id: 'rev-4',
    authorName: 'Siti Aisyah',
    reviewerBadge: 'Ulasan Terverifikasi Google',
    rating: 5,
    relativeTime: '1 bulan lalu',
    text: 'Sering pesan untuk camilan sore keluarga. Anak-anak paling suka udang keju dan dimsumnya karena kejunya melimpah. Pelayanannya ramah sekali. Sukses terus Dapurnya.viaaa!',
    highlightDish: 'Udang Keju & Dimsum Keju'
  }
];

export const BUSINESS_INFO = {
  name: 'Dapurnya. viaaa',
  tagline: 'Hidangan Rumahan, Rasa Bintang Lima.',
  subTagline: 'Hadirkan Keajaiban Dapur ke Meja Makan Anda.',
  address: 'Jl. Raya Gading Tutuka, Cingcin, Kec. Soreang (Depan Taman Kota Soreang), Bandung, Jawa Barat',
  coordinate: {
    lat: -7.027974,
    lng: 107.542353
  },
  googleMapsUrl: 'https://www.google.com/maps/place/Dapurnya+via/@-7.0279687,107.5397727,17z/data=!3m1!4b1!4m6!3m5!1s0x2e68ed00587c25d7:0x2deda361c80e8df6!8m2!3d-7.027974!4d107.542353!16s%2Fg%2F11z0n9l222',
  writeReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJ1yV8WADtaC4R9o0OyGGj7S0',
  operationalSchedule: {
    tuesday: 'LIBUR (Tutup Setiap Hari Selasa)',
    regularDays: 'Rabu – Senin: 10.00 – 21.00 WIB'
  },
  ratingSummary: {
    score: 4.9,
    totalReviews: '60+',
    recommendationRate: '99%'
  },
  whatsappNumber: '6281234567890' // Nomor admin Dapurnya viaaa
};
