import { useRoutes } from 'react-router-dom'
import Router from './router/Router';

export default function App() {
  
  const routing = useRoutes(Router);

  return (
    <div>
      {routing}
    </div>
  )
}
