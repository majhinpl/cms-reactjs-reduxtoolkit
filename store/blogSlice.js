import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../src/globals/statuses";
import API from "../src/http";
import { setToken } from "./authSlice";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    user: null,
    status: null,
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    setBlog(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setStatus, setBlog } = blogSlice.actions;
export default blogSlice.reducer;

// create operation

export function addBlog(data) {
  console.log(data);
  return async function addBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.post("blog", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

// read operation

export function fetchBlog() {
  return async function fetchBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.get("blog");
      if (response.status === 200 && response.data.token) {
        dispatch(setBlog(response.data.blog));
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

// delete operation

export function deleteBlog(id, token) {
  return async function deleteBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.delete(`blog/${id}`, {
        headers: {
          token: token,
        },
      });
      if (response.status === 200) {
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
