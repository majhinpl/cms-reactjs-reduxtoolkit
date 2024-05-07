import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/blog/home/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import EditBlog from "./pages/blog/edit/EditBlog";
import SinglePage from "./pages/blog/single/SinglePage";
import { Write } from "./pages/blog/write/Write";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/edit" element={<EditBlog />} />
        <Route path="/write" element={<Write />} />
        <Route path="/post/:id" element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
