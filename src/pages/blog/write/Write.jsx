import Layout from "../../../components/layout/Layout";
import "./writePage.css";
import Form from "../conponents/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../../../../store/blogSlice";
import { useNavigate } from "react-router-dom";
import STATUSES from "../../../globals/statuses";

export const Write = ({ type, onSubmit }) => {
  const { status } = useSelector((stats) => stats.blog);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleWrite = (data) => {
    dispatch(addBlog(data));

    if (status === STATUSES.SUCCESS) {
      return navigate("/");
    } else {
      return navigate("/blog/write");
      // alert("Somthng went worng");
    }
  };

  return (
    <Layout>
      <Form type="write" onSubmit={handleWrite} />
    </Layout>
  );
};
