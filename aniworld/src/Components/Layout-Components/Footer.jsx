import React from "react";
import "./footer.css";
import Logo from "./img/Footer.png";

export default function Footer() {
    return(
        <footer className="footer">
            <div className="footer-content">
                <h3>AniWorld</h3>
                <img src={Logo} alt="Logo"/>
                <p><a href="https://github.com/EduardDubenco/web1-2024-final-project">GitRepository</a></p>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Eduard Dubenco.</p>
            </div>
        </footer>
    )
}