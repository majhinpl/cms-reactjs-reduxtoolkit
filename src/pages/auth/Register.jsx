import React from "react";
import Form from "./components/Form";
import axios from "axios";
import { baseUrl } from "../../config";
import { Navigate } from "react-router-dom";

const Register = ({ type }) => {
  const handleRegister = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/register`, data);

      if (response.status === 201) {
        Navigate("/login");
      } else {
        alert("Something registration failed");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };
  return <Form type="Register" onSubmit={handleRegister} />;
};

export default Register;
