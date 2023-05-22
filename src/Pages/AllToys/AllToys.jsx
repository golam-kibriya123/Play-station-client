import { useLoaderData } from "react-router-dom";
import Toy from "./Toy";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const AllToys = () => {

    const { setTitle } = useContext(AuthContext);
    useEffect(() => {
        setTitle("| All Toys")
    });
    const toys = useLoaderData();


    return (
        <div className="my-10">
            <div className="">
                <table className=" w-full table " >
                    <thead className="">
                        <tr className="">
                            <th className="bg-[#209CEE] text-white">Seller</th>
                            <th className="bg-[#209CEE] text-white">Toy Name</th>
                            <th className="bg-[#209CEE] text-white">Sub-category</th>
                            <th className="bg-[#209CEE] text-white">Price</th>
                            <th className="bg-[#209CEE] text-white">Available Quantity</th>
                            <th className="bg-[#209CEE] text-white">FView Details button</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {toys.map(toy => <Toy toys={toy} key={toy._id}></Toy>)}
                        <tr className="font-bold text-xl">
                            <td className="bg-[#209CEE] text-white rounded-none ">Total toys</td>
                            <td className="bg-[#209CEE] text-white rounded-none "></td>
                            <td className="bg-[#209CEE] text-white rounded-none "></td>
                            <td className="bg-[#209CEE] text-white rounded-none "></td>
                            <td className="bg-[#209CEE] text-white rounded-none ">{toys.length}</td>


                        </tr>



                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;