import { useEffect } from 'react';
import logo from '../../../assets/logo.png'
import Aos from 'aos';
import 'aos/dist/aos.css';


const Gallery = () => {

    useEffect(() => {
        Aos.init({})
    }, [])

    return (

        <div className='mt-10 '   data-aos="zoom-in" data-aos-duration="800" data-aos-offset="200">
            <div className='flex  h-12 mx-auto justify-center my-5'>
                <img src={logo} alt="" className='border-2 border-[#209CEE]' />
                <h1 className='h-full text-white text-2xl bg-[#209CEE] font-bold p-1'>Gallery</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <div className="relative " data-aos="zoom-in" data-aos-duration="800" data-aos-offset="200"
                    >
                        <img className="h-full max-w-full rounded-lg " src="https://img.freepik.com/free-photo/close-up-home-made-robot_23-2148863347.jpg?size=626&ext=jpg&ga=GA1.1.293727738.1671602860&semt=ais" alt="" />
                        <button className="absolute top-1/2 left-1/2">hello</button>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="800" data-aos-offset="200">
                        <img className="h-full max-w-full rounded-lg" src="https://img.freepik.com/premium-photo/robot-transformer-red-blue-green-background_528985-1702.jpg?size=626&ext=jpg&ga=GA1.1.293727738.1671602860&semt=ais" alt="" />
                    </div>
                    <div  data-aos="zoom-in" data-aos-duration="800" data-aos-offset="200">
                        <img className="h-full max-w-full rounded-lg" src="https://img.freepik.com/free-photo/ants-mission-cute-robots-space-suits-adventure-outward-generative-ai_8829-2868.jpg?size=626&ext=jpg&ga=GA1.1.293727738.1671602860&semt=ais" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div  data-aos="zoom-in" data-aos-duration="800" data-aos-offset="200" >
                        <img className="h-full max-w-full rounded-lg" src="https://img.freepik.com/free-photo/two-futuristic-robots-before-match-blue-red-color-generative-ai_191095-1280.jpg?size=626&ext=jpg&ga=GA1.1.293727738.1671602860&semt=ais" alt="" />
                    </div>
                    <div  data-aos="zoom-in" data-aos-duration="800" data-aos-offset="200">
                        <img className="h-full max-w-full rounded-lg" src="https://cdn.mohinhcaocap.com/wp-content/uploads/2022/09/07192226/O1CN01zb6MdC1IapBaJg2XV_2868430910-370x475.jpg" alt="" />
                    </div>
                    <div  data-aos="zoom-in" data-aos-duration="800" data-aos-offset="200">
                        <img className="h-full max-w-full rounded-lg" src="https://img.freepik.com/premium-photo/robot-robot-are-standing-wooden-floor_782419-9870.jpg?w=1060" alt="" />
                    </div>
                </div>

                <div className="grid gap-4">
                    <div  data-aos="zoom-in" data-aos-duration="800" data-aos-offset="200">
                        <img className="h-full max-w-full rounded-lg" src="https://i.pinimg.com/originals/cd/e7/0b/cde70bc7fa2523ae238abceba1db255c.jpg" alt="" />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="800" data-aos-offset="200">
                        <img className="h-full max-w-full rounded-lg" src="https://cdn.mohinhcaocap.com/wp-content/uploads/2021/11/03124253/6a75f464ly1gxxg01f8m2j22dc35su10-scaled-370x475.jpg" alt="" />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="800" data-aos-offset="200">
                        <img className="h-full max-w-full rounded-lg" src="https://cdn.mohinhcaocap.com/wp-content/uploads/2021/11/29171925/bs-03.jpg" alt="" />
                    </div>
                </div>

                <div className="grid gap-4">
                    <div  data-aos="zoom-in" data-aos-duration="800" data-aos-offset="200" >
                        <img className="h-full max-w-full rounded-lg" src="https://img.freepik.com/premium-photo/robot-transformer-red-blue-black-background_528985-1489.jpg?size=626&ext=jpg&ga=GA1.1.293727738.1671602860&semt=ais" alt="" />
                    </div>
                    <div  data-aos="zoom-in" data-aos-duration="800" data-aos-offset="200">
                        <img className="h-full max-w-full rounded-lg" src="https://cdn.mohinhcaocap.com/wp-content/uploads/2021/12/03105912/6f1312acgy1gwdzq9y8p3j20p00xcnde-370x475.jpg" alt="" />
                    </div>
                    <div  data-aos="zoom-in" data-aos-duration="800" data-aos-offset="200">
                        <img className="h-full max-w-full rounded-lg" src="https://cdn.mohinhcaocap.com/wp-content/uploads/2023/02/07181905/6f1312acgy1h865sg0p2sj20p00xcnbo-370x475.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Gallery;