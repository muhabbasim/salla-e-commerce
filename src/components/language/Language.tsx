import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { setDir, setLanguage } from '@/store/customizer/CustomizerSlice';
import { AppState, useDispatch, useSelector } from '@/store/Store';
import { Languages } from '@/data/LanguageData';


const Language = () => {
  
  const dispatch = useDispatch();
  const { i18n } = useTranslation();


  const customizer = useSelector((state: AppState) => state.customizer);
  const currentLang = Languages.find((_lang) => _lang.value === customizer.isLanguage) || Languages[0];
  
  console.log(currentLang)
  const handleChangeLanguage = ( value:string ) => {

    localStorage.setItem('language', JSON.stringify(value))
    dispatch(setLanguage(value))  
    if ( value === 'ar' ) {
      dispatch(setDir('rtl'))
    } else if ( value === 'en' ) {
      dispatch(setDir('ltr'))
    }
  }

  useEffect(() => {
    i18n.changeLanguage(customizer.isLanguage);
  }, [customizer.isLanguage, i18n]);

  return (
    <div className='flex flex-col items-center'>
      <div>
        <select
          value={currentLang.value}
          onChange={(e) => handleChangeLanguage(e.target.value)}
          className="border p-2 rounded"
        >
          {Languages.map((option, index) => (
            <option key={index} value={option.value}>
              {option.flagname}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Language;
