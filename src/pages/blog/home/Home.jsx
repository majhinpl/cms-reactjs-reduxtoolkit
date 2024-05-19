import "./homePage.css";
import Layout from "../../../components/layout/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../../../../store/blogSlice";
import STATUSES from "../../../globals/statuses";
import { Link } from "react-router-dom";

const Home = () => {
  const { status, blogs } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlog());
  }, []);


  return (
    <Layout>
      <div className="home">
        <div className="posts max-w-screen-lg mx-auto">
          {status === STATUSES.LOADING && <p>Loading ...</p>}
          {blogs.length > 0 &&
            blogs.map((post) => {
              return (
                <div className="post" key={post._id}>
                  <div className="img">
                    <img src={post.imageUrl} alt="" />
                  </div>
                  <div className="content">
                    <p className="category">{post.category}</p>
                    <Link className="link" to={`/blog/${post._id}`}>
                      <h1 className="title">{post.title}</h1>
                    </Link>
                    {post.description}
                    <Link className="link" to={`/blog/${post._id}`}>
                      <button className="btn">Read More</button>
                    </Link>
                  </div>
                </div>
              );
            })}

          {status === STATUSES.ERROR && <p>Failed to load blogs</p>}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
