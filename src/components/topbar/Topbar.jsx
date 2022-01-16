import "./topbar.scss";
import { PersonOutline, MailOutline, Description, School } from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">TP</a>
                    <div className="itemContainer">
                        <PersonOutline className="icon" />
                        <span> 816-588-9395 </span>
                    </div>
                    <div className="itemContainer">
                        <MailOutline className="icon" />
                        <a href="mailto:Travisprice08@gmail.com?subject=Portfolio%20contact"><span>Travisprice08@gmail.com</span></a>
                    </div>
                    <div className="itemContainer">
                        <Description className="icon" />
                        <a href="assets/TravisPrice_Resume.pdf" download><span>Download my CV</span></a>
                    </div>
                    <div className="itemContainer">
                        <School className="icon" />
                        <a href="assets/FullStack.pdf"><span>Certification</span></a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}