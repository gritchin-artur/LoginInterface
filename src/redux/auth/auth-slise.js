import { createSlice } from "@reduxjs/toolkit";

import authOperations from "./auth-operations";

const initialState = {
  timestamp: null,
  access_token: null,
  refresh_token: null,
  token_expire: null,
  refresh_token_expire: null,
  isLoggedIn: false,
};

const handleAccessPending = (state, { payload }) => {
  state.isLoggedIn = false;
};

const handleAccessFulfilled = (state, { payload }) => {
  state.timestamp = payload.timestamp;
  state.access_token = payload.access_token;
  state.refresh_token = payload.refresh_token;
  state.token_expire = payload.token_expire;
  state.refresh_token_expire = payload.refresh_token_expire;
  state.isLoggedIn = payload.access_token ? true : false;
};

const handleAccessReject = (state, { payload }) => {
  state.isLoggedIn = false;
};

const handleRegisterLogInPending = (state, { payload }) => {
  state.isLoggedIn = false;
};

const handleRegisterLogInFulfilled = (state, { payload }) => {
  state.timestamp = payload.timestamp;
  state.access_token = payload.access_token;
  state.refresh_token = payload.refresh_token;
  state.token_expire = payload.token_expire;
  state.refresh_token_expire = payload.refresh_token_expire;
  state.isLoggedIn = payload.access_token ? true : false;
};

const handleRegisterLogInReject = (state, { payload }) => {
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(authOperations.accessToken.fulfilled, handleAccessFulfilled)
      .addCase(authOperations.accessToken.rejected, handleAccessReject)
      .addCase(authOperations.accessToken.pending, handleAccessPending)

      .addCase(authOperations.logIn.fulfilled, handleRegisterLogInFulfilled)
      .addCase(authOperations.logIn.rejected, handleRegisterLogInReject)
      .addCase(authOperations.logIn.pending, handleRegisterLogInPending);

    //     .addMatcher(
    //   isAnyOf(
    //     authOperations.register.fulfilled,
    //     authOperations.logIn.fulfilled
    //   ),
    //   handleRegisterLogInFulfilled
    // )
  },
});

export default authSlice.reducer;
