import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import MainRoutes from "./MainRoutes";
import AuthenticationRoutes from "./AuthenticationRoutes";

const CustomRoutes = () => {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <Routes>
            {isLoggedIn ? (
                <Route path="/*" element={<MainRoutes />} />
            ) : (
                <Route path="/*" element={<AuthenticationRoutes />} />
            )}
        </Routes>
    );
};

export default CustomRoutes;
