import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthContextProvider } from './context/authContext'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ReactQueryProvider from './providers/ReactQeuryProvider'
import { CartProvider } from './context/CartContext'
import { Toaster } from 'sonner'
import Spinner from './components/spinner/Spinner'

createRoot(document.getElementById('root')!).render(
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
