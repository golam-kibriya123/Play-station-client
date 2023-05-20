import { useEffect, useState } from 'react';
import logo from '../../../assets/logo.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
const Categories = () => {
    const [marvel, setMarvel] = useState([]);
    const newMarvel = marvel.slice(0, 4)

    const [transformers, setTransformers] = useState([]);
    const newTransformers = transformers.slice(0, 4)

    const [multiverse, setMultiverse] = useState([]);
    const newMultiverse = multiverse.slice(0, 4)



    useEffect(() => {
        fetch(`http://localhost:5000/category/Marvel`)
            .then(res => res.json())
            .then(data => setMarvel(data))
    }, []);
    useEffect(() => {
        fetch(`http://localhost:5000/category/transformers`)
            .then(res => res.json())
            .then(data => setTransformers(data))
    }, []);
    useEffect(() => {
        fetch(`http://localhost:5000/category/dc-multiverse`)
            .then(res => res.json())
            .then(data => setMultiverse(data))
    }, []);



    return (
        <div className='my-10'>
            <div className='flex  h-12 mx-auto justify-center my-5'>
                <img src={logo} alt="" className='border-2 border-[#209CEE]' />
                <h1 className='h-full text-white text-2xl bg-[#209CEE] font-bold p-1'>Shop by category</h1>
            </div>
            <div className='flex justify-center text-center'>
                <Tabs>
                    <TabList>
                        <Tab> Transformers</Tab>
                        <Tab>Marvel</Tab>
                        <Tab> DC-Multiverse</Tab>
                    </TabList>

                    <TabPanel>

                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                            {newTransformers.map(x => {

                                return (




                                    <div className={`image-full relative  card h-[400px] lg:h-auto`} key={x._id}>
                                        <figure>
                                            <img src={x.photo} alt="Shoes" className='w-full' /></figure>
                                        <div className="card-body absolute top-0  py-0 w-full h-full flex flex-col justify-between">
                                            <h2 className=" bg-[#209CEE] text-white text-lg font-bold  ">Lorem, ipsum.</h2>
                                            <div className=' text-w'>
                                                <p>price: <span>{x.price}</span> $ </p>
                                                <p>price: <span>{x.rating}</span> </p>
                                            </div>
                                            <Link to={`/details/${x._id}`} className='  p-1  border-2 border-[#209CEE] cursor-pointer text-white   font-bold hover:bg-[#209CEE]  '>Details</Link>
                                        </div>
                                    </div>

                                )
                            })}

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                            {newMarvel.map(x => {

                                return (




                                    <div className={`image-full relative  card h-[400px] lg:h-auto`} key={x._id}>
                                        <figure>
                                            <img src={x.photo} alt="Shoes" className='w-full' /></figure>
                                        <div className="card-body absolute top-0  py-0 w-full flex flex-col justify-between">
                                            <h2 className=" bg-[#209CEE] text-white text-lg font-bold  ">Lorem, ipsum.</h2>
                                            <div className=' text-w'>
                                                <p>price: <span>{x.price}</span> $ </p>
                                                <p>price: <span>{x.rating}</span> </p>
                                            </div>
                                            <Link to={`/details/${x._id}`} className='  p-1  border-2 border-[#209CEE] cursor-pointer text-white   font-bold hover:bg-[#209CEE]  '>Details</Link>
                                        </div>
                                    </div>

                                )
                            })}

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                            {newMultiverse.map(x => {

                                return (




                                    <div className={`image-full relative  card h-[400px] lg:h-auto`} key={x._id}>
                                        <figure>
                                            <img src={x.photo} alt="Shoes" className='w-full' /></figure>
                                        <div className="card-body absolute top-0  py-0 w-full h-full flex flex-col justify-between">
                                            <h2 className=" bg-[#209CEE] text-white text-lg font-bold  ">Lorem, ipsum.</h2>
                                            <div className=' text-w'>
                                                <p>price: <span>{x.price}</span> $ </p>
                                                <p>price: <span>{x.rating}</span> </p>
                                            </div>
                                            <Link to={`/details/${x._id}`} className='  p-1  border-2 border-[#209CEE] cursor-pointer text-white   font-bold hover:bg-[#209CEE]  '>Details</Link>
                                        </div>
                                    </div>

                                )
                            })}

                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default Categories;