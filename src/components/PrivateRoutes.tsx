import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = { token: localStorage.getItem("ACCESS_TOKEN") };
  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
