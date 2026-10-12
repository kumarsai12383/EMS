import { Navigate,useLocation,Outlet } from "react-router-dom";
function ProtectedRoute() {
    const location = useLocation();
    function login(){
        return <Navigate to="/auth" />;
    }
 
  const isAuthenticated = localStorage.getItem("userData") !== null;
  if (!isAuthenticated) {
   return login();
  }
  else if (location.pathname == "/app" && isAuthenticated) {
    
    return <Navigate to="/app/dashboard" />;
  }
  else {
    return <Outlet />;
  }
}
export default ProtectedRoute;
