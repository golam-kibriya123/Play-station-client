import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Nav from "../../Shared/Nav";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Categories from "../Categories/Categories";
import Hot from "../Hot/HOt";
import Best from "../Best/Best";

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
            <Categories></Categories>
            <Hot></Hot>
            <Best></Best>
        </div>
    );
};

export default Home;