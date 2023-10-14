import { createContext, useState, useEffect, useRef } from "react";

const Context = createContext();

export const Controller = ({ children }) => {

    const [state, setState] = useState(false)
    const OnDayClick = () => {
        setState(!state)
        console.log(state);
        if (state === false) {
            document.getElementById("body").style.background = "#000";
            document.getElementById("header").style.background = "#000";
            document.getElementById("header").style.boxShadow = "0px 5px 5px -5px #fff";
            document.getElementById("header").style.webkitBoxShadow = "0px 5px 5px -5px #fff";
            
            document.getElementById("footer").style.background = "#000";
            document.getElementById("footer").style.boxShadow = "0px 5px 5px 5px #fff";
            document.getElementById("footer").style.webkitBoxShadow = "0px 5px 5px 5px #fff";

            document.querySelector("header h1").style.color = "#fff";
        }
        else {
            document.getElementById("body").style.background = "#fff";
            document.getElementById("header").style.background = "#fff";
            document.getElementById("header").style.boxShadow = "0px 5px 5px -5px #000";
            document.getElementById("header").style.webkitBoxShadow = "0px 5px 5px -5px #000";
            document.querySelector("header h1").style.color = "#000";
            
            document.getElementById("footer").style.background = "#fff";
            document.getElementById("footer").style.boxShadow = "0px 5px 5px 5px #000";
            document.getElementById("footer").style.webkitBoxShadow = "0px 5px 5px 5px #000";

            
        }
    }
    const [visable, setVisable] = useState(false)
    const listenToScroll = () => {
        let heightToHidden_1 = 100;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop
        if (winScroll > heightToHidden_1) {
            setVisable(true)
        }
        else {
            setVisable(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll)
    }, [])



    return <Context.Provider value={{
        OnDayClick,
        state
    }}>{children}</Context.Provider>
}

export default Context;