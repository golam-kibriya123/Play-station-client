import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

const Nav = () => {
    const [countClick, setCountClick] = useState(false);
    const navMenu = () => {
        setCountClick(!countClick)
    }

    return (

        <div className='sticky top-0 z-30'>
            <div className="navbar relative flex justify-between   bg-white shadow-lg ">
                <Link to={'/'} className="">
                    <img src={logo} alt="" className="btn btn-ghost hover:bg-white normal-case text-xl" />
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
                            <Link to={'/add'} className='  p-1 rounded border-2 border-[#209CEE] cursor-pointer hover:text-white hover:bg-[#209CEE]   '>Add A Toy</Link>
                        </li>
                        <li>
                            <Link to={'/all'} className='  p-1 rounded border-2 border-[#209CEE] cursor-pointer hover:text-white hover:bg-[#209CEE]   '>All Toys</Link>
                        </li>
                        <li>
                            <Link to={'/myToy'} className='  p-1 rounded border-2 border-[#209CEE] cursor-pointer hover:text-white hover:bg-[#209CEE]   '>My Toys</Link>
                        </li>
                    </ul>

                    <Link to={'/login'} className='  p-1 rounded border-2 border-[#209CEE] cursor-pointer hover:text-white hover:bg-[#209CEE]  ms-5 '>Login</Link>

                </div>
                <div className=" gap-2 mr-3 ">
                    <form className="form-control md:flex  flex-row hidden ">
                        <input type="text" placeholder="Search" className="input  border-[#209CEE] rounded-r-none border-r-0 focus:outline-none outline-none" />
                        <input type='submit' className='border border-[#209CEE] input rounded-l-none focus:outline-none cursor-pointer bg-[#209CEE] text-white font-bold hover:bg-white hover:text-[#209CEE]' value={'Search'} />
                    </form>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className=" btn-circle avatar ">

                            <img src={logo} alt='user' className='w-10 rounded-full' />

                        </label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;