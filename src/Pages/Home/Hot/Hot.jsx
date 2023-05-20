import { useEffect, useState } from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';

const Hot = () => {
    const [hots, setHots] = useState([]);
    useEffect(() => {
        fetch('https://play-station-server.vercel.app/hot')
            .then(res => res.json())
            .then(data => setHots(data))
    }, [])
    console.log(hots)

    return (
        <div className='my-20 flex flex-col justify-center items-center'>
            <div className='flex  h-12 mx-auto justify-center my-5'>
                <img src={logo} alt="" className='border-2 border-[#209CEE]' />
                <h1 className='h-full text-white text-2xl bg-[#209CEE] font-bold p-1'>Best Deal</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5">
                {
                    hots.map(hot => {
                        const { offer, product_name, photo, _id } = hot
                        return <div className="card bg-base-100 shadow-xl relative" key={_id}>
                            <figure className='h-[70%]'><img src={photo} alt="Shoes" /></figure>
                            <div className="card-body h-[30%]">
                                <h2 className="card-title">

                                    <div className="badge badge-secondary absolute top-0 left-0 bg-red-600">{offer} off</div>
                                </h2>
                                <p>are you want to miss {product_name} <span className='text-red-500 font-bold'>?!!</span> </p>
                                <div className="card-actions justify-end">
                                    <Link to={`/details/${_id}`} className='badge  p-1  border-2 border-[#209CEE] cursor-pointer text-[#209CEE] bg-white hover:text-white   font-bold hover:bg-[#209CEE]  '>Details</Link>

                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>


    );
};

export default Hot;