import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SingUp from "../Pages/SignUp/SingUp";
import BlogOne from "../Pages/Blogs/BlogOne";
import AllToys from "../Pages/AllToys/AllToys";
import Details from "../Pages/AllToys/Details";
import PrivateRoute from "./PrivateRoute";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import Error from "../Pages/Error/Error";

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

            },
            {
                path: '/add',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: '/myToys/:user_name',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
                loader: ({ params }) => fetch(`https://play-station-server.vercel.app/user/${params.user_name}`)
            }
            ,
            {
                path: '/update/:id',
                element: <PrivateRoute> <UpdateToy></UpdateToy></PrivateRoute>,
                loader: ({ params }) => fetch(`https://play-station-server.vercel.app/toys/${params.id}`)

            }

        ]

    }
    ,
    {
        path: '*',
        element: <Error></Error>

    }

]);
export default router;


