import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { token } from "../../api/axiosSettings";
import toast from "react-hot-toast";

const accessToken = createAsyncThunk(
  "/v1/auth/access-token",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/v1/auth/access-token", credentials);
      token.set(data.access_token);
      toast.success(`Enter password`);
      return data;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return toast.error("Email or password invalid");
      }
      if (error.response && error.response.status === 409) {
        return toast.error("Such email already exists");
      }
      if (error.response && error.response.status === 404) {
        return toast.error("Service not found");
      }
      if (error.response && error.response.status === 500) {
        return toast.error("Server error");
      }
    }
  }
);

const logIn = createAsyncThunk(
  "/v1/auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/v1/auth/login", credentials);
      token.set(data.access_token);
      toast.success(`Hello User`);
      return data;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return toast.error("Email or password invalid");
      }
      if (error.response && error.response.status === 401) {
        return toast.error("You are not Unauthorized");
      }
      if (error.response && error.response.status === 404) {
        return toast.error("Service not found");
      }
      if (error.response && error.response.status === 500) {
        return toast.error("Server error");
      }
    }
  }
);

const logOut = createAsyncThunk("auth/signout", async (_, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/signout");
    token.unset();
    toast.success(`Buy`);
    return data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return toast.error("Service not found");
    }
    if (error.response && error.response.status === 500) {
      return toast.error("Server error");
    }
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue(null);
    }
    try {
      token.set(persistedToken);
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(null);
    }
  }
);

const authOperations = {
  accessToken,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default authOperations;
