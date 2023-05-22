import { useLoaderData } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToy from "./MyToy";


const MyToys = () => {

    const { setTitle } = useContext(AuthContext);
    useEffect(() => {
        setTitle("My Toys")
    });
    const myToys = useLoaderData();
    let seeAll = true;
    if (myToys.length < 20) {
        seeAll = false
    }
    return (
        <table className=" w-full table " >
            <thead className="">
                <tr className="">
                    <th className="bg-[#209CEE] text-white">Seller</th>
                    <th className="bg-[#209CEE] text-white">Toy Name</th>
                    <th className="bg-[#209CEE] text-white">Sub-category</th>
                    <th className="bg-[#209CEE] text-white">Price</th>
                    <th className="bg-[#209CEE] text-white">Available Quantity</th>
                    <th className="bg-[#209CEE] text-white"></th>
                </tr>
            </thead>
            <tbody className="">
                {myToys.map(toy => <MyToy key={toy._id} toy={toy}></MyToy>)}

                <tr className="font-bold text-xl">
                    <td className="bg-[#209CEE] text-white rounded-none ">Total toys</td>
                    <td className="bg-[#209CEE] text-white rounded-none "></td>
                    <td className="bg-[#209CEE] text-white rounded-none "></td>
                    <td className="bg-[#209CEE] text-white rounded-none "></td>
                    <td className="bg-[#209CEE] text-white rounded-none ">{myToys.length}</td>
                    <td className="bg-[#209CEE] text-white rounded-none " >
                        <button className={` p-1 rounded border-2 border-white cursor-pointer text-white bg-[#209CEE]   font-bold hover:bg-white hover:text-[#209CEE] ${seeAll || 'hidden'}`} > See All</button>
                    </td>

                </tr>



            </tbody>

        </table>
    );
};

export default MyToys;