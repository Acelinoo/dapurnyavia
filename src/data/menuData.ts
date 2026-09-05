export interface MenuItem {
  id: string;
  name: string;
  category: 'semua' | 'bestseller' | 'dimsum' | 'udang' | 'basreng' | 'cireng' | 'minuman';
  categoryLabel: string;
  price: number;
  description: string;
  image: string;
  tag?: string;
  isBestSeller?: boolean;
  portionOptions?: { label: string; price: number }[];
  spicyLevels?: string[];
  notesPlaceholder?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'udang-keju-crispy',
    name: 'Udang Keju Crispy (Ala Gacoan)',
    category: 'udang',
    categoryLabel: 'Udang Keju',
    price: 20000,
    description: 'Olahan udang cincang lembut berbalut tepung roti emas renyah dengan isian keju mozarella lumer di bagian tengahnya. Disajikan hangat dengan saus cocolan gurih manis pedas.',
    image: '/images/dishes/udang-keju.jpg',
    tag: '[BEST SELLER]',
    isBestSeller: true,
    portionOptions: [
      { label: 'Porsi Reguler (Isi 3 pcs)', price: 20000 },
      { label: 'Porsi Puas (Isi 5 pcs)', price: 32000 },
    ],
    spicyLevels: ['Original Gurih', 'Pedas Sedang'],
    notesPlaceholder: 'Contoh: Saus cocolan dipisah, goreng garing'
  },
  {
    id: 'dimsum-keju-lumer-goreng',
    name: 'Dimsum Goreng Keju Lumer',
    category: 'dimsum',
    categoryLabel: 'Dimsum Keju',
    price: 18000,
    description: 'Dimsum goreng renyah keemasan berbahan daging ayam dan udang pilihan dengan kejutan keju lumer meleleh di dalamnya. Dilengkapi taburan daun bawang dan cocolan saus spesial.',
    image: '/images/dishes/dimsum-keju.jpg',
    tag: '[BEST SELLER]',
    isBestSeller: true,
    portionOptions: [
      { label: 'Porsi Reguler (Isi 4 pcs)', price: 18000 },
      { label: 'Porsi Komplit (Isi 6 pcs)', price: 26000 },
    ],
    spicyLevels: ['Original Gurih', 'Pedas Sedang', 'Ekstra Pedas'],
    notesPlaceholder: 'Contoh: Tambah saus chili oil'
  },
  {
    id: 'basreng-bumbu-chili-oil',
    name: 'Basreng Chili Oil Cobek (Daun Jeruk)',
    category: 'basreng',
    categoryLabel: 'Basreng Chili Oil',
    price: 15000,
    description: 'Bakso goreng renyah khas Jawa Barat di atas cobek batu, dibaluri racikan chili oil aromatik dengan wangi daun jeruk segar dan bawang gurih yang menggoda selera.',
    image: '/images/dishes/basreng-chilioil.jpg',
    tag: '[BEST SELLER]',
    isBestSeller: true,
    portionOptions: [
      { label: 'Porsi Sedang (150 gram)', price: 15000 },
      { label: 'Porsi Besar (250 gram)', price: 24000 },
    ],
    spicyLevels: ['Level 1 (Santai)', 'Level 2 (Sedang)', 'Level 3 (Pedas Mantap)', 'Level 5 (Ekstra Pedas)'],
    notesPlaceholder: 'Contoh: Daun jeruk diperbanyak'
  },
  {
    id: 'cireng-isi-spesial',
    name: 'Cireng Chili Oil (Isi Ayam Suwir & Keju)',
    category: 'cireng',
    categoryLabel: 'Cireng Isi',
    price: 15000,
    description: 'Cireng krispi renyah di luar dan kenyal di dalam, disajikan dengan siraman chili oil pedas gurih serta isian melimpah ayam suwir bumbu pedas mercon dan keju leleh.',
    image: '/images/dishes/cireng-isi.jpg',
    tag: '[BEST SELLER]',
    isBestSeller: true,
    portionOptions: [
      { label: 'Porsi Isi 4 pcs', price: 15000 },
      { label: 'Porsi Isi 6 pcs', price: 22000 },
    ],
    spicyLevels: ['Ayam Suwir Pedas Gurih', 'Ayam Suwir Mercon (Sangat Pedas)', 'Varian Keju Lumer (Non-Pedas)'],
    notesPlaceholder: 'Contoh: Campur 2 pedas 2 keju'
  },
  {
    id: 'paket-combo-ngemil-puas',
    name: 'Paket Kombo Puas Dapurnya.viaaa',
    category: 'bestseller',
    categoryLabel: 'Paket Hemat',
    price: 38000,
    description: 'Paket lengkap paling diminati: 1 Porsi Udang Keju (3 pcs) + 1 Porsi Basreng Chili Oil Daun Jeruk + 1 Gelas Es Teh Manis Melati Dingin.',
    image: '/images/dishes/udang-keju.jpg',
    tag: '[PAKET FAVORIT]',
    isBestSeller: true,
    spicyLevels: ['Level Pedas Standar', 'Level Ekstra Pedas'],
    notesPlaceholder: 'Contoh: Es teh manis sedang'
  },
  {
    id: 'es-jeruk-peras-murni',
    name: 'Es Jeruk Peras Alami',
    category: 'minuman',
    categoryLabel: 'Minuman',
    price: 8000,
    description: 'Perasan jeruk segar asli dengan bulir alami dan es batu dingin. Rasa manis asam alami yang menyegarkan kerongkongan setelah menyantap camilan gurih pedas.',
    image: '/images/dishes/minuman-segar.jpg',
    tag: '[SEGAR ALAMI]',
    isBestSeller: false,
    notesPlaceholder: 'Contoh: Gula sedikit / tanpa es'
  },
  {
    id: 'es-teh-manis-melati',
    name: 'Es Teh Manis Melati Dingin',
    category: 'minuman',
    categoryLabel: 'Minuman',
    price: 5000,
    description: 'Seduhan teh melati wangi khas Nusantara dengan tingkat kemanisan yang pas dan kesegaran es batu kristal.',
    image: '/images/dishes/minuman-segar.jpg',
    tag: '[TEMAN NGEMIL]',
    isBestSeller: false,
    notesPlaceholder: 'Contoh: Manis sedang / es dipisah'
  },
  {
    id: 'es-cincau-susu-aren',
    name: 'Es Cincau Susu Gula Aren',
    category: 'minuman',
    categoryLabel: 'Minuman',
    price: 10000,
    description: 'Potongan cincau hitam lembut disajikan bersama susu murni gurih dan lelehan gula aren murni yang legit.',
    image: '/images/dishes/minuman-segar.jpg',
    tag: '[MANIS LEGIT]',
    isBestSeller: false,
    notesPlaceholder: 'Contoh: Es batu standar'
  }
];

export const CATEGORIES = [
  { id: 'semua', label: 'Semua Menu' },
  { id: 'bestseller', label: 'Menu Best Seller' },
  { id: 'udang', label: 'Udang Keju' },
  { id: 'dimsum', label: 'Dimsum Keju' },
  { id: 'basreng', label: 'Basreng Chili Oil' },
  { id: 'cireng', label: 'Cireng Isi' },
  { id: 'minuman', label: 'Minuman Segar' }
];
