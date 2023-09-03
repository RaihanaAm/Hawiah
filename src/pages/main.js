import './_all.scss';
import './_responsive.scss';
//*images
import logo from "../aseets/Hawiah.png"
import src from "../aseets/sjjsjs.png"
import src1 from "../aseets/qr.png"
//**icons */
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdGpsFixed } from "react-icons/md";

export const Main = () => (
    <div className='cards'>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <div className='bussniss'>
            <div className='left d-none d-md-flex'>
                <img src={src} alt="user" />
            </div>
            <div className='right'>
                <div className='up'>
                    <div>
                        <h1>ALEX SMITH</h1>
                        <div className='left  w-100  d-md-none'>
                            <img src={src} alt="user" />
                        </div>
                        <p>Web developer</p>
                    </div>
                    <div className='image'>
                        <img src={src1} alt="" />
                    </div>
                    <div className='right w-100 d-md-none'>
                        <h4><AiOutlineWhatsApp className='icon' /><span className='text'>Whatsapp.com</span></h4>
                        <h4><a href=""><FiFacebook className='icon' /><span className='text'>Facebook.com</span></a></h4>
                        <h4><a href=""><AiOutlineInstagram className='icon' /><span className='text'>Instagram.com</span></a></h4>
                    </div>
                </div>

                <div className='down'>
                    <div className='info'>
                        <div className='information'>
                            <h4 className='d-none d-md-flex'><MdOutlineLocationOn className='icon ' />123 Lorem ipsum dolor. Casablanca ,Morocco</h4>
                            <h4 className=' d-none gps d-md-flex'> <a href="https://goo.gl/maps/W6To7yc6N8Fp7RKeA"><MdGpsFixed className='icon' /> https://goo.gl/maps/W6To7yc6N8Fp7RKeA </a></h4>
                            <div className=' gps d-flex  d-md-none'>
                                <h4><MdOutlineLocationOn className='icon ' /></h4>
                                <h4>123 Lorem ipsum dolor. Casablanca ,Morocco</h4>
                            </div>
                            <div className='mb-2 gps d-flex  d-md-none'>
                                <h4 ><MdGpsFixed className='icon' /></h4>
                                <a href="https://goo.gl/maps/W6To7yc6N8Fp7RKeA"> https://goo.gl/maps/W6To7yc6N8Fp7RKeA </a>
                            </div>
                            <div className='icons '>
                                <div className='me-3'>
                                    <h4><HiOutlinePhone className='icon' />+123 456 7891</h4>
                                    <h4><a href=""><MdOutlineAlternateEmail className='icon' />Email.email@gmail.com</a></h4>
                                    <h4><a href=""><CgWebsite className='icon' />www.website.com</a></h4>
                                </div>
                                <div className='right ms-md-3 d-none d-md-block'>
                                    <h4><AiOutlineWhatsApp className='icon' /><span className='text'>Whatsapp.com</span></h4>
                                    <h4><a href=""><FiFacebook className='icon' /><span className='text'>Facebook.com</span></a></h4>
                                    <h4><a href=""><AiOutlineInstagram className='icon' /><span className='text'>Instagram.com</span></a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)