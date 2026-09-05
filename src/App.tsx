import { useState, useEffect } from 'react';
import { MENU_ITEMS, type MenuItem } from './data/menuData';
import type { CartItem } from './types/cart';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BestSellerSection } from './components/BestSellerSection';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ItemCustomizeModal } from './components/ItemCustomizeModal';

export const App: React.FC = () => {
  // State Keranjang Belanja dengan Penyimpanan Lokal (LocalStorage)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('dapurnyaviaaa_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('dapurnyaviaaa_cart', JSON.stringify(cartItems));
    } catch {
      // Abaikan jika penyimpanan penuh
    }
  }, [cartItems]);

  const totalCartItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Penambahan item ke keranjang
  const handleAddToCart = (newItem: CartItem) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === newItem.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += newItem.quantity;
        return updated;
      }
      return [...prev, newItem];
    });
    setIsCartOpen(true);
  };

  // Pembaruan kuantitas (+ / -)
  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  // Penghapusan satu item
  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Pengosongan seluruh keranjang
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Pengguliran halus ke bagian menu
  const handleScrollToMenu = () => {
    const el = document.getElementById('menu-bestseller');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#231F20]">
      {/* Bilah Navigasi */}
      <Navbar
        totalCartItems={totalCartItemsCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Konten Halaman */}
      <main className="flex-1">
        {/* Bagian Hero Presisi Gambar 1 */}
        <HeroSection
          onScrollToMenu={handleScrollToMenu}
          onOpenCart={() => setIsCartOpen(true)}
          totalCartItems={totalCartItemsCount}
        />

        {/* Bagian Menu Best Seller */}
        <BestSellerSection
          items={MENU_ITEMS}
          onSelectItem={(item) => setSelectedItemForModal(item)}
        />

        {/* Bagian Katalog Menu Lengkap */}
        <MenuSection
          items={MENU_ITEMS}
          onSelectItem={(item) => setSelectedItemForModal(item)}
        />

        {/* Bagian Profil & Kisah Kami */}
        <AboutSection />

        {/* Bagian Integrasi Ulasan Google */}
        <GoogleReviewsSection />

        {/* Bagian Peta Lokasi & Jadwal Operasional */}
        <LocationSection />
      </main>

      {/* Catatan Kaki */}
      <Footer />

      {/* Panel Keranjang Belanja Samping (Slide-over Drawer) */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Modal Kustomisasi Porsi & Level Pedas */}
      <ItemCustomizeModal
        item={selectedItemForModal}
        onClose={() => setSelectedItemForModal(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default App;
