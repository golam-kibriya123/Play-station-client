import { useContext, useEffect } from 'react';
import loginPhoto from '../../assets/login.jpg'
import { BsGoogle } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const SingUp = () => {
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const { setTitle } = useContext(AuthContext);
    useEffect(() => {
        setTitle("| SingUp")
    })
    const { createUser, auth, googleLogin } = useContext(AuthContext);

    const update = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: `${name}`, photoURL: `${photo}`
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            console.log(error)
        });
    }

    const createUserHandler = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const user = { photo, name, email, password };
        event.target.reset()

        createUser(email, password)
            .then((result) => {
                // Signed in 
                const createdUser = result.user;
                // 
                update(name, photo);
                // alert
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from)
                console.log(createdUser)

            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`

                })
                console.log(error)
                // ..
            });
        console.log(user)

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
        <div className='my-14 '>

            <section className=" ">
                <div className="flex flex-col items-center  justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-[#209CEE] dark:text-white">
                        <img className="w-8 h-8  " src="/public/logo.png" alt="logo" />
                        <span className='border-2 h-8 border-l-0 rounded-r-lg px-1 border-[#209CEE] text-xl '> Play Station</span>
                    </a>
                    <div className="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0  bg-black bg-opacity-60  relative">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6 z-20 text-white" onSubmit={createUserHandler} >
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium ">Your Name</label>
                                    <input type="text" name="name" id="name" className="bg-white   text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  dark:placeholder-gray-400  outline-none focus:bg-blue-100 " placeholder="Your Name" required />
                                </div>
                                <div>
                                    <label htmlFor="photo" className="block mb-2 text-sm font-medium ">Your Photo URL</label>
                                    <input type="text" name="photo" id="photo" className="bg-white   text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  dark:placeholder-gray-400  outline-none focus:bg-blue-100 " placeholder="https://...." required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium ">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-white   text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  dark:placeholder-gray-400  outline-none focus:bg-blue-100 " placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium ">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-white  focus:bg-blue-100 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  " required />
                                </div>



                                <button type="submit" className="w-full  hover:bg-white p-1  border-2 hover:border-[#209CEE] cursor-pointer hover:text-[#209CEE] text-white bg-[#209CEE] border-white  ]  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button>
                            </form>
                            <div className='text-[#209CEE] flex justify-center space-x-2 text-3xl'>
                                <BsGoogle onClick={google} className=' bg-white p-1 rounded border-2 border-[#209CEE] cursor-pointer hover:text-white hover:bg-[#209CEE] hover:border-white  ' />
                                <FaFacebookF className=' bg-white p-1 rounded border-2 border-[#209CEE]     disabled' />
                            </div>
                            <p className="text-sm font-light  text-white">
                                Already have an account yet? <Link to={'/login'} className="font-medium  hover:underline dark:text-blue-500">Login</Link>
                            </p>


                        </div>
                        <img src={loginPhoto} alt="" className=' h-full absolute  top-0 w-full  left-0 rounded-md -z-10' />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingUp;