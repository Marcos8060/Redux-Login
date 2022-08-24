import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import message, { setMessage } from "./message";
import authService from "../services/auth.service";

// get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk(
  "api/register",
  async ({ username, email, password }, thunkAPI) => {
    try {
      const response = authService.register(username, email, password);
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

// login
export const login = createAsyncThunk(
  "api/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const data = await authService.login(username, password);
      return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);


// logout
export const logout = createAsyncThunk(
    "api/logout",
    async () =>{
        await authService.logout();
    }
)

// authslice

const initialState= user 
 ? { isLoggedIn: true, user}
 : { isLoggedIn: false, user: null}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers:{
        [register.fulfilled]:(state,action)=>{
            state.isLoggedIn = false;
        },
        [register.rejected]:(state,action)=>{
            state.isLoggedIn = false;
        },
        [login.fulfilled]:(state,action)=>{
            state.isLoggedIn = true;
        },
        [login.rejected]:(state,action)=>{
            state.isLoggedIn = false;
            state.user = null;
        },
        [logout.fulfilled]:(state,action)=>{
            state.isLoggedIn = false;
            state.user = null;
        }
    }
});

export default authSlice.reducer;
