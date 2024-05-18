import "./homePage.css";
import Layout from "../../../components/layout/Layout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog, setBlogs } from "../../../../store/blogSlice";
import STATUSES from "../../../globals/statuses";
import Card from "../conponents/card/Card";
import { Link } from "react-router-dom";

const Home = () => {
  const { status } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  if (status === STATUSES.SUCCESS) {
    dispatch(setBlogs(blogs))
  }

  return (
    <Layout>
      <div className="home">
        <div className="posts max-w-screen-lg mx-auto">
          {status === STATUSES.LOADING && <p>Loading ...</p>}
          {status === STATUSES.SUCCESS &&
            blogs.length > 0 &&
            blogs.map((post) => {
              <div className="post" key={post.id}>
                <div className="img">
                  <img src={post.imageUrl} alt="" />
                </div>
                <div className="content">
                  <p className="category">{post.category}</p>
                  <Link className="link" to={`/post/${post.id}`}>
                    <h1 className="title">{post.title}</h1>
                  </Link>
                  <p>{post.description}</p>
                  <Link className="link" to={`/post/${post.id}`}>
                    <button className="btn">Read More</button>
                  </Link>
                </div>
              </div>;
            })}

          {status === STATUSES.ERROR && <p>Failed to load blogs</p>}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
