import { useNavigate } from "react-router-dom";

const Error = () => {
    const back = useNavigate();

    return (
        <div className='w-full h-[100vh] bg-gray-400 flex flex-col items-center'><button className='btn rounded-none hover:bg-green-400' onClick={() => { back('/') }}>
            GO TO Home</button >
            <img src="https://png.pngtree.com/element_pic/16/11/14/4810d7467c24879d43006148e3c0c73a.jpg" alt=""
                className='h-full mx-auto' />

        </div>
    )
};

export default Error;