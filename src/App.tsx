import { useRoutes } from 'react-router-dom'
import Router from './router/Router';
import { AppState, dispatch, useSelector } from './store/Store';
import { setDir } from './store/customizer/CustomizerSlice';
import { useEffect } from 'react';

export default function App() {
  
  const routing = useRoutes(Router);
  const customizer = useSelector((state: AppState) => state.customizer);


  const languageAdjustment = () => {
    if (customizer.isLanguage === 'en') {
      dispatch(setDir('ltr'))
    } else if (customizer.isLanguage === 'ar'){
      dispatch(setDir('rtl'))
    }
  } 
  
  useEffect(() => {
    languageAdjustment()
  },[])

  return (
    <div dir={customizer.activeDir}>
      {routing}
    </div>
  )
}
