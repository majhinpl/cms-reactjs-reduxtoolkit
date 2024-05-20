import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../src/globals/statuses";
import API from "../src/http";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    authToken: null,
    status: null,
    isAuthenticated: false,
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setLogin(state, action) {
      state.authToken = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload);
    },
    setLogOut(state) {
      state.isAuthenticated = false;
      state.authToken = null;
      localStorage.removeItem("token");
    },
    loadToken(state) {
      const authToken = localStorage.getItem("token");
      if (authToken) {
        state.isAuthenticated = true;
        state.authToken = authToken;
      }
    },
  },
});

export const { setStatus, setUser, setToken, setLogin, setLogOut, loadToken } =
  authSlice.actions;
export default authSlice.reducer;

export function register(data) {
  return async function registerThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.post(`register`, data);
      if (response.status === 201) {
        dispatch(setUser(data));
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

export function login(data) {
  return async function loginThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.post(`login`, data);
      if (response.status === 200 && response.data.token) {
        dispatch(setLogin(response.data.token));
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
