import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Categories from "../Categories/Categories";
import Best from "../Best/Best";
import Hot from "../Hot/Hot";

const Home = () => {
    const { setTitle } = useContext(AuthContext);
    useEffect(() => {
        setTitle("Home")
    });
 

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categories></Categories>
            <Hot></Hot>
            <Best></Best>
        </div>
    );
};

export default Home;