import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { KeyboardArrowDown } from "@material-ui/icons";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["JavaScript", "Mongoose", "NodeJS", "Express", "React", "Angular", "SQL", " and more!"],
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/Travis.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, my name is</h2>
                    <h1>Travis Price</h1>
                    <h3>
                        I am a <span>Web Developer</span>
                    </h3>
                    <h3>
                        I am experienced in <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#about">
                    <KeyboardArrowDown className="icon" />
                </a>
            </div>
        </div>
    )
}
