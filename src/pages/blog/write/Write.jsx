import "./writePage.css";
import Layout from "../../../components/layout/Layout";
import Form from "../conponents/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { addBlog, setStatus } from "../../../../store/blogSlice";
import { useNavigate } from "react-router-dom";
import STATUSES from "../../../globals/statuses";
import { useEffect } from "react";

export const Write = () => {
  const { status } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleWrite = (data) => {
    dispatch(addBlog(data));
  };
  useEffect(() => {
    if (status === STATUSES.SUCCESS) {
      navigate("/");
      dispatch(setStatus(null));
    }
  }, [status]);

  return (
    <Layout>
      <Form type="write" onSubmit={handleWrite} />
    </Layout>
  );
};
