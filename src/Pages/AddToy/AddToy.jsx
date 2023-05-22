import { useContext, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const AddToy = () => {

    const { setTitle } = useContext(AuthContext);
    useEffect(() => {
        setTitle("Add Toy")
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
                <a className="flex items-center mb-6 text-2xl font-semibold text-[#209CEE] dark:text-white">
                    <img className="w-8 h-8  " src="/public/logo.png" alt="logo" />
                    <span className='border-2 h-8 border-l-0 rounded-r-lg px-1 border-[#209CEE] text-xl bg-white'> Play Station</span>
                </a>
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                        Add Your Toy
                    </h1>
                    <form className=" z-20 text-white grid grid-cols-3 gap-10 w-ful " onSubmit={addToyHandler} >
                        <div>
                            <label htmlFor="toy_ame" className="block mb-2 text-sm font-medium ">Toy Name</label>
                            <input type="text" name="toy_ame" id="toy_ame" className="bg-white   text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  dark:placeholder-gray-400  outline-none focus:bg-blue-100 " placeholder="Toy_ame" required />
                        </div>
                        <div>
                            <label htmlFor="toy_photo" className="block mb-2 text-sm font-medium ">Toy Photo URL</label>
                            <input type="text" name="toy_photo" id="toy_photo" className="bg-white   text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  dark:placeholder-gray-400  outline-none focus:bg-blue-100 " placeholder="https://...." required />
                        </div>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium ">Seller Name</label>
                            <input type="text" name="name" id="name" className="bg-white   text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  dark:placeholder-gray-400  outline-none focus:bg-blue-100 " placeholder="Your Name" required />
                        </div>
                        <div>
                            <label htmlFor="photo" className="block mb-2 text-sm font-medium ">Seller Photo URL</label>
                            <input type="text" name="photo" id="photo" className="bg-white   text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  dark:placeholder-gray-400  outline-none focus:bg-blue-100 " placeholder="https://...." required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium ">Seller E-mail</label>
                            <input type="email" name="email" id="email" className="bg-white   text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  dark:placeholder-gray-400  outline-none focus:bg-blue-100 " placeholder="name@company.com" required />
                        </div>

                        <div>
                            <label htmlFor="sub" className="block mb-2 text-sm font-medium ">Sub Category</label>
                            <input type="text" name="sub" id="sub" className="bg-white   text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  dark:placeholder-gray-400  outline-none focus:bg-blue-100 " placeholder="Sub Category of Super Heros Toys" required />
                        </div>
                        <div>
                            <label htmlFor="price" className="block mb-2 text-sm font-medium ">Toy Price</label>
                            <input type="text" name="price" id="price" className="bg-white   text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  dark:placeholder-gray-400  outline-none focus:bg-blue-100 " placeholder="50$" required />
                        </div>
                        <div>
                            <label htmlFor="rating" className="block mb-2 text-sm font-medium ">Rating</label>
                            <input type="number" name="rating" id="rating" className="bg-white   text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  dark:placeholder-gray-400  outline-none focus:bg-blue-100 " placeholder="3.5....." required />
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

export default AddToy;