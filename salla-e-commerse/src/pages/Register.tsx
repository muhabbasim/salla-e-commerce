import React, { FormEvent, useEffect, useState } from 'react';
import { validate, ValidationError, ValidationRules } from '../utils/inputValidation';
import { AxiosError } from 'axios';
import Loader from '../components/Loader';
import api from '@/context/apiRequest';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Register: React.FC = () => {
  
  const route = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState('');
  const [apiError, setApiError] = useState('');
  const [inputErrors, setInputErrors] = useState<ValidationError>({});
  const [inputValues, setInputValues] = useState({
    username: "",
    email: "",
    password: "",
    validate_password: "",
  });


  // input values chanege function & error messages validation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    const { id, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));

    // Clear error when user types
    setInputErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  // validation roles
  const validationRules: { [key: string]: ValidationRules } = {
    username: { required: true, minLength: 3 },
    email: { required: true },
    password: { required: true },
    validate_password: { required: true },
  };



  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setApiError(''); 
    setPasswordError(''); 

    try {
      setIsSubmitting(true);
      
      const { password, validate_password } = inputValues
      if (validate_password !== password) {
        setPasswordError('كلمة المرور غير متطابقة')
        return;
      }
      
      const validationErrors = validate(inputValues, validationRules);
      if (Object.keys(validationErrors).length > 0) {
        setInputErrors(validationErrors);
        return;
      } 

      const res = await api().post('https://limitless-lake-55070.herokuapp.com/user/signup', inputValues)  
      toast.success('تم إنشاء الحساب بنجاح! قم بتسجيل الدخول')
      if (res.status === 200) {
        route('/login')
      }

    } catch (error) {
      if (error instanceof AxiosError) {
        setApiError(error.response?.data)
      }
      console.log(error)
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setApiError('')
      setPasswordError('')
    }, 6000);
  }, [apiError]) 

  return (
    <main className="w-full main flex-auto">
      <div className="container">
        <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl sm:max-w-[700px] mx-auto">
          <div className="flex flex-col text-center items-center justify-center mb-6">
            <h2 className="text-lg">إنشاء حساب جديد</h2>
            <span className="text-xs text-gray-500">قم بإنشاء حساب جديد للتمتع بالتسوق</span>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <div className="mb-4">
              <label className="block mb-2 text-md" htmlFor="username">اسم المستخدم</label>
              <input type="text" name="username" id="username" value={inputValues.username} onChange={handleInputChange} className="w-full p-2 bg-white rounded-md border text-md" placeholder="اسم المستخدم.." />
              {inputErrors.username && <div className='flex items-center justify-center'><p style={{ color: "red" }}>{inputErrors.username}</p></div>}
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-md" htmlFor="email">البريد الإلكتروني</label>
              <input type="email" name="email" id="email" value={inputValues.email} onChange={handleInputChange} className="w-full p-2 bg-white rounded-md border text-md" placeholder="البريد الإلكتروني.." />
              {inputErrors.email && <div className='flex items-center justify-center'><p style={{ color: "red" }}>{inputErrors.email}</p></div>}
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-md" htmlFor="password">كلمة المرور</label>
              <input type="password" name="password" id="password" value={inputValues.password} onChange={handleInputChange} className="w-full p-2 bg-white rounded-md border text-md" placeholder="كلمة المرور.." />
              {inputErrors.password && <div className='flex items-center justify-center'><p style={{ color: "red" }}>{inputErrors.password}</p></div>}
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-md" htmlFor="validate_password">أكد كلمة المرور</label>
              <input type="password" name="validate_password" id="validate_password" value={inputValues.validate_password} onChange={handleInputChange} className="w-full p-2 bg-white rounded-md border text-md" placeholder="كلمة المرور.." />
              {inputErrors.validate_password && <div className='flex items-center justify-center'><p style={{ color: "red" }}>{inputErrors.validate_password}</p></div>}
            </div>
            {passwordError && <div className='flex items-center justify-center'><p style={{ color: "red", paddingBottom: '10px' }}>{passwordError}</p></div>}
            <div className=' w-full flex items-center justify-center'>
              {apiError && <div className='flex items-center justify-center'><p style={{ color: "red", paddingBottom: '10px' }}>{apiError}</p></div>}
            </div>

            <div className="flex gap-4">
              <button type="submit" className="flex justify-center items-center gap-2 w-full bg-primary text-white p-2 rounded-md">
              {isSubmitting && <Loader/>}
              {isSubmitting ? "جاري التسجيل.." : "تسجيل" }  
              </button>
              <a href='/login' className="text-primary underline p-2 text-md rounded-md">ليك حساب؟</a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
