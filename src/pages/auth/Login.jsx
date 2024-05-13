import React from "react";
import Form from "./components/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import STATUSES from "../../globals/statuses";
import { login } from "../../../store/authSlice";

const Login = ({ type }) => {
  const { user, status } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (data) => {
    dispatch(login(data));
    if (status === STATUSES.SUCCESS) {
      return navigate("/");
    } else {
      return navigate("/login");
    }
  };
  return <Form type="Login" onSubmit={handleLogin}></Form>;
};

export default Login;
