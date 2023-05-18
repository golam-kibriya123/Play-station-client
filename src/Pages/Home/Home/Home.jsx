import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Nav from "../../Shared/Nav";

const Home = () => {
    const { setTitle } = useContext(AuthContext);
    useEffect(() => {
        setTitle("Home")
    }, [])

    return (
        <div>
            <Nav></Nav>

            <h1>this is home</h1>
        </div>
    );
};

export default Home;