import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContexts } from "../contexts/AuthContexts";
import LoadingSpiner from "../components/LoadingSpiner";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContexts);
  const location = useLocation();

  if (loading) {
    return <LoadingSpiner></LoadingSpiner>
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;
