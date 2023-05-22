import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToy = ({ toy }) => {
    const { seller, product_name, sub_category, price, quantity, _id } = toy;
    const deleteToy = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://play-station-server.vercel.app/user/${id}`, {
                    method: "DELETE"

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Toys has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <tr className=" text-[#209CEE]">
            <td >{seller}</td>
            <td >{product_name}</td>
            <td >{sub_category}</td>
            <td >{price} $</td>
            <td >{quantity}</td>
            <td className="md:space-x-3">
                <Link to={`/details/$`} className='  p-1  rounded border-2 border-[#209CEE] cursor-pointer text-white bg-[#209CEE]   font-bold hover:bg-white hover:text-[#209CEE]'>Details</Link>
                <Link to={`/update/${_id}`} className='  p-1  rounded border-2 border-[#209CEE] cursor-pointer text-white bg-[#209CEE]   font-bold hover:bg-white hover:text-[#209CEE]'>Update</Link>
                <button onClick={() => deleteToy(_id)} className='  p-1  rounded border-2 border-[#209CEE] cursor-pointer text-white bg-[#209CEE]   font-bold hover:bg-white hover:text-[#209CEE]'>Delete</button>
            </td>

        </tr>
    );
};

export default MyToy;