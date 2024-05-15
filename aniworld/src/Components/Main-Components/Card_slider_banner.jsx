import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Card_slider_banner = ({ cards }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1.97,
        vertical: true,
        verticalSwiping: false,
        swipeToSlide: true,
        swipe: true,
        autoplay: true,
        arrows: false,
    };

    return (
        <Slider {...settings}>
            {cards.map((card, index) => (
                <div key={index} className="card-wrapper">
                    <div className="card-content" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <img src={card.image} alt={card.title} className="card-image" style={{ marginBottom: '1.5em' }} />
                        <div className="text-wrapper" style={{ marginLeft: '3em', marginBottom: '1.5em' }}>
                            <h3>{card.title}</h3>
                            <p>
                                <strong>{card.description.split('•')[0]}</strong><br />
                                {card.description.substring(card.description.indexOf(' ') + 1)}
                            </p>
                            <a href={card.link} target="_blank" rel="noopener noreferrer" style={{ alignItems: 'center', }}>
                                <button className="watch-button">Watch</button>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default Card_slider_banner;
