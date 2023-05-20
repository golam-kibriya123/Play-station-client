import { Link } from "react-router-dom";

const Toy = ({ toys }) => {
    console.log(toys)
    const { product_name, price, sub_category, quantity, seller, _id } = toys;
    return (
        <tr className=" text-[#209CEE]">
            <td >{seller}</td>
            <td >{product_name}</td>
            <td >{sub_category}</td>
            <td >{price}</td>
            <td >{quantity}</td>
            <td>   <Link to={`/details/${_id}`} className='  p-1 rounded border-2 border-[#209CEE] cursor-pointer text-white bg-[#209CEE]   font-bold hover:bg-white hover:text-[#209CEE]'>Details</Link></td>

        </tr>
    );
};

export default Toy;