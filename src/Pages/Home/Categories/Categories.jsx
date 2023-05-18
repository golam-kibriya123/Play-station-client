import logo from '../../../assets/logo.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Categories = () => {
    return (
        <div className='my-10'>
            <div className='flex  h-12 mx-auto justify-center my-5'>
                <img src={logo} alt="" className='border-2 border-[#209CEE]' />
                <h1 className='h-full text-white text-2xl bg-[#209CEE] font-bold p-1'>Shop by category</h1>
            </div>
            <div className='flex justify-center text-center'>
                <Tabs>
                    <TabList>
                        <Tab> OPTIMUS</Tab>
                        <Tab>IRONMAN</Tab>
                        <Tab> MEGATRON</Tab>
                    </TabList>

                    <TabPanel>

                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                            <img src="https://cdn.mohinhcaocap.com/wp-content/uploads/2021/12/03105912/6f1312acgy1gwdzq9y8p3j20p00xcnde-370x475.jpg" alt="" className='h-60' />
                            <img src="https://cdn.mohinhcaocap.com/wp-content/uploads/2023/02/07174839/frame_Transformers-MDLX-Nemesis-Prime-01-370x475.jpg" alt="" className='h-60' />
                            <img src="https://cdn.mohinhcaocap.com/wp-content/uploads/2023/02/07181905/6f1312acgy1h865sg0p2sj20p00xcnbo-370x475.jpg" alt="" className='h-60' />
                            <img src="https://cdn.mohinhcaocap.com/wp-content/uploads/2019/09/15113055/61d92bd6a40b5e55071a1-scaled-370x475.jpg" alt="" className='h-60' />
                            <img src="https://cdn.mohinhcaocap.com/wp-content/uploads/2019/09/15113048/DSC07945-scaled-370x475.jpg" alt="" className='h-60' />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div  className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                            <img src="https://cdn.mohinhcaocap.com/wp-content/uploads/2023/05/11223409/WeChat-Image_20221019141137-370x475.jpg" alt="" className='h-60' />
                            <img src="https://cdn.mohinhcaocap.com/wp-content/uploads/2023/03/18002337/680e9295gy1haacuwi4e8j21dg0u079o-370x475.jpg" alt="" className='h-60' />
                            <img src="https://cdn.mohinhcaocap.com/wp-content/uploads/2022/09/07192226/O1CN01zb6MdC1IapBaJg2XV_2868430910-370x475.jpg" alt="" className='h-60' />
                            <img src="https://cdn.mohinhcaocap.com/wp-content/uploads/2023/05/08185612/640-6-370x475.jpeg" alt="" className='h-60' />
                            <img src="https://cdn.mohinhcaocap.com/wp-content/uploads/2022/12/21115941/640-7-370x475.jpg" alt="" className='h-60' />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                            <img src="https://cdn.mohinhcaocap.com/wp-content/uploads/2020/01/15113425/13134637703_498382744-370x475.jpg" alt="" className='h-60' />
                            <img src="https://cdn.mohinhcaocap.com/wp-content/uploads/2022/03/01124210/056a726e4938bc66e529-370x475.jpg" alt="" className='h-60' />
                            <img src="https://cdn.mohinhcaocap.com/wp-content/uploads/2019/01/15113842/BMB-LS06_1-scaled-370x475.jpg" alt="" className='h-60' />
                            <img src="https://cdn.mohinhcaocap.com/wp-content/uploads/2022/03/01124215/278a098032d6c7889ec7-370x475.jpg" alt="" className='h-60' />
                            <img src="https://cdn.mohinhcaocap.com/wp-content/uploads/2022/10/28183201/WeChat-Image_20221028182707-370x475.jpg" alt="" className='h-60' />
                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default Categories;