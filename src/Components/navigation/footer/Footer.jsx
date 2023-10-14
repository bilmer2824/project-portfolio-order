import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';

import { FaTelegramPlane } from 'react-icons/fa' 
import { FaBehance } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsDribbble } from 'react-icons/bs'
import Context from '../../layout/context/Context';

const Footer = () => {
    const { state } = useContext(Context);
    return (
        <>
            <footer className="footer" id="footer">
                <Container>
                    <div className="footer_top">
                        <div className="footer_title_group">
                            <h2 className={`footer_title ${state ? "control-color" : "control-color-plus"}`}>Abdulaziz Komiljonov</h2>
                            <p className="footer_text">graphic designer</p>
                            <h2 className={`footer_years_text ${state ? "control-color" : "control-color-plus"}`}>2022</h2>
                        </div>
                        <div className={`footer_center_span ${state ? "control-background" : "control-background-plus"}`}/>
                        <h1 className={`footer_pr_title ${state ? "control-color" : "control-color-plus"}`}>portfolio</h1>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer