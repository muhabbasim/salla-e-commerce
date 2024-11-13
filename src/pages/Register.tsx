import React, { FormEvent, useEffect, useState } from 'react';
import { validate, ValidationError, ValidationRules } from '../utils/inputValidation';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import api from '../context/apiRequest';
import Title from '../components/Title';
import InputField from '../components/InputField';
import ErrorMsg from '../components/ErrorMsg';
import Lable from '@/components/Label';
import ButtonComponent from '@/components/buttons/ButtonComponent';
import LinkComponent from '@/components/buttons/LinkComponent';

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
        setPasswordError("Passwords does not match");
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
            <Title title="Register" className='text-lg'/>
            <Title title="Register to continu shpping" className='text-md text-gray-500'/>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <Lable title='Username' className="block mb-2 text-md"/>
            <InputField
              type="username"
              name="username"
              id="username"
              className='w-full p-2 bg-white rounded-md border text-md'
              value={inputValues.username}
              onChange={handleInputChange}
              placeholder="username"
            />
            <ErrorMsg message={inputErrors.username} className='w-full flex p-1 items-center justify-center'/>
            
            <Lable title='Email' className="block mb-2 text-md"/>
            <InputField
              type="email"
              name="email"
              id="email"
              className='w-full p-2 bg-white rounded-md border text-md'
              value={inputValues.email}
              onChange={handleInputChange}
              placeholder="example@example.com"
            />
            <ErrorMsg message={inputErrors.email} className='w-full flex p-1 items-center justify-center'/>

            <Lable title='Password' className="block mb-2 text-md"/>
            <InputField
              type="password"
              name="password"
              id="password"
              className='w-full p-2 bg-white rounded-md border text-md'
              value={inputValues.password}
              onChange={handleInputChange}
              placeholder="****"
            />
            <ErrorMsg message={inputErrors.password} className='w-full flex p-1 items-center justify-center'/>

            <Lable title='Password confirmation' className="block mb-2 text-md"/>
            <InputField
              type="password"
              name="validate_password" 
              id="validate_password"
              className='w-full p-2 bg-white rounded-md border text-md'
              value={inputValues.validate_password}
              onChange={handleInputChange}
              placeholder="****"
            />
            <ErrorMsg message={inputErrors.validate_password} className='w-full flex p-1 items-center justify-center'/>

         
            <ErrorMsg message={passwordError}  className='w-full flex p-2 items-center justify-center'/>
            <ErrorMsg message={apiError}  className='w-full flex p-2 items-center justify-center'/>

            <div className="flex gap-4">
              <ButtonComponent 
                type="submit" 
                className="flex justify-center items-center gap-2 w-full bg-primary text-white flex-1 p-2 rounded-md" 
                isSubmitting={isSubmitting} 
                title="Register"
              />
              <LinkComponent title="Already have an account?" href='/login'/>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
