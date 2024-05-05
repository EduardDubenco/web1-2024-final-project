import React from "react";
import "./navbar.css";
import logo from './img/Logo.png';
import AccountMenu from "./avatar";
import SearchAppBar from "./search";
import CategoriesButton from "../Main-Components/Categories";

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
                            <CategoriesButton/>
                        </li>
                        <li>
                            <a href="https://www.crunchyroll.com/ru/games/">Games</a>
                        </li>
                        <li>
                            <a id="button" href="https://www.crunchyroll.com/ru/news">News</a>
                        </li>
                    </ul>
                    <ul className="ul-right">
                        <li>
                            <SearchAppBar/>
                        </li>
                        <li>
                            <AccountMenu/>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}