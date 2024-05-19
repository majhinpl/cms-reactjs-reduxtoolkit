import React from "react";
import Form from "../conponents/form/Form";
import Layout from "../../../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { blogEdit, setStatus } from "../../../../store/blogSlice";
import STATUSES from "../../../globals/statuses";

const EditBlog = () => {
  const { blog, status } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBlogEdit = (data) => {
    dispatch(blogEdit(data, id));

    if (status === STATUSES.SUCCESS) {
      navigate(`/blog/${id}`);
      dispatch(setStatus(null));
    }
  };
  return (
    <div>
      <Layout>
        <Form type="Edit" prevData={blog} onSubmit={handleBlogEdit} />
      </Layout>
    </div>
  );
};

export default EditBlog;
