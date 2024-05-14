import Form from "./components/Form";
import { useDispatch, useSelector } from "react-redux";
import { register, setStatus } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";
import STATUSES from "../../globals/statuses";
import { useEffect } from "react";

const Register = ({ type }) => {
  const { status } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegister = async (data) => {
    dispatch(register(data));
  };
  useEffect(() => {
    // check the status value
    // status --> success --> navigate to login page eelse register page
    if (status === STATUSES.SUCCESS) {
      return navigate("/login");
      // dispatch(setStatus(null));
    } else {
      navigate("/register");
    }
  }, [status]);
  return <Form type="Register" onSubmit={handleRegister} />;
};

export default Register;
