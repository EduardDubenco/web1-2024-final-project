import React from "react";
import OrangeLine from "./img/Orange line.png";
import "./Favorites.css"
import Card_slider_vertical_f from "./Card_slider_vertical_f";

export default function Favorites(){

    const cards = [
        {
            title: 'BOCCHI THE ROCK!',
            description: 'Serie • Doblajes',
            image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/10/Bocchi-The-Rock!-Hitori-Succeeds-At-Customer-Service-Through-Exposure.jpg',
            link: 'https://animego.org/media/cache/thumbs_250x350',
        },
        {
            title: 'CHAINSAW MAN',
            description: 'Serie • Subtitulado',
            image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=1200,height=675,quality=85/catalog/crunchyroll/ea075b926e1073f4eb016bff8cdb434c.jpe',
            link: 'https://animego.org/media/cache/thumbs_250x350',
        },
        {
            title: 'MOB PSYCHO 100',
            description: 'Serie • Subtitulado',
            image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=1200,height=675,quality=85/catalog/crunchyroll/c0e2440d3f27196ba37abaed8b824df5.jpe',
            link: 'https://animego.org/media/cache/thumbs_250x350',
        },
        {
            title: 'MY HERO ACADEMIA',
            description: 'Serie • Subtitulado',
            image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=1200,height=675,quality=85/catalog/crunchyroll/aa31911c746c4d7d027b190f2e184834.jpe',
            link: 'https://animego.org/media/cache/thumbs_250x350',
        },
        {
            title: 'My Hero Academia',
            description: 'Serie • Subtitulado',
            image: 'https://animego.org/media/cache/thumbs_250x350/upload/anime/images/660426c6bec6d347895719.jpg',
            link: 'https://animego.org/media/cache/thumbs_250x350',
        },

    ];

    return(
        <div className="fav">
            <h2>Your Favorites</h2>
            <img src={OrangeLine} alt={OrangeLine}/>
            <div className="fav-card">
                {cards && cards.length > 0 && <Card_slider_vertical_f cards={cards}/>}
            </div>
        </div>
    )
}
