import { useEffect, useState } from 'react';
import logo from '../../../assets/logo.png'
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Best = () => {
    const [best, setBest] = useState([]);
    const newBest = best.slice(0, 5)
    console.log(best)
    useEffect(() => {
        fetch(`https://play-station-server.vercel.app/best`)
            .then(res => res.json())
            .then(data => setBest(data))
    }, []);

    let one = false;
    let two = false;
    let three = false;
    let four = false;
    let five = false;
    let _four = false

    return (
        <div className=''>
            <div className='flex  h-12 mx-auto justify-center my-5'>
                <img src={logo} alt="" className='border-2 border-[#209CEE]' />
                <h1 className='h-full text-white text-2xl bg-[#209CEE] font-bold p-1'>Best Seller</h1>
            </div>
            <div className=' justify-center grid grid-flow-col-1 mg:grid-cols-3 lg:grid-cols-5 gap-5'>

                {newBest.map(be => {
                    if (be.rating > 1) {
                        one = true
                    }
                    if (be.rating >= 2) {
                        two = true
                    }
                    if (be.rating >= 3) {
                        three = true
                    }
                    if (be.rating >= 4) {
                        four = true
                    }
                    if (be.rating > 4 && be.rating < 5) {
                        _four = true
                    }
                    if (be.rating == 5) {
                        five = true
                    }
                    return <div className="relative " key={(be._id)}>

                        <img src={be.photo} className=" h-96 w-full" />


                        <div className="flex absolute top-0 bg-[#209CEE] text-white">
                            <a className=" pr-1" >Rating {be.rating} </a>
                            <p className="flex items-center text-yellow-500">
                                <BsStarFill className={`${one || 'hidden'} text-xs`} />
                                <BsStarFill className={`text-sm ${two ? 'block' : 'hidden'} `} />
                                <BsStarHalf className={`text-sm ${two ? 'block' : 'hidden'} ${three ? 'hidden' : 'block'}`} />
                                <BsStarFill className={` ${three ? 'block' : 'hidden'} `} />
                                <BsStarHalf className={`text-lg ${three ? 'block' : 'hidden'} ${four ? 'hidden' : 'block'}`} />
                                <BsStarFill className={` ${four ? 'block' : 'hidden'} text-lg`} />
                                <BsStarHalf className={`text-xl ${_four ? 'block' : 'hidden'} `} />
                                <BsStarFill className={`text-xl ${five || 'hidden'}`} />

                            </p>


                        </div>

                        <Link to={`/details/${be._id}`} className='absolute right-0 bottom-0  p-1  border-2 border-[#209CEE] cursor-pointer text-[#209CEE] bg-white hover:text-white   font-bold hover:bg-[#209CEE]  '>Take For You</Link>
                    </div>
                })}



            </div>

        </div>
    );
};

export default Best;