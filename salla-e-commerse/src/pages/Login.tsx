import React, { useContext, useState } from 'react';
import { FormEvent } from 'react';
import { validate, ValidationError, ValidationRules } from '../utils/inputValidation';
import Loader from '../components/Loader';
import { AuthContext } from '../context/authContext';
import { AxiosError } from 'axios';

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
            <h2 className="text-lg">تسجيل الدخول</h2>
            <span className="text-xs text-gray-500">قم بتسجيل الدخول لمتابعة التسوق</span>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <div className="mb-4">
              <label className="block mb-2 text-md" htmlFor="email">البريد الالكتروني</label>
              <input type="email" name="email" id="email" value={inputValues.email} onChange={handleInputChange} autoComplete="true" className="w-full p-2 bg-white rounded-md border text-md" placeholder="اسم المستخدم.." />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-md" htmlFor="password">كلمة المرور</label>
              <input type="password" name="password" id="password" value={inputValues.password} onChange={handleInputChange} autoComplete="true" className="w-full p-2 bg-white rounded-md border text-md" placeholder="كلمة المرور.." />
              {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            </div>

            <div className=' w-full flex items-center justify-center'>
              {loginError && <p style={{ color: "red", paddingBottom: '10px' }}>{loginError}</p>}
            </div>

            <div className="flex gap-4">
              <button type="submit" className="flex justify-center items-center gap-2 w-full bg-primary text-white flex-1 p-2 rounded-md">
                {isSubmitting && <Loader/>}
                {isSubmitting ? "جاري الدخول.." : "دخول" }  
              </button>
              <a href='/register' onClick={() => {}} className="w-fit text-primary underline p-2 text-md rounded-md">التسجيل</a>
              <button type="button" onClick={() => {}} className="w-fit text-primary underline p-2 text-md rounded-md">نسيت كلمة المرور؟</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
