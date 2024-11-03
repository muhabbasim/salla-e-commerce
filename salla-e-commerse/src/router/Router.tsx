import { lazy } from 'react'
import Loadable from '../components/loadable/Loadable';

const AuthLayout = Loadable(lazy(() => import("../layouts/AuthLayout")));
const MainLayout = Loadable(lazy(() => import("../layouts/MainLayout")));
const Cart = Loadable(lazy(() => import("../pages/CartPage")));
const Home = Loadable(lazy(() => import("../pages/Home")));
const Login = Loadable(lazy(() => import("../pages/Login")));
const ProductDetails = Loadable(lazy(() => import("../pages/Product")));
const Register = Loadable(lazy(() => import("../pages/Register")));


const Router = [
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      { path: '/', exact: true, element: <Home/> },
      { path: '/product/:id', exact: true, element: <ProductDetails/> },
      { path: '/cart', exact: true, element: <Cart/> },
    ]
  },
  {
    path: '/',
    element: <AuthLayout/>,
    children: [
      { path: '/register', exact: true, element: <Register/> },
      { path: '/login', exact: true, element: <Login/> },
    ]
  }
]

export default Router;