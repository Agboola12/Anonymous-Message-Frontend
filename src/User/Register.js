import React, { useState } from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import BaseUrl from '../BaseUrl'
import { useNavigate } from 'react-router-dom';
import {  toast, ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  })

  const inputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser({ ...user, [name]: value })

  }

  const handleSubmit = () => {
    setIsLoading(true);
    axios.post(BaseUrl + "register", user)
      .then((res) => {
        const result = res.data.message;
        toast.success(result, {
          autoClose: 3000,
        });
        if (res.data.status) {
          console.log(res)
          navigate('/login');
        }
      })
      .catch((err) => {
        const error = err.response?.data?.message || 'An error occurred';
        toast.error(error, {
          autoClose: 3000,
        });
        console.error(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      })

  }

  return (
    <div className='h-screen py-5 w-full bg-gradient-to-r from-secondary to-primary'>
      <div className='w-full sm:w-2/3 md:w-1/1 lg:w-1/3 xl:w-1/3 mx-auto bg-primary text-white rounded-2xl overflow-hidden shadow-lg'>
        <div className='mt-5'>
          <img className='rounded mx-auto w-28' src={logo} alt='logo' />
        </div>
        <div className='px-6 py-4'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center text-white'>
            Register
          </h1>
          <div
          >
            <div className='flex flex-col mt-9'>
              <div className='relative mb-4'>
                <input
                  id='username'
                  name='username'
                  type='username'
                  required
                  value={user.username} onChange={inputChange}
                  className='w-full border-b border-primary-300 py-1 focus:border-b-2 focus:border-primary-700 transition-colors focus:outline-none peer bg-inherit'
                />
                <label
                  htmlFor='username'
                  className='absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700'
                >
                  Username
                </label>
              </div>
              <div className='relative mb-4 mt-5'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  value={user.email} onChange={inputChange}
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
                  value={user.password} onChange={inputChange}
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
                disabled={isLoading}
              onClick={handleSubmit}
                className='bg-gradient-to-r from-secondary to-primary w-full sm:w-2/3 md:w-1/2 lg:w-3/4 xl:w-1/3 h-14 text-white font-bold py-2 px-4 rounded text-center'
              >
                <b>{isLoading ? 'Signing Up...' : 'Register'}</b>
              </button>
              <br />
              <Link
                to='/login'
                className='text-lightgrey hover:text-blue-500'
              >
                Already have an account? Login
              </Link>
              <br />
              <br />
              <small className='text-light'>
                By using this service, you agree to our Privacy Policy, Terms
                of Service and any related policies. (Check Disclaimer)
              </small>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Register