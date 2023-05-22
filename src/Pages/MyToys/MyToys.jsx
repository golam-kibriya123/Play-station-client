import { Link } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const MyToys = () => {

    const { setTitle } = useContext(AuthContext);
    useEffect(() => {
        setTitle("My Toys")
    })
    return (
        <table className=" w-full table " >
            <thead className="">
                <tr className="">
                    <th className="bg-[#209CEE] text-white">Seller</th>
                    <th className="bg-[#209CEE] text-white">Toy Name</th>
                    <th className="bg-[#209CEE] text-white">Sub-category</th>
                    <th className="bg-[#209CEE] text-white">Price</th>
                    <th className="bg-[#209CEE] text-white">Available Quantity</th>
                    <th className="bg-[#209CEE] text-white">Details,Update,Delete button </th>
                </tr>
            </thead>
            <tbody className="">
                {/* {toys.map(toy => <Toy toys={toy} key={toy._id}></Toy>)} */}
                <tr className=" text-[#209CEE]">
                    <td >seller</td>
                    <td >product_name</td>
                    <td >sub_category</td>
                    <td >price</td>
                    <td >quantity</td>
                    <td >
                        <Link to={`/details/$`} className='  p-1 mx-2 rounded border-2 border-[#209CEE] cursor-pointer text-white bg-[#209CEE]   font-bold hover:bg-white hover:text-[#209CEE]'>Details</Link>
                        <Link to={`/update`} className='  p-1 mx-2 rounded border-2 border-[#209CEE] cursor-pointer text-white bg-[#209CEE]   font-bold hover:bg-white hover:text-[#209CEE]'>Update</Link>
                        <Link to={`/update`} className='  p-1 mx-2 rounded border-2 border-[#209CEE] cursor-pointer text-white bg-[#209CEE]   font-bold hover:bg-white hover:text-[#209CEE]'>Delete</Link>
                    </td>

                </tr>
                <tr className="font-bold text-xl">
                    <td className="bg-[#209CEE] text-white rounded-none ">Total toys</td>
                    <td className="bg-[#209CEE] text-white rounded-none "></td>
                    <td className="bg-[#209CEE] text-white rounded-none "></td>
                    <td className="bg-[#209CEE] text-white rounded-none "></td>
                    <td className="bg-[#209CEE] text-white rounded-none ">toys length</td>
                    <td className="bg-[#209CEE] text-white rounded-none " >
                        <button className='  p-1 rounded border-2 border-white cursor-pointer text-white bg-[#209CEE]   font-bold hover:bg-white hover:text-[#209CEE] '  > See All</button>
                    </td>

                </tr>



            </tbody>

        </table>
    );
};

export default MyToys;