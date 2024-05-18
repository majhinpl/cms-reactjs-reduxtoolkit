import React, { useEffect } from "react";
import Form from "./components/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import STATUSES from "../../globals/statuses";
import { login, setStatus } from "../../../store/authSlice";

const Login = ({ type }) => {
  const { user, status, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (data) => {
    dispatch(login(data));
  };
  useEffect(() => {
    if (status === STATUSES.SUCCESS) {
      navigate("/");
      localStorage.setItem("jwtToken", token);
      dispatch(setStatus(null));
    }
  }, [status]);
  return <Form type="Login" onSubmit={handleLogin}></Form>;
};

export default Login;
