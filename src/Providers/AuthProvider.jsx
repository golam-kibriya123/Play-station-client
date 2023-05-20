import { useEffect, useState, createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    //app title
    const [title, setTitle] = useState('');
    const newTitle = 'PlayStation' + ' ' + title;
    useEffect(() => {
        document.title = newTitle;
    }, [newTitle]);

    // loader
    const [loading, setLoading] = useState(true);
    // createUser/singUp
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };
    // login
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // create user
    const [user, setUser] = useState(null);
    const userName = user?.displayName;
    const userPhoto = user?.photoURL;
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,
            currentUser => {
                setUser(currentUser);
                setLoading(false)
            });
        return () => {
            return unsubscribe()
        }
    });
    // create

    // auth info 
    const authInfo = {
        setTitle,
        loading,
        createUser,
        logIn,
        user,
        auth,
        userName,
        userPhoto
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider