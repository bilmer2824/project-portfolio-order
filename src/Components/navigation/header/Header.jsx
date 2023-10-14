import React, { useEffect, useState, useContext } from 'react'
import { Container, Button } from 'react-bootstrap';

import { BiSun } from 'react-icons/bi';
import { MdNightlight } from 'react-icons/md';
import { TbLanguage } from 'react-icons/tb'
import Context from '../../layout/context/Context';
const Header = () => {
    const {OnDayClick, state} =  useContext(Context);

    

    return (
        <>
            <header className={`header`} id="header">
                <Container>
                    <div className="header_top">
                        <div className="header_title_group">
                            <h1 className="header_title">ABDULAZIZ</h1>
                            <Button onClick={OnDayClick} className={` header_day_btn ${state && "active"}`}>
                                <div className={`header_day_touch ${state && "active"}`}>
                                    <BiSun className={`header_day_icons ${state && "active"}`} />
                                    <MdNightlight className={`header_day_icons ${state && "active"}`} />
                                </div>
                            </Button>
                        </div>
                        <div className="header_link_group">
                            <ul className="header_list">
                                <li className="header_item">
                                    <a href="#home" className={`header_link ${state ? "control-color" : "control-color-plus"}`}>home</a>
                                </li>
                                <li className="header_item">
                                    <a href="#about" className={`header_link ${state ? "control-color" : "control-color-plus"}`}>about</a>
                                </li>
                                <li className="header_item">
                                    <a href="#skills" className={`header_link ${state ? "control-color" : "control-color-plus"}`}>skills</a>
                                </li>
                                <li className="header_item">
                                    <a href="#word" className={`header_link ${state ? "control-color" : "control-color-plus"}`}>word</a>
                                </li>
                                <li className="header_item">
                                    <a href="#contact" className={`header_link ${state ? "control-color" : "control-color-plus"}`}>contact</a>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Header