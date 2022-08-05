import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [isAuth, setISAuth] = useState(false);

    const signIn = () => {
        setISAuth(true);
    }
    
    const signOut = () => {
        setISAuth(false);
    }

    return (
        <UserContext.Provider value={{ isAuth, signIn, signOut }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;