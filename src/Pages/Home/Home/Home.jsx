import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Nav from "../../Shared/Nav";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    const { setTitle } = useContext(AuthContext);
    useEffect(() => {
        setTitle("Home")
    })

    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <Gallery></Gallery>
            <h1>this is home</h1>
        </div>
    );
};

export default Home;