import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./User/Slices/LoginSlice";


const store = configureStore({
    reducer :{
        login: loginReducer,
    }
})

export default store