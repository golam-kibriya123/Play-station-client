import logo from '../../../assets/logo.png'

const Best = () => {
    return (
        <div className=''>
            <div className='flex  h-12 mx-auto justify-center my-5'>
                <img src={logo} alt="" className='border-2 border-[#209CEE]' />
                <h1 className='h-full text-white text-2xl bg-[#209CEE] font-bold p-1'>Best Seller</h1>
            </div>
            <div className='flex justify-center'>
                <div className=" carousel carousel-center max-w-md p-4 space-x-4 bg-[#209cee67] rounded-box">
                    <div className="carousel-item flex flex-col " id="sliderT1">
                        <div className='flex space-x-5 my-3'>
                            <div className=''>
                                <h1>price $: 200</h1>
                                <p>Rating : ⭐⭐⭐⭐⭐</p>
                            </div>
                            <a href="#sliderT4" className="btn  bg-[#209CEE] border border-white hover:bg-[#209CEE]">❮</a>
                            <a href="#sliderT2" className="btn  bg-[#209CEE] border border-white hover:bg-[#209CEE]">❯</a>

                        </div>

                        <img src="https://cdn.mohinhcaocap.com/wp-content/uploads/2021/12/03105912/6f1312acgy1gwdzq9y8p3j20p00xcnde-370x475.jpg" className="rounded-box" />

                    </div>

                    <div className="carousel-item flex flex-col" id="sliderT2">
                        <div className='flex space-x-5 my-3'>
                            <div className=''>
                                <h1>price $: 200</h1>
                                <p>Rating : ⭐⭐⭐⭐⭐</p>
                            </div>
                            <a href="#sliderT1" className="btn  bg-[#209CEE] border border-white hover:bg-[#209CEE]">❮</a>
                            <a href="#sliderT3" className="btn  bg-[#209CEE] border border-white hover:bg-[#209CEE]">❯</a>

                        </div>
                        <img src="https://cdn.mohinhcaocap.com/wp-content/uploads/2021/12/03105912/6f1312acgy1gwdzq9y8p3j20p00xcnde-370x475.jpg" className="rounded-box" />

                    </div>

                    <div className="carousel-item flex flex-col" id="sliderT3">
                        <div className='flex space-x-5 my-3'>
                            <div className=''>
                                <h1>price $: 200</h1>
                                <p>Rating : ⭐⭐⭐⭐⭐</p>
                            </div>
                            <a href="#sliderT2" className="btn  bg-[#209CEE] border border-white hover:bg-[#209CEE]">❮</a>
                            <a href="#sliderT4" className="btn  bg-[#209CEE] border border-white hover:bg-[#209CEE]">❯</a>

                        </div>
                        <img src="https://cdn.mohinhcaocap.com/wp-content/uploads/2021/12/03105912/6f1312acgy1gwdzq9y8p3j20p00xcnde-370x475.jpg" className="rounded-box" />

                    </div>


                    <div className="carousel-item flex flex-col" id="sliderT4">
                        <div className='flex space-x-5 my-3'>
                            <div className=''>
                                <h1>price $: 200</h1>
                                <p>Rating : ⭐⭐⭐⭐⭐</p>
                            </div>
                            <a href="#sliderT3" className="btn  bg-[#209CEE] border border-white hover:bg-[#209CEE]">❮</a>
                            <a href="#sliderT1" className="btn  bg-[#209CEE] border border-white hover:bg-[#209CEE]">❯</a>

                        </div>
                        <img src="https://cdn.mohinhcaocap.com/wp-content/uploads/2021/12/03105912/6f1312acgy1gwdzq9y8p3j20p00xcnde-370x475.jpg" className="rounded-box" />


                    </div>

                </div>
            </div>

        </div>
    );
};

export default Best;