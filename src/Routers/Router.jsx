import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SingUp from "../Pages/SignUp/SingUp";
import BlogOne from "../Pages/Blogs/BlogOne";
import AllToys from "../Pages/AllToys/AllToys";
import Details from "../Pages/AllToys/Details";

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
                loader: () => fetch('http://localhost:5000/toys')
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)

            }
        ]
    }


]);
export default router;


