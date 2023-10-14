import React, { useContext } from 'react'
import { Container, Button } from 'react-bootstrap';
import logo_1 from '../../image/Ellipse 2.png'
import logo_2 from '../../image/Ellipse 3.png'
import logo_3 from '../../image/Ellipse 4.png'
import logo_4 from '../../image/Ellipse 5.png'
import logo_user from '../../image/Rectangle 4.png';
import logo_user_dark from '../../image/Rectangle 5.png';


import { FaTelegramPlane } from 'react-icons/fa'
import { FaBehance } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsDribbble } from 'react-icons/bs'
import Context from '../../layout/context/Context';



const Home = () => {
    const { state } = useContext(Context);
    return (
        <>
            <section className='home' id="home">
                <Container>
                    <div className="home_top">
                        <div className="home_title_group">
                            <h1 className={`home_title_m1 ${state ? "control-color" : "control-color-plus"}`}>hello</h1>
                            <h1 className={`home_title_m2 ${state ? "control-color" : "control-color-plus"}`}>I’m Abdulaziz Komiljonov Web Designer and Ui/Ux Designer</h1>
                            <a href="#contact" className="">
                                <Button className={`home_btn ${state ? "control-background" : "control-background-plus"} ${state ? "control-color-plus" : "control-color"}`}>
                                    Contact
                                </Button>
                            </a>
                            <ul className="home_list">
                                <li className={`home_item ${state ? "control-background" : "control-background-plus"}`}>
                                    <a href="#!" className="home_link">
                                        <FaTelegramPlane className={`home_link_icon ${state ? "control-color-plus" : "control-color"}`} />
                                    </a>
                                </li>
                                <li className={`home_item ${state ? "control-background" : "control-background-plus"}`}>
                                    <a href="#!" className="home_link">
                                        <FaBehance className={`home_link_icon ${state ? "control-color-plus" : "control-color"}`} />
                                    </a>
                                </li>
                                <li className={`home_item ${state ? "control-background" : "control-background-plus"}`}>
                                    <a href="#!" className="home_link home_instagram">
                                        <AiOutlineInstagram className={`home_link_icon home_instagram ${state ? "control-color-plus" : "control-color"}`} />
                                    </a>
                                </li>
                                <li className={`home_item ${state ? "control-background" : "control-background-plus"}`}>
                                    <a href="#!" className="home_link">
                                        <BsDribbble className={`home_link_icon ${state ? "control-color-plus" : "control-color"}`} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='home_logo_group'>
                            <img src={`${state ? logo_user_dark : logo_user}`} className="home_user_logo" alt="logo" />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Home