import { Container } from 'react-bootstrap'
import React, { useState, useEffect, useContext } from 'react';


import logo_1 from '../../image/Rectangle 7.png'
import logo_2 from '../../image/Rectangle 7.png'
import logo_3 from '../../image/Rectangle 7.png'
import logo_4 from '../../image/Rectangle 7.png'
import logo_5 from '../../image/Rectangle 7.png'
import logo_6 from '../../image/Rectangle 7.png'
import Context from '../../layout/context/Context';

const Word = () => {

    const { state } = useContext(Context);

    const [visable, setVisable] = useState(false)
    const listenToScroll = () => {
        let heightToHidden_1 = 2300;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop
        if (winScroll > heightToHidden_1) {
            setVisable(true)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll)
    }, [])
    return (
        <>
            <section className='word' id="word">
                <Container>
                    <div className="word_top">
                        <h2 className={`about_title ${state ? "control-color" : "control-color-plus"} ${visable ? "active" : ""} `}>my work</h2>
                        <div className={`word_block ${visable ? "active" : ""}`}>
                            <div className="word_block_logos">
                                <img src={logo_1} className="word_image" alt="" />
                            </div>
                            <div className="word_block_logos">
                                <img src={logo_2} className="word_image" alt="" />
                            </div>
                            <div className="word_block_logos">
                                <img src={logo_3} className="word_image" alt="" />
                            </div>
                            <div className="word_block_logos">
                                <img src={logo_4} className="word_image" alt="" />
                            </div>
                            <div className="word_block_logos">
                                <img src={logo_5} className="word_image" alt="" />
                            </div>
                            <div className="word_block_logos">
                                <img src={logo_6} className="word_image" alt="" />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Word