import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContexts } from "../contexts/AuthContexts";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContexts);
  const location = useLocation();

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;
