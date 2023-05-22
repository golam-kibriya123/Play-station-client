import logo from '../../assets/logo.png'
const Footer = () => {
    return (
        <div className='flex flex-col mt-20'>
            <footer className="footer p-10 bg-base-200 text-base-content ">
                <div>
                    <img src={logo} className="h-12 w-12" alt="" />
                    <p>Play Station<br />Providing A huge types of toys</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>



            </footer>
            <div className='flex flex-row items-center justify-center bg-black text-gray-100'>
                <p>Copyright © 2023 - All right reserved</p>
                <span>Play Station</span><img src={logo} className="h-4 w-4" alt="" />
            </div>
        </div>
    );
};

export default Footer;