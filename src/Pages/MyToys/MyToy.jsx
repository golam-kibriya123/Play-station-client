import { Link } from "react-router-dom";

const MyToy = ({ toy }) => {
    const { seller, product_name, sub_category, price, quantity } = toy
    return (
        <tr className=" text-[#209CEE]">
            <td >{seller}</td>
            <td >{product_name}</td>
            <td >{sub_category}</td>
            <td >{price} $</td>
            <td >{quantity}</td>
            <td className="md:space-x-3">
                <Link to={`/details/$`} className='  p-1  rounded border-2 border-[#209CEE] cursor-pointer text-white bg-[#209CEE]   font-bold hover:bg-white hover:text-[#209CEE]'>Details</Link>
                <Link to={`/update`} className='  p-1  rounded border-2 border-[#209CEE] cursor-pointer text-white bg-[#209CEE]   font-bold hover:bg-white hover:text-[#209CEE]'>Update</Link>
                <Link to={`/update`} className='  p-1  rounded border-2 border-[#209CEE] cursor-pointer text-white bg-[#209CEE]   font-bold hover:bg-white hover:text-[#209CEE]'>Delete</Link>
            </td>

        </tr>
    );
};

export default MyToy;