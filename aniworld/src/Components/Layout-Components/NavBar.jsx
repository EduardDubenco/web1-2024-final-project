import React from "react";
import "./navbar.css";
import logo from './img/Logo.png';
import search from './img/search.svg';
import bookmark from './img/bookmark.svg';
import arrow_dropdown from './img/arrow-dropdown.svg';
import avatar from './img/Retr0_ava.jpg';

export default function NavBar() {
    return(
        <>
            <div id="header-bg">
                <nav className="nav-head">
                    <ul className="ul-left">
                        <li>
                            <a id="logo-header" href="/MainPage">
                                <img src={logo} alt=""/>
                                AniWorld
                            </a>
                        </li>
                        <li>
                            <a id="button" href="#">Browse</a>
                        </li>
                        <li>
                            <a href="#">Manga</a>
                        </li>
                        <li>
                            <a id="button" href="#">News</a>
                        </li>
                    </ul>
                    <ul className="ul-right">
                        <li>
                            <a id="li-right" href="#"><img src={search} alt=""/></a>
                        </li>
                        <li>
                            <a id="li-right" href="#"><img src={bookmark} alt=""/></a>
                        </li>
                        <li>
                            <a id="li-right" href="#">
                                <img id="profile-logo" src={avatar} alt=""/>
                                <img src={arrow_dropdown} alt=""/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}