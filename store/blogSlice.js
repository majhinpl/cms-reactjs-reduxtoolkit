import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../src/globals/statuses";
import API from "../src/http";
import { data } from "autoprefixer";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [], // Array to hold multiple blogs.
    blog: {}, // object to hold single blogs.
    status: null,
  },
  reducers: {
    setBlogs(state, action) {
      state.blogs = action.payload;
    },
    setBlog(state, action) {
      state.blog = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatus, setBlogs, setBlog } = blogSlice.actions;
export default blogSlice.reducer;

// create operation

export function addBlog(data) {
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

// read operation, All blog.

export function fetchBlog() {
  return async function fetchBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.get("blog");
      if (response.status === 200) {
        const blogs = response.data.data;
        dispatch(setBlogs(blogs));
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

// read operation, single blog.
export function singleBlog(id) {
  return async function singleBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.get(`blog/${id}`);
      if (response.status === 200) {
        const blog = response.data.data;
        dispatch(setBlog(blog));
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

// read operation, edit blog.
export function blogEdit(data, id) {
  return async function blogEditThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.get(`blog/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization ": localStorage.getItem("token"),
        },
      });
      if (response.status === 200) {
        dispatch(setBlog(singleBlog));
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

export function blogDelete(id, token) {
  return async function blogDeleteThunk(dispatch) {
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
