import loginPhoto from '../../assets/login.jpg'
import logo from '../../assets/logo.png'
import { BsGoogle } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const LogIn = () => {

    const { googleLogin, logIn, setTitle } = useContext(AuthContext);
    useEffect(() => {
        setTitle("| Login")
    });
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const pass = form.password.value;
        const email = form.email.value;
        form.reset()

        logIn(email, pass)
            .then((userCredential) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your login has been success',
                    showConfirmButton: false,
                    timer: 1500
                });
                const user = userCredential.user;
                navigate(from)
                console.log(user)
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,

                })
                form.reset()

                console.log(error.message)
            });
    }
    const google = () => {
        googleLogin()
            .then((result) => {

                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your login has been success',
                    showConfirmButton: false,
                    timer: 1500
                })

                navigate(from)

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${errorCode}`,

                })
            });
    }
    return (
        <div className=' h-[100vh]'>





            <section className=" ">




                <div className="flex flex-col items-center  justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-[#209CEE] dark:text-white">
                        <img className="w-8 h-8  " src={logo} alt="logo" />
                        <span className='border-2 h-8 border-l-0 rounded-r-lg px-1 border-[#209CEE] text-xl '> Play Station</span>
                    </a>
                    <div className="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0  bg-black bg-opacity-60  relative">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6 z-20 text-white" onSubmit={handelLogin}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium ">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-white   text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  dark:placeholder-gray-400  outline-none focus:bg-blue-100 " placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium ">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-white  focus:bg-blue-100 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  " required />
                                </div>









                                <div className="flex items-center justify-between text-white">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4  " />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className=" ">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full  hover:bg-white p-1  border-2 hover:border-[#209CEE] cursor-pointer hover:text-[#209CEE] text-white bg-[#209CEE] border-white  ]  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                            </form>
                            <div className='text-[#209CEE] flex justify-center space-x-2 text-3xl'>
                                <BsGoogle onClick={google} className=' bg-white p-1 rounded border-2 border-[#209CEE] cursor-pointer hover:text-white hover:bg-[#209CEE] hover:border-white  ' />
                                <FaFacebookF className=' bg-white p-1 rounded border-2 border-[#209CEE]     disabled' />
                            </div>

                            <p className="text-sm font-light  text-white">
                                Don’t have an account yet? <Link to={'/SingUp'} className="font-medium  hover:underline dark:text-blue-500">Sign up</Link>
                            </p>


                        </div>
                        <img src={loginPhoto} alt="" className=' h-full absolute  top-0 w-full  left-0 rounded-md -z-10' />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LogIn;