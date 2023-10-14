
import { Container } from 'react-bootstrap'
import React, { useRef, useState, useContext, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Context from '../../layout/context/Context';

const Contact = () => {
    const { state } = useContext(Context);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9md1ozj', 'template_yhgafjt', form.current, 'iF7WgBueyj5CRcfYk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    // const [ names, setNames ] = useState("")

    const onClickClear = (w) => {
        // setNames( )
    }

    const [visable, setVisable] = useState(false)
    const listenToScroll = () => {
        let heightToHidden_1 = 3100;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop
        if (winScroll > heightToHidden_1) {
            setVisable(true)

            setTimeout(() => {
                document.getElementById("input_1").style.opacity = "1"
                document.getElementById("label_1").style.opacity = "1"
                document.getElementById('label_1').style.transform = 'translate(0, 0px)';
                document.getElementById('input_1').style.transform = 'translate(0, 0px)';
            }, 200);
            setTimeout(() => {
                document.getElementById("label_2").style.opacity = "1"
                document.getElementById("input_2").style.opacity = "1"
                document.getElementById('label_2').style.transform = 'translate(0, 0px)';
                document.getElementById('input_2').style.transform = 'translate(0, 0px)';
            }, 400);
            setTimeout(() => {
                document.getElementById("label_3").style.opacity = "1"
                document.getElementById("input_3").style.opacity = "1"
                document.getElementById('label_3').style.transform = 'translate(0, 0px)';
                document.getElementById('input_3').style.transform = 'translate(0, 0px)';
            }, 600);
            setTimeout(() => {
                document.getElementById("input_send").style.opacity = "1"
                document.getElementById('input_send').style.transform = 'translate(0, 0px)';
            }, 800);

        }
    }
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll)
    }, [])

    return (
        <>
            <section className='contact' id="contact">
                <Container>
                    <div className="contact_top">
                        <h2 className={`skills_title ${state ? "control-color" : "control-color-plus"} ${visable ? "active" : ""}`}>my Contact</h2>
                        <form className='contact_form' ref={form} onSubmit={sendEmail}>
                            <label id="label_1" className={`contact_label ${state ? "control-color" : "control-color-plus"}`}>Name</label>

                            <input id="input_1" className={`contact_input ${state ? "control-color control-border-plus" : "control-color-plus control-border"}`} type="text" name="from_name" required />

                            <label id="label_2" className={`contact_label ${state ? "control-color" : "control-color-plus"}`} >Email</label>

                            <input id="input_2" className={`contact_input ${state ? "control-color control-border-plus" : "control-color-plus control-border"}`} type="email" name="email" required />

                            <label id="label_3" className={`contact_label ${state ? "control-color" : "control-color-plus"}`} >Message</label>

                            <textarea id="input_3" className={`contact_input contact_message_input ${state ? "control-color control-border-plus" : "control-color-plus control-border"}`} name="message" required />

                            <input id="input_send" className={`contact_send_btn ${state ? "control-border-plus control-background-plus control-color" : "control-border control-background control-color-plus"}`} type="submit" value="send a message" />
                        </form>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Contact