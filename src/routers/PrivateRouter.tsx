import { useEffect, ReactNode } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loading from "../helpers/Loading";
import { rehydrateToken } from '../store/auth/authSlice';
import { RootState } from "../types/types";

interface PrivateRouterProps {
  children: ReactNode;
}

const PrivateRouter = ({ children }: PrivateRouterProps) => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    dispatch(rehydrateToken());
  }, [dispatch]);

  if (!token) {
    return <Loading />;
  }

  if (!token) {
    return <Loading />;
  }

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRouter;