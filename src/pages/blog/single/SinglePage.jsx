import "./singlePage.css";
import Layout from "../../../components/layout/Layout";
import Sidebar from "../../../components/sidebar/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { singleBlog, blogDelete } from "../../../../store/blogSlice";
import STATUSES from "../../../globals/statuses";

const SinglePage = () => {
  const { status, blog } = useSelector((state) => state.blog);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(singleBlog(id));
  }, []);

  // delete operation
  const blogDeleteFn = () => {
    dispatch(blogDelete(id));

    if (status === STATUSES.SUCCESS) {
      navigate("/");
    }
  };

  return (
    <Layout>
      <div className="single max-w-screen-lg mx-auto">
        <div className="content">
          <img src={blog.imageUrl} alt="" />
          <div className="user">
            <img
              src="https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="info">
              <span>
                <strong>{blog.userId.username}</strong>
              </span>
              <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
              <Link to={`/blog/edit/${id}`}>
                <img src="/edit.png" alt="" />
              </Link>
              <img src="/delete.png" alt="" onClick={blogDeleteFn} />
            </div>
          </div>
          <p className="cat">{blog.category}</p>
          <h1 className="title">{blog.title}</h1>
          <p className="subTitle">{blog.subtitle}</p>
          <p>{blog.description}</p>
        </div>
        <Sidebar />
      </div>
    </Layout>
  );
};

export default SinglePage;
