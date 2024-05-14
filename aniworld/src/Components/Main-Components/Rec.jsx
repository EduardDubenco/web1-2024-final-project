import React from "react";
import "./Recommendation.css"
import Card_slider_recent from "./Card_slider_recent";

export default function Recommendation(){

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
        }
    ];

    return(
        <div className="rec">
            <div className="rec-card">
                {cards && cards.length > 0 && <Card_slider_recent cards={cards}/>}
            </div>
        </div>
    )
}