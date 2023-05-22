import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineMenu } from 'react-icons/ai';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Nav = () => {
    const [countClick, setCountClick] = useState(false);
    const navMenu = () => {
        setCountClick(!countClick)
    }
    const { user, userPhoto, userName, logout } = useContext(AuthContext);
    return (

        <div className='sticky top-0 z-30'>


            <div className="navbar relative flex justify-between    bg-white shadow-lg ">
                <Link to={'/'} className="flex items-center ">

                    <img className="w-12 md:border-2 border-[#209CEE]" src={logo} alt="logo" />
                    <h1 className='border-2 h-8 border-l-0 rounded-r-lg px-1 border-[#209CEE] text-xl text-white bg-[#209CEE] font-bold hidden md:block'> Play Station</h1>

                </Link>



                <div className='text-[#209CEE] font-bold  w-1/2'>
                    <div className='lg:hidden relative text-[#209CEE]'>
                        <RxCross2 className={` rounded border-2 border-[#209CEE] cursor-pointer  text-3xl h-8 hover:text-white hover:bg-[#209CEE] ${countClick || 'hidden'}`} onClick={navMenu} />
                        <AiOutlineMenu className={` rounded border-2 border-[#209CEE] cursor-pointer  text-3xl h-8 hover:text-white hover:bg-[#209CEE] ${countClick && 'hidden'}`} onClick={navMenu} />
                    </div>

                    <ul className={` flex flex-row text-sm space-x-1 lg:space-x-3   lg:w-auto absolute lg:static ${countClick ? 'top-16 md:top-20 right-4 md:left-60' : '-top-56'} `}>
                        <li className=''>
                            <Link to={'/'} className=' md:ms-0 p-1 rounded border-2 border-[#209CEE] cursor-pointer hover:text-white hover:bg-[#209CEE]  '> Home</Link>
                        </li>
                        <li>
                            <Link to={'/blogs'} className='  p-1 rounded border-2 border-[#209CEE] cursor-pointer hover:text-white hover:bg-[#209CEE]   '> Blogs</Link>
                        </li>
                        <li>
                            <Link to={'/add'} className={`  p-1 rounded border-2 border-[#209CEE] cursor-pointer hover:text-white hover:bg-[#209CEE] ${user || 'hidden'}`} >Add A Toy</Link>
                        </li>
                        <li>
                            <Link to={'/all'} className='  p-1 rounded border-2 border-[#209CEE] cursor-pointer hover:text-white hover:bg-[#209CEE]   '>All Toys</Link>
                        </li>
                        <li>
                            <Link to={`/myToys/${userName}`} className={` p-1 rounded border-2 border-[#209CEE] cursor-pointer hover:text-white hover:bg-[#209CEE]  ${user || 'hidden'}`} >My Toys</Link>
                        </li>
                    </ul>

                    <Link to={'/login'} className={`  p-1 rounded border-2 border-[#209CEE] cursor-pointer hover:text-white hover:bg-[#209CEE]  ms-5 ${user && 'hidden'}`}>Login</Link>
                    <Link onClick={logout} className={`  p-1 rounded border-2 border-[#209CEE] cursor-pointer hover:text-white hover:bg-[#209CEE]  ms-5 ${user || 'hidden'}`}>Logout</Link>

                </div>
                <div className=" gap-2 mr-3 ">


                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className=" btn-circle avatar tooltip tooltip-left tooltip-success" data-tip={`${userName ? `${userName}` : 'no user'}`}>

                            <img alt='not found' src={userPhoto} className={`w-10 rounded-full ${userPhoto || 'hidden'}`} />
                            <img src={logo} alt='user' className={`w-10 rounded-full ${userPhoto && 'hidden'}`} />

                        </label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;