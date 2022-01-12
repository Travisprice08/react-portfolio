import { useState } from "react"
import "./about.scss"

export default function About() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [

        {
            id: "1",
            // icon: "./assets/mobile.png",
            title: "About Me",
            desc: "My name is Travis, I am 31 years old and live in San Diego, CA. Originally from Kansas City, MO.",
            img: "./assets/Hobby.png",
        },
        {
            id: "2",
            // icon: "./assets/globe.png",
            title: "Road to WebDev",
            desc:
                "I moved from Kansas City to San Diego in 2018 and was forced out of my confort zone to meet new friends",
            img: "./assets/Road.png",
        },
        {
            id: "3",
            // icon: "./assets/globe.png",
            title: "Road to WebDev",
            desc:
                "One of the outlets I used for this was a group here in San Diego called The San DiAsians. Everyone I met seemed to be a software engineer.",
            img: "./assets/San.png",
        },
        {
            id: "4",
            // icon: "./assets/globe.png",
            title: "Road to WebDev",
            desc:
                "My girlfriend began to develop an interest in web development and encouraged me to look into it aswell. It wasn't until the start of Covid, being laid off work, and seeing my software engineering friends thriving when it really began to command my attention.",
            img: "./assets/Gf.png",
        },
        {
            id: "5",
            // icon: "./assets/globe.png",
            title: "Road to WebDev",
            desc:
                "With the encouragment and push from my girlfriend and friends, I decided to leave my comfort zone and started the full stack webdevelopment course by CareerFoundry.",
            img: "./assets/Support.png",
        },

    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }
    return (
        <div className="about" id="about">
            <div className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    {/* <div className="imgContainer">
                                    <img src="assets/Hobby.png" alt="" />
                                </div> */}
                                    <h3>{d.desc}</h3>
                                    {/* <p>{d.desc}</p> */}
                                    {/* <ul>
                                        <li>Web development</li>
                                        <li>Photography</li>
                                        <li>Cars</li>
                                        <li>Weight lifting</li>
                                        <li>Video games</li>
                                    </ul> */}
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                                {/* <img src="assets/Hobby.png" alt="" /> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img
                src="assets/Arrow.png"
                className="arrow left"
                alt=""
                onClick={() => handleClick("left")}
            />
            <img src="assets/Arrow.png"
                className="arrow right"
                alt=""
                onClick={() => handleClick()}
            />
        </div>
    )
}
