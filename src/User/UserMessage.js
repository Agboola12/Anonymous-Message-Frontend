import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import BaseUrl from '../BaseUrl'
import { useSelector } from 'react-redux';
import axios from 'axios';

const UserMessage = () => {
  const { loginUser: user } = useSelector((state) => state.login)
  const [userMessage, setUserMessage] = useState({})
  const Url = () => {
    return `${BaseUrl}message/${user._id}`;
  };
  

  useEffect(()=>{
    getMessage();
  },[])

  const getMessage =()=>{
    axios.get(BaseUrl + "getMessage")
            .then(res => {
                if (res.data.status) {
                    setUserMessage(res.data.data)
                }
            })
            .catch(err => {
                console.log(err);
            })

  }
  return (
    <div className='h-screen py-5 w-full bg-gradient-to-r from-secondary to-primary'>
    <div className='w-full h-[90vh] sm:w-2/3 md:w-1/1 lg:w-1/3 xl:w-1/3 mx-auto bg-primary text-white rounded-2xl overflow-hidden shadow-lg'>
      
      <div className='px-6 py-4 '>
          <h1 className='text-2xl  sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center text-white '>
          My Answers &nbsp; {user?.username}
          </h1>
      <p className=' text-center'> Scroll 👇 down to check out the messages that you have received</p>
      <div class="border-t border-r border-b border-l w-[85%] mt-[5em] h-[20vh] mx-auto border-secondary rounded-sm">
        <p>{userMessage.message}</p>
        </div>
        <div className='mt-8 text-center'>
        <Link className='bg-gradient-to-r  from-secondary to-primary w-full sm:w-2/3 md:w-1/2 lg:w-3/4 xl:w-1/3 h-16 text-white font-bold py-2 px-4 rounded text-center'>
                    Go Back Home
        </Link>
        </div>
      <p className=' text-1xl text-center mt-9 font-mono'> Copy the link below and share it to your friends</p>
      <p className=' text-1xl text-center mt-9 font-mono overflow-x-scroll'>  {Url()}</p>
             
         </div> 
    </div>
  </div>
  )
}

export default UserMessage