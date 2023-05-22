import { useContext, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const UpdateToy = () => {
    const { setTitle } = useContext(AuthContext);
    useEffect(() => {
        setTitle("Update Toys")
    })
    const addToyHandler = event => {
        event.preventDefault();
        const form = event.target;
        const product_name = form.toy_ame.value;
        const photo = form.toy_photo.value;
        const seller = form.name.value;
        const seller_photo = form.photo.value;
        const seller_email = form.email.value;
        const sub_category = form.sub.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const category = 'super-hero'
        const toy = { price, product_name, photo, seller, seller_email, quantity, category, sub_category, details, rating, seller_photo };
        console.log(toy)
        form.reset()

    }
    return (


        <section className="w-full md:w-[80%] bg-[#209cee6b]  mx-auto my-5 rounded-lg">
            <div >

                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                        Update Your Toy
                    </h1>
                    <form className=" z-20 text-white grid grid-cols-1 md:grid-cols-3 gap-10 w-ful " onSubmit={addToyHandler} >




                        <div>
                            <label htmlFor="price" className="block mb-2 text-sm font-medium ">Toy Price</label>
                            <input type="text" name="price" id="price" className="bg-white   text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  dark:placeholder-gray-400  outline-none focus:bg-blue-100 " placeholder="50$" required />
                        </div>

                        <div>
                            <label htmlFor="quantity" className="block mb-2 text-sm font-medium">Toy Quantity</label>
                            <input type="text" name="quantity" id="quantity" className="bg-white   text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  dark:placeholder-gray-400  outline-none focus:bg-blue-100 " placeholder="How many toys are available " required />
                        </div>

                        <div className=" col-span-3  ">
                            <label htmlFor="details" className="block mb-2 text-sm font-medium ">Toy Details </label>
                            <input type="text" name="details" id="details" placeholder="Description" className="bg-white   text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 outline-none focus:bg-blue-100  " required />
                        </div>



                        <button type="submit" className="w-full  hover:bg-white p-1  border-2 hover:border-[#209CEE] cursor-pointer hover:text-[#209CEE] text-white bg-[#209CEE] border-white  ]  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add Now</button>
                    </form>




                </div>
            </div>
        </section>

    );
};

export default UpdateToy;