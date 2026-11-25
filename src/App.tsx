import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Brands } from './pages/Brands';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { PriceList } from './pages/PriceList';
import { NotFound } from './pages/NotFound';

/* A browser does not scroll to the top on a client-side route change, and this
   app never told it to. So if she was 4000px down the shop and tapped "Brands",
   the new page opened at 4000px — landing on whatever was there, usually the
   footer. Every page change starts at the top now.

   `instant` matters: the stylesheet sets `scroll-behavior: smooth`, so a plain
   scrollTo would animate the whole way up through the outgoing page. */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
};

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CartProvider>
        <div className="min-h-screen flex flex-col" style={{ background: 'var(--cream)' }}>
          <Navbar />
          <CartDrawer />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/about" element={<About />} />
              <Route path="/price-list" element={<PriceList />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
