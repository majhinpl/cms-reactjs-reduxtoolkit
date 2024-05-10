import Form from "./components/Form";
import { useDispatch } from "react-redux";
import { register } from "../../../store/authSlice";

const Register = ({ type }) => {
  const dispatch = useDispatch();
  const handleRegister = async (data) => {
    dispatch(register(data));
  };
  return <Form type="Register" onSubmit={handleRegister} />;
};

export default Register;
