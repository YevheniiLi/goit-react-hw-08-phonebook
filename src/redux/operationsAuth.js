import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

export const addNewUser = createAsyncThunk(
    "user/addUser",
    async (user, thunkAPI) => {
      try {
        const response = await axios.post('/users/signup', user);
        setAuthHeader(response.data.token);
        console.log(response.data);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const logInUser = createAsyncThunk(
    "user/login",
    async (user, thunkAPI) => {
      try {
        const response = await axios.post('/users/login', user);
        setAuthHeader(response.data.token);
        console.log(response.data);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const logOutUser = createAsyncThunk(
    "user/logOut",
    async (_, thunkAPI) => {
      try {
        const response = await axios.post('/users/logout');
        clearAuthHeader();
        console.log(response.data);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const refreshUser = createAsyncThunk(
    "user/refresh",
    async (_, thunkAPI) => {
      const token = thunkAPI.getState().contacts.token;
      
      if (!token) {
        return thunkAPI.rejectWithValue('No valid token');
      }

      setAuthHeader(token);

      try {
        const response = await axios.get('/users/current');
        console.log(response.data);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );