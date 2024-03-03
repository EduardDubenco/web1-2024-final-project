import React from "react";
import './Header.css';
import banner from './img/SpyXFamily-large.png';

export default function Header(){
    return(
        <section id="head">
            <div id="bg-head">
                <div id="img-spyx"> <img src={banner} alt=""/> </div>
            </div>
            <div className="additional-info">
                <button>SPY x FAMILY New Episode</button>
                <button>All Saints Street First Episode</button>
                <button>My Hero Academia Season 6</button>
                <button>BLUE LOCK</button>
                <button>The daily Life of the Immortal King Season 3</button>
                <button>Raven of the Inner Palace Soon</button>
            </div>
        </section>
    )
}