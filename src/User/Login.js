import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.png';
import BaseUrl from '../BaseUrl';
import axios from 'axios';
import {  toast, ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value,
    };
    setIsLoading(true);
    axios
      .post(BaseUrl + 'login', data)
      .then((res) => {
        const result = res.data.message;
        toast.success(result, {
          autoClose: 5000,
        });
        if (res.data.status) {
          localStorage.setItem('token', res.data.token);
          navigate('/user-message');
        }
      })
      .catch((err) => {
        const error = err.response?.data?.message || 'An error occurred';
        toast.error(error, {
          autoClose: 5000,
        });
        console.error(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className='h-screen py-5 w-full bg-gradient-to-r from-secondary to-primary'>
      <div className='w-full sm:w-2/3 md:w-1/1 lg:w-1/3 xl:w-1/3 mx-auto bg-primary text-white rounded-2xl overflow-hidden shadow-lg'>
        <div className='mt-5'>
          <img className='rounded mx-auto w-28' src={logo} alt='logo' />
        </div>
        <div className='px-6 py-4'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center text-white'>
            Login
          </h1>
          <form
            method='post'
            action=''
            encType='multipart/form-data'
            onSubmit={handleSubmit}
          >
            <div className='flex flex-col mt-9'>
              <div className='relative mb-4'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  ref={email}
                  className='w-full border-b border-primary-300 py-1 focus:border-b-2 focus:border-primary-700 transition-colors focus:outline-none peer bg-inherit'
                />
                <label
                  htmlFor='email'
                  className='absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700'
                >
                  Email
                </label>
              </div>
              <div className='relative mt-5'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  required
                  ref={password}
                  className='w-full border-b border-primary-300 py-1 focus:border-b-2 focus:border-primary-700 transition-colors focus:outline-none peer bg-inherit'
                />
                <label
                  htmlFor='password'
                  className='absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700'
                >
                  Password
                </label>
              </div>
            </div>
            <div className='mt-8 text-center'>
              <button
                type='submit'
                disabled={isLoading}
                className='bg-gradient-to-r from-secondary to-primary w-full sm:w-2/3 md:w-1/2 lg:w-3/4 xl:w-1/3 h-14 text-white font-bold py-2 px-4 rounded text-center'
              >
                <b>{isLoading ? 'Logging In...' : 'Login'}</b>
              </button>
              <br />
              <Link
                to='/'
                className='text-lightgrey hover:text-blue-500'
              >
                Don't have an account? Register
              </Link>
              <br />
              <br />
              <small className='text-light'>
                By using this service, you agree to our Privacy Policy, Terms
                of Service and any related policies. (Check Disclaimer)
              </small>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
