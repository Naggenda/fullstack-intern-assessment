import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearAuth } from "@/redux/auth/auth.slice";
import { RootState } from "@/redux/store";
import { login, logout } from '../redux/authActions';

const useAuthSession = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const token = useSelector(state => state.token);

  const loginUser = (username, password) => {
    dispatch(login(username, password));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return {user, token, loginUser, logoutUser };
};

export default useAuthSession;
