import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer'
import Header from '../components/Header';
import { AppState, useSelector } from '@/store/Store';
import { useEffect } from 'react';
import i18n from '@/utils/i18n';


export default function MainLayout() {

  const customizer = useSelector((state: AppState) => state.customizer);

  useEffect(() => {
    i18n.changeLanguage(customizer.isLanguage);
  }, [customizer.isLanguage, i18n]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      
      <header className="w-full stickyx top-0 z-10 bg-gray-50">
        <Header position="nav"/>
      </header>
      
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}
