import React, { useContext, useState } from 'react';
import { FormEvent } from 'react';
import { validate, ValidationError, ValidationRules } from '../utils/inputValidation';
import { AuthContext } from '../context/authContext';
import { AxiosError } from 'axios';
import Title from '../components/Title';
import InputField from '../components/InputField';
import ErrorMsg from '../components/ErrorMsg';
import SubmitButton from '../components/buttons/LoadingButton';
import ForPasaButton from '../components/buttons/ForPasaButton';


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
    email: { required: true, minLength: 3 },
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
            <Title title='تسجيل الدخول' className='text-lg'/>
            <Title title='قم بتسجيل الدخول لمتابعة التسوق' className='text-md text-gray-500'/>
  
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <InputField
              label="البريد الالكتروني"
              type="email"
              name="email"
              id="email"
              value={inputValues.email}
              onChange={handleInputChange}
              placeholder="البريد الالكتروني"
              error={errors.email}
            />

            <InputField
              label="كلمة المرور"
              type="password"
              name="password"
              id="password"
              value={inputValues.password}
              onChange={handleInputChange}
              placeholder="كلمة المرور.."
              error={errors.password}
            />
            <ErrorMsg message={loginError}/>
            <div className="flex gap-4">
              <SubmitButton isSubmitting={isSubmitting} title='الدخول'/>
              <ForPasaButton/>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
