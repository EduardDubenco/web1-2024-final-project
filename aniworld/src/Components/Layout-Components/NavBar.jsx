import React from "react";
import "./navbar.css";
import logo from './img/Logo.png';
import AccountMenu from "./avatar";
import SearchAppBar from "./search";
import CategoriesButton from "../Main-Components/Categories";
import {Link} from 'react-router-dom';

export default function NavBar() {
    return(
        <>
            <div id="header-bg">
                <nav className="nav-head">
                    <ul className="ul-left">
                        <li>
                            <Link to="/" id="logo-header">
                                <img src={logo} alt=""/>
                                AniWorld
                            </Link>
                        </li>
                        <li>
                            <CategoriesButton/>
                        </li>
                        <li>
                            <a href="https://www.crunchyroll.com/ru/games/">Games</a>
                        </li>
                        <li>
                            <Link to="/?section=news">News</Link>
                        </li>
                    </ul>
                    <ul className="ul-right">
                        <li>
                            <SearchAppBar/>
                        </li>
                        <li className='some-padding'>
                            <AccountMenu/>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}