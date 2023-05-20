import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SingUp from "../Pages/SignUp/SingUp";
import BlogOne from "../Pages/Blogs/BlogOne";
import AllToys from "../Pages/AllToys/AllToys";
import Details from "../Pages/AllToys/Details";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
            ,
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/singUp',
                element: <SingUp></SingUp>
            },
            {
                path: '/blogs',
                element: <BlogOne></BlogOne>
            },
            {
                path: '/all',
                element: <AllToys></AllToys>,
                loader: () => fetch('https://play-station-server.vercel.app/toys')
            },
            {
                path: '/details/:id',
                element:
                    <PrivateRoute>
                        <Details></Details>
                    </PrivateRoute>,
                loader: ({ params }) => fetch(`https://play-station-server.vercel.app/toys/${params.id}`)

            }
        ]
    }


]);
export default router;


