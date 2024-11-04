import React, { FormEvent, useEffect, useState } from 'react';
import { validate, ValidationError, ValidationRules } from '../utils/inputValidation';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import api from '../context/apiRequest';
import Title from '../components/Title';
import InputField from '../components/InputField';
import ErrorMsg from '../components/ErrorMsg';
import SubmitButton from '../components/buttons/LoadingButton';

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
            <Title title='إنشاء حساب جديد' className='text-lg'/>
            <Title title="قم بإنشاء حساب جديد للتمتع بالتسوق" className='text-md text-gray-500'/>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <InputField
              label="اسم المستخدم"
              type="username"
              name="username"
              id="username"
              value={inputValues.username}
              onChange={handleInputChange}
              placeholder="اسم المستخدم"
              error={inputErrors.username}
            />
            <InputField
              label="البريد الالكتروني"
              type="email"
              name="email"
              id="email"
              value={inputValues.email}
              onChange={handleInputChange}
              placeholder="البريد الالكتروني"
              error={inputErrors.email}
            />
            <InputField
              label="كلمة المرور"
              type="password"
              name="password"
              id="password"
              value={inputValues.password}
              onChange={handleInputChange}
              placeholder="كلمة المرور"
              error={inputErrors.password}
            />
            <InputField
              label="تأكيد كلمة المرور"
              type="password"
              name="validate_password"
              id="validate_password"
              value={inputValues.validate_password}
              onChange={handleInputChange}
              placeholder="تأكيد كلمة المرور"
              error={inputErrors.validate_password}
            />
         
            <ErrorMsg message={passwordError}/>
            <ErrorMsg message={apiError}/>

            <div className="flex gap-4">
              <SubmitButton isSubmitting={isSubmitting} title='التسجيل'/>
              <a href='/login' className="text-primary underline p-2 text-md rounded-md">ليك حساب؟</a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
