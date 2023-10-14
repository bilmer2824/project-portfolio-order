import React, { useEffect, useState, useContext } from 'react'
import { Container } from 'react-bootstrap';

import logo_1 from '../../image/figma 1.png';
import logo_2 from '../../image/adobe.png';
import logo_3 from '../../image/ps.png';
import { AiFillStar } from 'react-icons/ai'
import Context from '../../layout/context/Context';
const Skills = () => {

    const { state } = useContext(Context);
    const [visable, setVisable] = useState(false)
    const listenToScroll = () => {
        let heightToHidden_1 = 1500;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop
        if (winScroll > heightToHidden_1) {
            setVisable(true)
            setTimeout(() => { document.getElementById('bg_icone_1').style.transform = "rotateY(0deg)"; }, 0);
            setTimeout(() => { document.getElementById('bg_icone_2').style.transform = "rotateY(0deg)"; }, 200);
            setTimeout(() => { document.getElementById('bg_icone_3').style.transform = "rotateY(0deg)"; }, 400);
            setTimeout(() => { document.getElementById('bg_icone_4').style.transform = "rotateY(0deg)"; }, 600);
            setTimeout(() => { document.getElementById('bg_icone_5').style.transform = "rotateY(0deg)"; }, 800);
            setTimeout(() => { document.getElementById('bg_icone_6').style.transform = "rotateY(0deg)"; }, 1000);
            setTimeout(() => { document.getElementById('bg_icone_7').style.transform = "rotateY(0deg)"; }, 1200);
            setTimeout(() => { document.getElementById('bg_icone_8').style.transform = "rotateY(0deg)"; }, 1400);
            setTimeout(() => { document.getElementById('bg_icone_9').style.transform = "rotateY(0deg)"; }, 1600);
            setTimeout(() => { document.getElementById('bg_icone_10').style.transform = "rotateY(0deg)"; }, 1800);
            setTimeout(() => { document.getElementById('bg_icone_11').style.transform = "rotateY(0deg)"; }, 2000);
            setTimeout(() => { document.getElementById('bg_icone_12').style.transform = "rotateY(0deg)"; }, 2200);
            setTimeout(() => { document.getElementById('bg_icone_13').style.transform = "rotateY(0deg)"; }, 2400);
            setTimeout(() => { document.getElementById('bg_icone_14').style.transform = "rotateY(0deg)"; }, 2600);
            setTimeout(() => { document.getElementById('bg_icone_15').style.transform = "rotateY(0deg)"; }, 2800);

        }
    }
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll)
    }, [])
    return (
        <>
            <section className='skills' id="skills">
                <Container>
                    <div className="skills_top">
                        <h2  className={`skills_title ${state ? "control-color" : "control-color-plus"} ${visable ? "active" : ""}`}>my skills</h2>
                        <div className={`skills_logo_block ${visable ? "active" : ""}`}>
                            <div className="skills_block">
                                <img src={logo_1} className="skills_img skills_figma" alt="logo" />
                                <h4 className={`skills_bg_title ${state ? "control-color" : "control-color-plus"}`}>Figma</h4>
                                <div className="skills_icon_block">
                                    <AiFillStar id="bg_icone_1" className={`skills_bg_icon bg_icone_1 ${visable ? "active" : ""} ${state ? "control-color" : "control-color-plus"}`} />
                                    <AiFillStar id="bg_icone_2" className={`skills_bg_icon bg_icone_2 ${visable ? "active" : ""} ${state ? "control-color" : "control-color-plus"}`} />
                                    <AiFillStar id="bg_icone_3" className={`skills_bg_icon bg_icone_3 ${visable ? "active" : ""} ${state ? "control-color" : "control-color-plus"}`} />
                                    <AiFillStar id="bg_icone_4" className={`skills_bg_icon bg_icone_4 ${visable ? "active" : ""} ${state ? "control-color" : "control-color-plus"}`} />
                                    <AiFillStar id="bg_icone_5" className={`skills_bg_icon bg_icone_5 ${visable ? "active" : ""} ${state ? "control-color" : "control-color-plus"}`} />
                                </div>
                            </div>
                            <div className="skills_block">
                                <img src={logo_2} className="skills_img skills_adobe" alt="logo" />
                                <h4 className={`skills_bg_title ${state ? "control-color" : "control-color-plus"}`}>Adobe Illustrator</h4>
                                <div className="skills_icon_block">
                                    <AiFillStar id="bg_icone_6" className={`skills_bg_icon  bg_icone_6  ${visable ? "active" : ""}  ${state ? "control-color" : "control-color-plus"}`} />
                                    <AiFillStar id="bg_icone_7" className={`skills_bg_icon  bg_icone_7  ${visable ? "active" : ""}  ${state ? "control-color" : "control-color-plus"}`} />
                                    <AiFillStar id="bg_icone_8" className={`skills_bg_icon  bg_icone_8  ${visable ? "active" : ""}  ${state ? "control-color" : "control-color-plus"}`} />
                                    <AiFillStar id="bg_icone_9" className={`skills_bg_icon  bg_icone_9  ${visable ? "active" : ""}  ${state ? "control-color" : "control-color-plus"}`} />
                                    <AiFillStar id="bg_icone_10" className={`skills_bg_icon  bg_icone_10 ${visable ? "active" : ""} ${state ? "control-color" : "control-color-plus"}`} />
                                </div>
                            </div>
                            <div className="skills_block">
                                <img src={logo_3} className="skills_img skills_pht" alt="logo" />
                                <h4 className={`skills_bg_title ${state ? "control-color" : "control-color-plus"}`}>Adobe Photoshop</h4>
                                <div className="skills_icon_block">
                                    <AiFillStar id="bg_icone_11" className={`skills_bg_icon bg_icone_11 ${visable ? "active" : ""} ${state ? "control-color" : "control-color-plus"}`} />
                                    <AiFillStar id="bg_icone_12" className={`skills_bg_icon bg_icone_12 ${visable ? "active" : ""} ${state ? "control-color" : "control-color-plus"}`} />
                                    <AiFillStar id="bg_icone_13" className={`skills_bg_icon bg_icone_13 ${visable ? "active" : ""} ${state ? "control-color" : "control-color-plus"}`} />
                                    <AiFillStar id="bg_icone_14" className={`skills_bg_icon bg_icone_14 ${visable ? "active" : ""} ${state ? "control-color" : "control-color-plus"}`} />
                                    <AiFillStar id="bg_icone_15" className={`skills_bg_icon bg_icone_15 ${visable ? "active" : ""} ${state ? "control-color" : "control-color-plus"}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Skills