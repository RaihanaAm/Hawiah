import './_all.scss';
import './_responsive.scss';
//*images
import logo from "../aseets/Hawiah.png"
import src1 from "../aseets/qr.png"
//**icons */
// import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdGpsFixed } from "react-icons/md";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
//** firebase */
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '../firebase/firebase';

export const Main = () => {

    // **************** firebase
    const [Users, setUsers] = useState({});
    const fetchPost = async () => {
        const docRef = doc(db, 'users', 'F1clNlBSFoMqykHEGfByvGJZF563', 'info', 'data');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            setUsers(data);
        }
    };
    useEffect(() => {
        fetchPost();

    }, [])

    return (
        <>
            {
                Users.country ? (
                    <>
                        <div className='cards'>
                            <div className='logo'>
                                <img src={logo} alt="" />
                            </div>
                            <div className='bussniss'>
                                <div className='left d-none d-md-flex'>
                                    <img src={Users.image} alt="user" />
                                </div>
                                <div className='right'>
                                    <div className='up'>
                                        <div>
                                            <h1>{Users.name}</h1>
                                            <div className='left  w-100  d-md-none'>
                                                <img src={Users.image} alt="user" />
                                            </div>
                                            <p>{Users.work}</p>
                                        </div>
                                        <div className='image'>
                                            {/* ^^ qr  */}
                                            <img src={src1} alt="" />
                                        </div>
                                        <div className='right w-100 d-md-none'>
                                            <h4><a href={`https://wa.me/${Users.country.phone}${Users.whatsapp}`}><AiOutlineWhatsApp className='icon' /></a></h4>
                                            {/* facebook */}
                                            {
                                                Users.facebook == undefined ?
                                                    <></>
                                                    :
                                                    <h4><a href={`https://${Users.facebook}`}><FiFacebook className='icon' /></a></h4>
                                            }
                                            {/* instagram */}
                                            {
                                                Users.instagram == undefined ?
                                                    <></>
                                                    :
                                                    <h4><a href={`https://${Users.instagram}`}><AiOutlineInstagram className='icon' /></a></h4>
                                            }
                                            {/* twitter */}
                                            {
                                                Users.twitter == undefined ?
                                                    <></>
                                                    :
                                                    <h4><a href={`https://${Users.twitter}`}><BiLogoTwitter className='icon' /></a></h4>
                                            }
                                        </div>
                                    </div>

                                    <div className='down'>
                                        <div className='info'>
                                            <div className='information'>

                                                {/* <h4 className='d-none d-md-flex'><MdOutlineLocationOn className='icon ' /> {Users.city}, {Users.country.name} </h4> */}
                                                <h4 className=' d-none gps d-md-flex'> <a href={Users.gps}><MdGpsFixed className='icon' />{Users.country.name},{Users.city} {Users.address}</a></h4>
                                                <div className='mb-2 gps d-flex  d-md-none'>
                                                    <h4 ><MdGpsFixed className='icon' /></h4>
                                                    <a href={Users.gps}>{Users.country.name},{Users.city} {Users.address} </a>
                                                </div>
                                                <div>
                                                    <h4><a href={`mailto:${Users.email}`}><MdOutlineAlternateEmail className='icon' />{Users.email}</a></h4>
                                                </div>
                                                {/* <div className=' gps d-flex  d-md-none'>
                                                    <h4><MdOutlineLocationOn className='icon ' /></h4>
                                                    <h4>{Users.city}, {Users.country.name}  </h4>
                                                </div> */}


                                                <div className='icons '>
                                                    <div className='me-3'>
                                                        <h4><a href={`tel:${Users.phone}`}><HiOutlinePhone className='icon' />{Users.phone}</a></h4>
                                                        <h4 className='d-none d-md-block'><a href={`https://wa.me/${Users.country.phone}${Users.whatsapp}`}><AiOutlineWhatsApp className='icon' /><span className='text'>{Users.whatsapp}</span></a></h4>
                                                        {/* website */}
                                                        {
                                                            Users.website == undefined ?
                                                                <></>
                                                                :
                                                                <h4><a href={Users.website}><CgWebsite className='icon' />{Users.website}</a></h4>
                                                        }
                                                        {/* youtube */}
                                                        {
                                                            Users.youtube == undefined ?
                                                                <></>
                                                                :
                                                                <h4><a href={Users.youtube}><FaYoutube className='icon' />Youtube  </a></h4>
                                                        }
                                                    </div>
                                                    <div className='right ms-md-3 d-none d-md-block'>

                                                        {/* linkdin*/}
                                                        {
                                                            Users.linkdin == undefined ?
                                                                <></>
                                                                :
                                                                <h4><a href={`https://${Users.facebook}`}><BiLogoLinkedin className='icon' />{Users.name} </a></h4>
                                                        }

                                                        {/* facebook */}
                                                        {
                                                            Users.facebook == undefined ?
                                                                <></>
                                                                :
                                                                <h4><a href={`https://${Users.facebook}`}><FiFacebook className='icon' />Facebook </a></h4>
                                                        }
                                                        {/* instagram */}
                                                        {
                                                            Users.instagram == undefined ?
                                                                <></>
                                                                :
                                                                <h4><a href={`https://${Users.instagram}`}><AiOutlineInstagram className='icon' />Instagram</a></h4>
                                                        }
                                                        {/* twitter */}
                                                        {
                                                            Users.twitter == undefined ?
                                                                <></>
                                                                :
                                                                <h4><a href={`https://${Users.twitter}`}><BiLogoTwitter className='icon' />Twitter </a></h4>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>Loading  code...</p>
                )
            }
        </>
    )
}