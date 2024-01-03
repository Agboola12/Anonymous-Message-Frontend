import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import BaseUrl from '../BaseUrl'
import { useSelector } from 'react-redux';
import axios from 'axios';

const UserMessage = () => {
  // const fullUrl = window.location.href;
  
  const protocol = window.location.protocol;
  // console.log(protocol);
  const host = window.location.host;
  
  // const pathname = window.location.pathname;
  
  // const searchParams = window.location.search;
  
  // const hash = window.location.hash;

  const navigate = useNavigate();
  const { loginUser: user } = useSelector((state) => state.login)
  const [userMessage, setUserMessage] = useState([])

  const Url = () => {
    // return `http://${host}/message/${user._id}`;
    return(`${protocol}//${host}/message/${user._id}`);
  };
  
  useEffect(()=>{
    getMessage();
  },[])

  const getMessage =()=>{
    axios.get(BaseUrl + `getMessage/${user._id}`)
    .then(res => {
      if (res.data.status) {
        console.log(res.data.data);
        setUserMessage(res.data.data)
                }
            })
            .catch(err => {
                console.log(err);
            })
  }

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true })
  }
  return (
    <div className='h-screen py-5 w-full bg-gradient-to-r from-secondary to-primary'>
       
    <div className='w-full h-[90vh] overflow-y-scroll sm:w-2/3 md:w-1/1 lg:w-1/3  xl:w-1/3 mx-auto bg-primary text-white rounded-2xl overflow-hidden shadow-lg'>
      
      <div className='px-6 py-4 '>
          <h1 className='text-2xl  sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center text-white '>
          My Answers &nbsp; 
          {user?.username}
          </h1>
      <p className=' text-center'> Scroll 👇 down to check out the messages that you have received</p>
        {userMessage.map((post) => (
      <div class="border-t border-r border-b border-l w-[85%] mt-[5em] p-6 mx-auto border-secondary rounded-sm">
          <p>
            <p>{post.message}</p>
          </p>
        </div>
               ))} 
        <div className='mt-8 text-center'>
        <button  onClick={logOut} className='bg-gradient-to-r  from-secondary to-primary w-full sm:w-2/3 md:w-1/2 lg:w-3/4 xl:w-1/3 h-16 text-white font-bold py-2 px-4 rounded text-center' to="/login">
                    LogOut
        </button>
        </div>
      <p className=' text-1xl text-center mt-9 font-mono'> Copy the link below and share it to your friends</p>
      <p className=' text-1xl text-center mt-9 font-mono overflow-x-scroll'>  {Url()}</p>
             
         </div> 
    </div>
  </div>
  )
}

export default UserMessage;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import BaseUrl from '../BaseUrl';
// import { useSelector } from 'react-redux';
// import axios from 'axios';

// const UserMessage = () => {
//   const navigate = useNavigate();
//   const { loginUser: user } = useSelector((state) => state.login);
//   const [userMessage, setUserMessage] = useState([]);

//   const Url = () => {
//     return `http://localhost:3000/message/${user._id}`;
//   };

//   useEffect(() => {
//     const getMessage = () => {
//       axios
//         .get(BaseUrl + `getMessage/${user._id}`)
//         .then((res) => {
//           if (res.data.status) {
//             console.log(res.data.data);
//             setUserMessage(res.data.data);
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };

//     getMessage(); 
    
//   }, [user._id]);

//   const logOut = () => {
//     localStorage.removeItem('token');
//     navigate('/login', { replace: true });
//   };

//   return (
//     <div className='h-screen py-5 w-full bg-gradient-to-r from-secondary to-primary'>
//       <div className='w-full h-[90vh] overflow-y-scroll sm:w-2/3 md:w-1/1 lg:w-1/3 xl:w-1/3 mx-auto bg-primary text-white rounded-2xl overflow-hidden shadow-lg'>
//         <div className='px-6 py-4 '>
//           <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center text-white '>
//             My Answers &nbsp; {user?.username}
//           </h1>
//           <p className=' text-center'> Scroll 👇 down to check out the messages that you have received</p>
//           {userMessage.map((post) => (
//             <div className="border-t border-r border-b border-l w-[85%] mt-[5em] p-6 mx-auto border-secondary rounded-sm" key={post._id}>
//               <p>{post.message}</p>
//             </div>
//           ))}
//           <div className='mt-8 text-center'>
//             <button
//               onClick={logOut}
//               className='bg-gradient-to-r from-secondary to-primary w-full sm:w-2/3 md:w-1/2 lg:w-3/4 xl:w-1/3 h-16 text-white font-bold py-2 px-4 rounded text-center'
//               to='/login'
//             >
//               LogOut
//             </button>
//           </div>
//           <p className=' text-1xl text-center mt-9 font-mono'> Copy the link below and share it to your friends</p>
//           <p className=' text-1xl text-center mt-9 font-mono overflow-x-scroll'> {Url()}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserMessage;
