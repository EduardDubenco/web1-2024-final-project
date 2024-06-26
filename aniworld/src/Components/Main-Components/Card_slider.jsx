import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Card_slider = ({ cards }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        swipeToSlide: true,
    };

    return (
        <Slider {...settings}>
            {cards.map((card, index) => (
                <div key={index}>
                    <a href={card.link} target="_blank" rel="noopener noreferrer">
                        <img src={card.image}/>
                        <h3>{card.title}</h3>
                        <p>
                            <span>{card.description.split('•')[0]}</span>{' '}
                            {card.description.substring(card.description.indexOf(' ') + 1)}
                        </p>
                    </a>
                </div>
            ))}
        </Slider>
    );
};

export default Card_slider;
