import 'swiper/swiper.min.css'
// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import ThemePrimaryColor from './components/ThemePrimaryColor';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <ScrollToTop />
        <Router />
      </ThemePrimaryColor>
    </ThemeConfig>
  );
}
