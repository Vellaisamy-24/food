import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from './App';

const Login = () => {
  const { setUserName, setUserMail, setUserPassword } = useContext(LoginContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.password) {
      setUserName(formData.fullName);
      setUserMail(formData.email);
      setUserPassword(formData.password);

  
      navigate('/home');
    } else {
      setError('Please provide your full name, email, and password.');
    }
  };

  return (
    <>
      <div className=' bg-blue-400 sm1:text-[20px] sm:text-[30px] 2xl:p-[15px] 2xl:w-[600px] h-auto mx-auto my-auto mt-[100px] border border-black border-[1px] shadow-lg p-[10px] w-[300px]'>
        <h1 className='lg:text-[50px] text-[30px] text-center font-semibold font-ibm-plex-sans'>Login</h1>
        <form onSubmit={handleSubmit} method='post'>
          <div className='my-[15px]'>
            <div className='my-[10px] lg:mb-[15px]'>
              <label className='lg:text-[30px] text-[20px] font-montserrat'>Full Name</label>
            </div>
            <div>
              <input className='lg:h-[40px]  text-red-800 rounded-[5px] placeholder-text-sm' name='fullName' type='text' required    placeholder='fullname..'  onChange={handleChange}  />
            </div>
          </div>
          <div className='my-[15px]'>
            <div className='my-[10px]'>
              <label className='lg:text-[30px]  font-montserrat text-[20px] '>Email</label>
            </div>
            <div>
              <input
                className='lg:h-[40px] text-red-800 rounded-[5px] placeholder-text-sm ' type='email'     name='email' required    placeholder='email..'    onChange={handleChange}
        
              />
            </div>
          </div>
          <div className='my-[15px]'>
            <div className='my-[10px]'>
              <label className='lg:text-[30px]  font-montserrat text-[20px] '>Password</label>
            </div>
            <div>
              <input
                className='lg:h-[40px] rounded-[5px] text-red-900 placeholder-text-[5px] placeholder-text-sm'   type='password'  name='password'   required  placeholder='password..' onChange={handleChange}  />
            </div>
          </div>
          <div className='my-[15px] text-center'>
            <button className=' text-blue-100 font-bold not-italic  hover:text-white hover:bg-green-500 2xl:w-[150px] text-[20px] text-center border border-black border-[2px] p-[10px] mt-[5px] shadow-md rounded-[6px] text-[20px] transition-transform transform hover:scale-105 hover:shadow-lg' type='submit'>
            Submit
            </button>
          </div>
        </form>
        {error && <h1 className='text-red-500 text-[20px]' >{error}</h1>}
      </div>
    </>
  );
};

export default Login;
