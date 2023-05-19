import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SingUp from "../Pages/SignUp/SingUp";
import BlogOne from "../Pages/Blogs/BlogOne";

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
                path:'/blogs',
                element:<BlogOne></BlogOne>
            }
        ]
    }


]);
export default router;


