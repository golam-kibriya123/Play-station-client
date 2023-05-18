import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {






    const [title, setTitle] = useState('');
    const newTitle = 'PlayStation' + ' ' + title;
    useEffect(() => {
        document.title = newTitle;
    }, [newTitle]);

    const authInfo = {
        setTitle,

    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider