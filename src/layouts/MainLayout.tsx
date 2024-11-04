import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer'
import Header from '../components/Header';


export default function MainLayout() {
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
