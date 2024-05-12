import React from "react";
import BlueLine from "./img/Blue line.png";
import "./Goal.css"
import Card_slider from "./Card_slider";

export default function Goal(){

    const cards = [
        {
            title: 'Shinobi no Ittoki',
            description: 'Serie • Subtitulado',
            image: 'https://animego.org/media/cache/thumbs_250x350/upload/anime/images/633348623ef03057472888.jpg',
            link: 'https://animego.org/media/cache/thumbs_250x350',
        },
        {
            title: 'Dragon Ball Z',
            description: 'Serie • Sub  | Dob',
            image: 'https://animego.org/media/cache/thumbs_250x350/upload/anime/images/5ab170ba1c5bf082268556.jpg',
            link: 'https://animego.org/media/cache/thumbs_250x350',
        },
        {
            title: 'Dragon Ball',
            description: 'Serie • Sub | Dob',
            image: 'https://animego.org/media/cache/thumbs_250x350/upload/anime/images/5b74ffb477729814267027.jpg',
            link: 'https://animego.org/media/cache/thumbs_250x350',
        },
        {
            title: 'DRAGON QUEST The Adventure of Dai',
            description: 'Serie • Subtitulado',
            image: 'https://animego.org/media/cache/thumbs_250x350/upload/anime/images/5a9b68cbba10c200065662.jpg',
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
        <div className="goal">
            <h2>¡GOOOOOOOOOL!</h2>
            <img src={BlueLine} alt={BlueLine}/>
            <div className="goal-card">
                {cards && cards.length > 0 && <Card_slider cards={cards}/>}
            </div>
        </div>
    )
}