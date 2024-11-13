import { Navigate, Outlet } from 'react-router-dom';
import Footer from '../components/Footer'
import Header from '../components/Header';
import { useContext } from 'react';
import { AuthContext } from '@/context/authContext';


export default function AuthLayout() {
  
  const { currentUser } = useContext(AuthContext)

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      
      <header className="w-full top-0 z-10 bg-gray-50">
        <Header 
          position='center'
        />
      </header>
      
      <main className="flex-grow w-full">
        {currentUser ? <Navigate to="/" /> : <Outlet />}
      </main>

      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}
