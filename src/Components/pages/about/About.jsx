import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Logo_day from '../../image/Rectangle 8.png';
import Logo_mode from '../../image/Rectangle 9.png';
import Context from '../../layout/context/Context';
const About = () => {

    const { state } = useContext(Context);

    const [visable, setVisable] = useState(false)
    const listenToScroll = () => {
        let heightToHidden_1 = 600;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop
        if (winScroll > heightToHidden_1) {
            setVisable(true)
            setTimeout(() => {
                document.getElementById('about_list').style.opacity = '1';
                document.getElementById('about_list').style.transform = 'translate(0, 0px)';
            }, 400)
            setTimeout(() => {
                document.getElementById('about_last_title').style.opacity = '1';
                document.getElementById('about_last_title').style.transform = 'translate(0, 0px)';
            }, 200);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll)
    }, [])

    return (
        <>
            <section className='about' id="about">
                <Container>
                    <div className="about_top">
                        <h1 className={`about_title ${state ? "control-color" : "control-color-plus"} ${visable ? "active" : ""}`}>about me</h1>
                        <div className="about_logo_group">
                            <img src={`${state ? Logo_mode : Logo_day}`} className={`about_user_logo ${visable ? "active" : ""}`} alt="" />
                        </div>
                        <div className="about_title_group">
                            <h2 className={`about_title_bg ${state ? "control-color" : "control-color-plus"} ${visable ? "active" : ""}`}>&nbsp;&nbsp;I’m Abdulaziz Komiljonov</h2>
                            <p className={`about_text_bg ${state ? "control-color" : "control-color-plus"} ${visable ? "active" : ""}`}>
                                &nbsp;&nbsp;Hello, I'm Abdulaziz - UX/UI designer and Web designer from Uzbekistan. I am interested in design and everything related to it.
                            </p>
                            <p className={`about_text_ba ${state ? "control-color" : "control-color-plus"} ${visable ? "active" : ""}`}>
                                &nbsp;&nbsp;A dedicated and self-motivated individual seeking a challenging career opportunity within an organization that will allow me to develop my skills while contributing to the organization's goals.
                            </p>
                            <h2 id="about_last_title" className={`about_last_title ${state ? "control-color" : "control-color-plus"}`}>&nbsp;&nbsp;biography</h2>
                            <ul className="about_list" id="about_list">
                                <li className="about_item">
                                    <span className={`about_item_span ${state ? "control-background" : "control-background-plus"}`} />
                                    <p className={`about_info_class ${state ? "control-color" : "control-color-plus"}`}>full name: Abdulaziz Komiljonov</p>
                                </li>
                                <li className="about_item">
                                    <span className={`about_item_span ${state ? "control-background" : "control-background-plus"}`} />
                                    <p className={`about_info_class ${state ? "control-color" : "control-color-plus"}`}>Birthday: </p>
                                </li>
                                <li className="about_item">
                                    <span className={`about_item_span ${state ? "control-background" : "control-background-plus"}`} />
                                    <p className={`about_info_class ${state ? "control-color" : "control-color-plus"}`}>City: Tashkent</p>
                                </li>
                                <li className="about_item">
                                    <span className={`about_item_span ${state ? "control-background" : "control-background-plus"}`} />
                                    <p className={`about_info_class ${state ? "control-color" : "control-color-plus"}`}>Country: Uzbekistan</p>
                                </li>
                                <li className="about_item">
                                    <span className={`about_item_span ${state ? "control-background" : "control-background-plus"}`} />
                                    <p className={`about_info_class ${state ? "control-color" : "control-color-plus"}`}>Phone: +998 (88) 036 37 17</p>
                                </li>
                                <li className="about_item">
                                    <span className={`about_item_span ${state ? "control-background" : "control-background-plus"}`} />
                                    <p className={`about_info_class ${state ? "control-color" : "control-color-plus"}`}>age: 19 years old</p>
                                </li>
                                <li className="about_item">
                                    <span className={`about_item_span ${state ? "control-background" : "control-background-plus"}`} />
                                    <a href="#!" className={`about_info_class ${state ? "control-color" : "control-color-plus"}`}>for any questions you may have</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default About