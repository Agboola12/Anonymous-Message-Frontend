import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router';
import BaseUrl from '../../BaseUrl';
import { setuser } from '../Slices/LoginSlice';
import axios from 'axios';

const UserGuard = () => {
    const dispatch = useDispatch();
    const [component, setComponent]= useState(
        <div className='text-center d-flex justify-content-center align-items-center' style={{minHeight:"100vh", top:'50%'}}>
    <div className="spinner-grow text-dark" role="status">
        <span className="sr-only">Loading...</span>
    </div>
</div>)

const navigate = useNavigate()
useEffect(() => {

    if (localStorage.token) {
        axios.get(BaseUrl + "getUser").then(res => {
            if (res.data.status) {
                dispatch(setuser(res.data.data));
                setComponent( 
                    <div style={{ position: "relative" }}>
                        <Outlet/>
                    </div>
                );
            }
        }).catch(err => {
        console.log(err);
        });
    } else {
        navigate("/login");
    }

}, [dispatch, navigate, setComponent]); 

  return component; 
}

export default UserGuard