import logo from '../../../assets/logo.png'

const Hot = () => {
    return (
        <div className='my-20 flex flex-col justify-center items-center'>
            <div className='flex  h-12 mx-auto justify-center my-5'>
                <img src={logo} alt="" className='border-2 border-[#209CEE]' />
                <h1 className='h-full text-white text-2xl bg-[#209CEE] font-bold p-1'>Hot Offers</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                <div className="card w-96 bg-base-100 shadow-xl relative">
                    <figure><img src="https://cdn.mohinhcaocap.com/wp-content/uploads/2021/12/03105912/6f1312acgy1gwdzq9y8p3j20p00xcnde-370x475.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">

                            <div className="badge badge-secondary absolute top-0 left-0">Hot</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl relative">
                    <figure><img src="https://cdn.mohinhcaocap.com/wp-content/uploads/2021/12/03105912/6f1312acgy1gwdzq9y8p3j20p00xcnde-370x475.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">

                            <div className="badge badge-secondary absolute top-0 left-0">Hot</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl relative">
                    <figure><img src="https://cdn.mohinhcaocap.com/wp-content/uploads/2021/12/03105912/6f1312acgy1gwdzq9y8p3j20p00xcnde-370x475.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">

                            <div className="badge badge-secondary absolute top-0 left-0">Hot</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Hot;