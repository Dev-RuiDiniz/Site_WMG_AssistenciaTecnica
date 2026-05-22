import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteLayout } from './components/layout/SiteLayout';
import { Seo } from './seo/Seo';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { EquipmentPage } from './pages/EquipmentPage';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';

function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route
          path="/"
          element={
            <Seo route="home">
              <HomePage />
            </Seo>
          }
        />
        <Route
          path="/servicos"
          element={
            <Seo route="services">
              <ServicesPage />
            </Seo>
          }
        />
        <Route
          path="/equipamentos"
          element={
            <Seo route="equipment">
              <EquipmentPage />
            </Seo>
          }
        />
        <Route
          path="/sobre"
          element={
            <Seo route="about">
              <AboutPage />
            </Seo>
          }
        />
        <Route
          path="/contato"
          element={
            <Seo route="contact">
              <ContactPage />
            </Seo>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  );
}

export default App;
