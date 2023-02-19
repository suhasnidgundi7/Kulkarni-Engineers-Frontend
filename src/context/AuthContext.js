import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginId, setLoginId] = useState(null);
    const [userType, setUserType] = useState(null);

    const handleLogin = (id, type) => {
        setIsLoggedIn(true);
        setLoginId(id);
        setUserType(type);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setLoginId(null);
        setUserType(null);
    };

    const values = {
        isLoggedIn,
        loginId,
        userType,
        handleLogin,
        handleLogout,
    };

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
