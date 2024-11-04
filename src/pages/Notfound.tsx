import React from 'react';
import ErrorImg from '@/assets/images/errorimg.svg'; // Update with the correct path
import ClickButton from '../components/buttons/ClickButton';

const NotFoundPage: React.FC = () => {
  const handleRoutes = () => {
    window.location.href = '/'; // Redirect to home
  };

  return (
    <div style={{ height: '100vh'}} className="flex flex-col items-center justify-center text-center">
      <div className="w-full h-screen max-w-md px-4">
        <div className="flex items-center justify-center mb-6">
          <img src={ErrorImg} alt="404" className="max-w-full h-auto" loading="lazy" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Opps!!!</h1>
        <h4 className="text-xl text-gray-600 mb-4">
          الصفحة التي تبحث عنها غير موجودة
        </h4>
        <ClickButton buttonFunc={handleRoutes} title='العودة إلى الرئيسية'/>
      </div>
    </div>
  );
};

export default NotFoundPage;
