import ProjectList from "../projectList /ProjectList";
import "./work.scss";
import { useEffect, useState } from "react";
import {
    all,
    javaScriptApp,
    reactApp,
    reactNativeApp,
    // angularApp,
    certification
} from "../../data";

export default function Work() {
    const [selected, setSelected] = useState("all");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "all",
            title: "All"
        },
        {
            id: "certification",
            title: "Full Stack Certification"
        },
        {
            id: "javaScript",
            title: "JavaScript"
        },
        {
            id: "react",
            title: "React"
        },
        {
            id: "reactNative",
            title: "React Native"
        },
        // {
        //     id: "angular",
        //     title: "Angular"
        // },
    ];

    useEffect(() => {

        switch (selected) {
            case "all":
                setData(all);
                break;
            case "certification":
                setData(certification);
                break;
            case "javaScript":
                setData(javaScriptApp);
                break;
            case "react":
                setData(reactApp);
                break;
            case "reactNative":
                setData(reactNativeApp);
                break;
            // case "angular":
            //     setData(angularApp);
            //     break;
            default:
                setData(all);
        }

    }, [selected])
    return (
        <div className="work" id="work">
            <h1>Projects</h1>
            <ul>
                {list.map(item => (
                    <ProjectList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <a href={d.url}>
                        <div className="item">
                            <img src={d.img} alt="" />
                            <h3>{d.title}</h3>
                            <p>{d.desc}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}