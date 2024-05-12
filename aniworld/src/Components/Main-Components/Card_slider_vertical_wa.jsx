import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Watch_again.css';
import RePlay from './img/icons8-replay-64.png'

const Card_slider_vertical_wa = ({ cards }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {cards.map((card, index) => (
                <div key={index} className="card">
                    <div className="image-container">
                        <img src={card.image} alt={card.alt} className="gray-transparent"/>
                        <div className="replay-icon">
                            <img src={RePlay} alt="" className="replay-icon"/>
                        </div>
                        <span className="seen-text">Seen</span>
                    </div>
                    <div className="card-details">
                        <a href={card.link} target="_blank" rel="noopener noreferrer">
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </a>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default Card_slider_vertical_wa;
