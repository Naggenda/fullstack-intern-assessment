import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearAuth } from "@/redux/auth/auth.slice";
import { RootState } from "@/redux/store";
import { auth } from '../redux/auth/auth.slice';

interface AuthSession {
  user: User | null;
  token: string | null;
  auth: (username: string, password: string) => void;
  logoutUser: () => void;
}

interface User {
  id: number;
  username: string;
}

const useAuthSession = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  //  implement the logic here to check user session
  const login = (username: string, password: string) => {
    // Make API call to login endpoint
    // Upon successful login, dispatch action to set user in Redux state
    dispatch(auth(username, password));
  };
  return user;
};

export default useAuthSession;
