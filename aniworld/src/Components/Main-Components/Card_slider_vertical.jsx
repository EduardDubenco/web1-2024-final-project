import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Card_slider_vertical = ({ cards }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1.2,
        vertical: true,
        verticalSwiping: false, // setează swipe-ul vertical
        swipeToSlide: true, // permite swipe-ul pentru a schimba slide-urile
        swipe: true, // permite swipe-ul
        autoplay: true,
        arrows: false,
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

export default Card_slider_vertical;
