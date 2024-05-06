import React from "react";
import Form from "../conponents/form/Form";
import Layout from "../../../components/layout/Layout";

const EditBlog = ({ type }) => {
  return (
    <div>
      <Layout>
        <Form type="Edit" />
      </Layout>
    </div>
  );
};

export default EditBlog;
