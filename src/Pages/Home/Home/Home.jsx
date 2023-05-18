import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Home = () => {
    const { setTitle } = useContext(AuthContext);
    useEffect(() => {
        setTitle("Home")
    }, [])

    return (
        <div>

            <h1>this is home</h1>
        </div>
    );
};

export default Home;