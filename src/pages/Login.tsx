import React, { useContext, useState } from 'react';
import { FormEvent } from 'react';
import { validate, ValidationError, ValidationRules } from '../utils/inputValidation';
import { AuthContext } from '../context/authContext';
import { AxiosError } from 'axios';
import Title from '../components/Title';
import InputField from '../components/InputField';
import ErrorMsg from '../components/ErrorMsg';
import Lable from '@/components/Label';
import ButtonComponent from '@/components/buttons/ButtonComponent';
import LinkComponent from '../components/buttons/LinkComponent';


const Login: React.FC = () => {

  const { login, loginError } = useContext(AuthContext);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<ValidationError>({});
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  // input values chanege function & error messages validation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    const { id, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));

    // Clear error when user types
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  // validation roles
  const validationRules: { [key: string]: ValidationRules } = {
    email: { required: true, minLength: 5 },
    password: { required: true },
  };


  // function handleSubmit(event: FormEvent<HTMLFormElement>): void {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      
      const validationErrors = validate(inputValues, validationRules);
      
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);

      } else {
        setIsSubmitting(true);
        await login(inputValues)
        setIsSubmitting(false);
      }
      
    } catch (error) {
      if (error instanceof AxiosError) {
        // setApiError(error.response?.data || error.response?.data.error)
        console.log(error)
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="w-full main flex-auto">
      <div className="container">
        <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl sm:max-w-[700px] mx-auto">
          <div className="flex flex-col text-center items-center justify-center mb-6">
            <Title title="Login" className='text-lg'/>
            <Title title="Login to continu shpping" className='text-md text-gray-500'/>
  
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <Lable title='Email' className="block mb-2 text-md"/>
            <InputField
              type="email"
              name="email"
              id="email"
              className='w-full p-2 bg-white rounded-md border text-md'
              value={inputValues.email}
              onChange={handleInputChange}
              placeholder="email"
            />
            <ErrorMsg message={errors.email} className='w-full flex p-2 items-center justify-center'/>


            <Lable title='Password' className="block mb-2 text-md"/>
            <InputField
              type="password"
              name="password"
              id="password"
              className='w-full p-2 bg-white rounded-md border text-md'
              value={inputValues.password}
              onChange={handleInputChange}
              placeholder="assword"
            />
            <ErrorMsg message={errors.password} className='w-full flex p-2 items-center justify-center'/>

            <ErrorMsg message={loginError}  className='w-full flex p-2 items-center justify-center'/>
            <div className="flex gap-4">
              <ButtonComponent 
                type="submit" 
                className="flex justify-center items-center gap-2 w-full bg-primary text-white flex-1 p-2 rounded-md" 
                isSubmitting={isSubmitting} 
                title="Login"
              />
              <LinkComponent title="don't have an account" href='/register'/>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
