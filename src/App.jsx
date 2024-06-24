import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/blog/home/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import EditBlog from "./pages/blog/edit/EditBlog";
import SinglePage from "./pages/blog/single/SinglePage";
import { Write } from "./pages/blog/write/Write";
import store from "../store/store";
import { Provider } from "react-redux";
import Protected from "./Protected";
import Parent from "./pages/useCallback/Parent";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/blog/edit/:id"
            element={
              <Protected>
                <EditBlog />
              </Protected>
            }
          />
          <Route
            path="/blog/write"
            element={
              <Protected>
                <Write />
              </Protected>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <Protected>
                <SinglePage />
              </Protected>
            }
          />
          <Route path="/useCallback" element={<Parent />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
