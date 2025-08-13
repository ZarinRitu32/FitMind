import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as auth from "../services/authService";

const saved = JSON.parse(localStorage.getItem("fitmind_auth") || "null");

export const login = createAsyncThunk("auth/login", auth.login);
export const register = createAsyncThunk("auth/register", auth.register);
export const fetchMe = createAsyncThunk("auth/me", auth.me);

const slice = createSlice({
  name: "auth",
  initialState: saved || {
    token: null,
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {
    logout(state) {
      state.token = null;
      state.user = null;
      localStorage.removeItem("fitmind_auth");
    },
  },
  extraReducers: (b) => {
    b.addCase(login.fulfilled, (s, a) => {
      s.token = a.payload.token;
      s.user = a.payload.user;
      s.error = null;
      localStorage.setItem(
        "fitmind_auth",
        JSON.stringify({ token: s.token, user: s.user })
      );
    })
      .addCase(register.fulfilled, (s, a) => {
        s.token = a.payload.token;
        s.user = a.payload.user;
        s.error = null;
        localStorage.setItem(
          "fitmind_auth",
          JSON.stringify({ token: s.token, user: s.user })
        );
      })
      .addCase(fetchMe.fulfilled, (s, a) => {
        s.user = a.payload;
      })
      .addMatcher(
        (a) => a.type.startsWith("auth/") && a.type.endsWith("/pending"),
        (s) => {
          s.status = "loading";
          s.error = null;
        }
      )
      .addMatcher(
        (a) => a.type.startsWith("auth/") && a.type.endsWith("/rejected"),
        (s, a) => {
          s.status = "failed";
          s.error = a.error?.message || "Auth error";
        }
      );
  },
});

export const { logout } = slice.actions;
export default slice.reducer;
