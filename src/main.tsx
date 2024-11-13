import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthContextProvider } from './context/authContext'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ReactQueryProvider from './providers/ReactQeuryProvider'
import { CartProvider } from './context/CartContext'
import { Toaster } from 'sonner'
import Spinner from './components/spinner/Spinner'
import store from './store/Store'
import { Provider } from 'react-redux'
import './utils/i18n.ts'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/'>
    <Provider store={store}>
      <Suspense fallback={<Spinner/>}>
        <AuthContextProvider>
          <ReactQueryProvider>
            <CartProvider>
              <Toaster/>
              <App />
            </CartProvider>
          </ReactQueryProvider>
        </AuthContextProvider>
      </Suspense>
    </Provider>
  </BrowserRouter>
)
