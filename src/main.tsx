import ReactDOM from 'react-dom/client'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ReactQueryProvider from './providers/ReactQeuryProvider';
import { AuthContextProvider } from './context/authContext';
import { Suspense } from 'react';
import Spinner from './components/spinner/Spinner';
import { Toaster } from 'sonner'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/'>
    <AuthContextProvider>
      <ReactQueryProvider>
        <CartProvider>
          <Suspense fallback={<Spinner/>}>
            <Toaster/>
            <App />
          </Suspense>
        </CartProvider>
      </ReactQueryProvider>
    </AuthContextProvider>
  </BrowserRouter>
)
