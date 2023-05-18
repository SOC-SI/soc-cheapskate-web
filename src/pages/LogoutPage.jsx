import { useNavigate } from "react-router-dom";
import { auth } from "../services/auth";
import { useEffect } from "react";

const LogoutPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const user = auth.currentUser();
        await user.logout();
      } catch (e) {}
      navigate("/login");
    })();
  }, [navigate]);

  return <div></div>;
};
export default LogoutPage;
