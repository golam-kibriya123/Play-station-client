import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { AuthContext } from "../../Providers/AuthProvider";

const Details = () => {

    const { setTitle } = useContext(AuthContext);
    useEffect(() => {
        setTitle("Details")
    });
    const navigate = useNavigate()
    const data = useLoaderData();
    const toy = data[0];
    const { product_name, price, seller_email, sub_category, seller, photo, quantity, rating, category, details } = toy;

    const [stockOut, setStockOut] = useState(false);
    console.log(stockOut)
    useEffect(() => {
        if (typeof quantity === "string") {
            setStockOut(true)
        }
    }, []);
    let one = false;
    let two = false;
    let three = false;
    let four = false;
    let five = false;
    let _four = false
    if (rating > 1) {
        one = true
    }
    if (rating >= 2) {
        two = true
    }
    if (rating >= 3) {
        three = true
    }
    if (rating >= 4) {
        four = true
    }
    if (rating > 4 && rating < 5) {
        _four = true
    }
    if (rating == 5) {
        five = true
    }


    return (
        <div className="m-5">
            <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
                <figure className="w-[30%]"><img src={photo} alt="Movie" /></figure>
                <div className="card-body w-[70%]">
                    <h2 className="card-title">Toy : {product_name}</h2>
                    <div>
                        <p>Category : {category}</p>
                        <p>Sub Category : {sub_category}</p>
                        <p className={`${stockOut && 'bg-red-500  text-white font-bold '}`}> <span className={`${stockOut && 'hidden'}`}>Quantity : </span><span className={`${stockOut || 'px-2 text-green-400 font-bold'}`}>{quantity}</span></p>
                        <p>Seller : {seller}</p>
                        <p >Seller-Email : <span className="hover:underline">{seller_email}</span> </p>
                    </div>
                    <p>{details}</p>
                    <div>
                        <p>Price {price} $</p>
                        <div className="flex">
                            <a className=" pr-1" >Rating {rating} </a>
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
                    </div>

                    <div className=" justify-end flex flex-row">
                        <button className="btn border-yellow-500 hover:border-yellow-500 hover:text-white bg-white hover:bg-yellow-500 mx-2 text-yellow-500 font-extrabold border-2 ">Add To Cart</button>
                        <button className="btn  bg-[#209CEE] mx-2" onClick={() => navigate(-1)}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;