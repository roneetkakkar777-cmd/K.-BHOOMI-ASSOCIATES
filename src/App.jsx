// =============================================
// APP.JSX - ROOT COMPONENT
// =============================================
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { WishlistProvider } from './contexts/WishlistContext';
import AppRoutes from './routes/AppRoutes';
import Loader from './components/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <WishlistProvider>
        <BrowserRouter>
          <AnimatePresence mode="wait">
            {loading ? (
              <Loader key="loader" onComplete={() => setLoading(false)} />
            ) : (
              <AppRoutes key="app" />
            )}
          </AnimatePresence>
        </BrowserRouter>
      </WishlistProvider>
    </ThemeProvider>
  );
}

export default App;
