import React from "react";
import './WatchPage.css'

export default function WatchPage(){

    const animeData = {
        title: "Tensei shitara Slime Datta Ken",
        episodes: 12,
        description: "В своем прошлом, достаточно давнем, необычное создание по имени Римуру Темпест, был обычным человеком, достигшим среднего возраста, и тяготившимся скучной и посредственной жизнью. Большую часть времени мужчина уделял работе, и совершенно упустил из виду личную жизнь. А когда он всё-таки задумался о поиске спутницы, то столкнулся с ужасной ситуацией, из которой ему не удалось выйти живым. Вот только Сатору, а именно так его звали, когда он был человеком, не умер в полном смысле этого слова, а переродился в другом мире, в весьма необычном состоянии. Мужчина стал слизью.\n" +
            "\n" +
            "В новом мире ему удается эволюционировать, приобретая новые способности и немного изменяя свой габитус. На все на это требуется немало времени. Он знакомится с невероятно харизматичным драконом, получает имя Римуру, и начинает формировать свои цели на будущее. В своем новом воплощение он отыскал для себя невероятный смысл, обретя свежее видение мира, а также получил возможность видоизменяться, что также расширило его границы мировоззрения, и помогло воспринимать жизнь более глубже и шире. Римуру ждало немало приключений, некоторые из которых были рискованными, но только не для его нынешнего состояния.",
        imageUrl: "https://v2.vost.pw/uploads/posts/2024-03/1710334118_1.jpg?v2",
        videoSrc: "https://www.example.com/path/to/video.mp4"
    };

    return(
        <>
            <div className="video-container">
                <div className="anime-info">
                    <img src={animeData.imageUrl} alt={`${animeData.title} cover`} className="anime-image"/>
                    <div className="anime-details">
                        <h2>{animeData.title}</h2>
                        <p><strong>Episodes:</strong> {animeData.episodes}</p>
                        <p>{animeData.description}</p>
                    </div>
                </div>
                <video controls width="100%">
                    <source src={animeData.videoSrc} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </>
    )
}
