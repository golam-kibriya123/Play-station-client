

const Banner = () => {


    return (
        <div className="carousel w-full h-[90vh] relative">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://images.hdqwalls.com/download/transformers-prime-kx-1600x900.jpg" className="w-full  h-[90vh] md:h-[100vh]" />

                <div className="absolute h-full  text-white  flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  ">

                    <div className='w-1/2 space-y-7 pl-7'>
                        <h2 className='font-bold md:text-6xl text-3xl '>Affordable Price For All Toys</h2>
                        <p className='md:text-xl text-ms'>There are many variations of super hero toys are available, but the majority have suffered alteration in some form</p>

                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>


            <div id="slide2" className="carousel-item relative w-full ">
                <img src="https://images.hdqwalls.com/download/fighting-stance-marvels-spider-man-miles-morales-4k-6y-1600x900.jpg" className="w-full h-[90vh] md:h-[100vh]" />
                <div className="absolute h-full  text-white  flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  ">

                    <div className='w-1/2 space-y-7 pl-7'>
                        <h2 className='font-bold md:text-6xl text-3xl '>Affordable Price For All Spider-Man Toys</h2>
                        <p className='md:text-xl text-ms'>There are many variations of super hero toys are available, but the majority have suffered alteration in some form</p>

                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://images.hdqwalls.com/download/4k-the-batman-knight-yu-1600x900.jpg" className="w-full h-[90vh] md:h-[100vh]" />

                <div className="absolute h-full  text-white  flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  ">

                    <div className='w-1/2 space-y-7 pl-7'>
                        <h2 className='font-bold md:text-6xl text-3xl '>Affordable Price For Batman</h2>
                        <p className='md:text-xl text-ms'>There are many variations of batman toys are available, but the majority have suffered alteration in some form</p>

                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://images.hdqwalls.com/download/iron-man-helmet-closed-8k-mm-1600x900.jpg" className="w-full h-[90vh] md:h-[100vh]" />
                <div className="absolute h-full  text-white  flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  ">

                    <div className='w-1/2 space-y-7 pl-7'>
                        <h2 className='font-bold md:text-6xl text-3xl '>Affordable Price For Iron-Man-Helmet</h2>
                        <p className='md:text-xl text-ms'>There are many variations of super hero toys are available, but the majority have suffered alteration in some form</p>

                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;