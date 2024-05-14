import React from 'react';
import OrangeLine from "./img/Orange line.png";
import "./News.css"
import Card_slider_vertical from "./Card_slider_vertical";

export default function News(){

    const cards = [
        {
            title: 'BOCCHI THE ROCK!',
            description: 'Inmo sigue experimentando la inmortalidad en el doblaje de la segunda temporada de To...• Nov 13, 2022 2:32pm GTM-7 por A. Trejo Mosquera',
            image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/10/Bocchi-The-Rock!-Hitori-Succeeds-At-Customer-Service-Through-Exposure.jpg',
            link: 'https://animego.org/media/cache/thumbs_250x350',
        },
        {
            title: 'CHAINSAW MAN',
            description: 'T1 E5 - Episodio 05',
            image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=1200,height=675,quality=85/catalog/crunchyroll/ea075b926e1073f4eb016bff8cdb434c.jpe',
            link: 'https://animego.org/media/cache/thumbs_250x350',
        },
        {
            title: 'MOB PSYCHO 100',
            description: 'T3 E6 - Divine Tree 3 ~Dimple is~',
            image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=1200,height=675,quality=85/catalog/crunchyroll/c0e2440d3f27196ba37abaed8b824df5.jpe',
            link: 'https://animego.org/media/cache/thumbs_250x350',
        },
        {
            title: 'MY HERO ACADEMIA',
            description: 'T6 E120 - Disaster Walker',
            image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=1200,height=675,quality=85/catalog/crunchyroll/aa31911c746c4d7d027b190f2e184834.jpe',
            link: 'https://animego.org/media/cache/thumbs_250x350',
        },
        {
            title: 'My Hero Academia',
            description: 'Serie • Doblajes',
            image: 'https://animego.org/media/cache/thumbs_250x350/upload/anime/images/660426c6bec6d347895719.jpg',
            link: 'https://animego.org/media/cache/thumbs_250x350',
        },
        {
            title: 'Saint Seiya',
            description: 'Serie • Doblajes',
            image: 'https://animego.org/media/cache/thumbs_250x350/upload/anime/images/648ad8e4f2e7b353072260.jpg',
            link: 'https://animego.org/media/cache/thumbs_250x350',
        },
        {
            title: 'Aoashi',
            description: 'Serie • Doblajes',
            image: 'https://animego.org/media/cache/thumbs_250x350/upload/anime/images/6252cee9478db940119595.jpg',
            link: 'https://animego.org/media/cache/thumbs_250x350',
        },

    ];

    return(
        <>
            <div className="container">
                <div className="black_back">
                    <div className="head">
                        <h2>News AniWorld</h2>
                        <img src={OrangeLine} alt={OrangeLine}/>
                    </div>
                    <div className="container-grid">
                        <div className="news">
                            <h1>AniWorld News</h1>
                            <div className="news_card">
                                {cards && cards.length > 0 && <Card_slider_vertical cards={cards}/>}
                            </div>
                        </div>
                        <div className="recent">
                            <h1>Most Recent</h1>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
