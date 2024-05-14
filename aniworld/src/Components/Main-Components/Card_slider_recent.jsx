import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Card_slider_recent = ({ cards }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5.05, // Set to 1 to display one card at a time
        vertical: true,
        verticalSwiping: false, // Set swipe options as needed
        swipeToSlide: true,
        swipe: true,
        autoplay: true,
        arrows: false,
    };

    return (
        <Slider {...settings}>
            {cards.map((card, index) => (
                <div key={index} className="card-wrapper">
                    <div className="card-content" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',  }}>
                        <a href={card.link} target="_blank" rel="noopener noreferrer">
                            <img src={card.image} alt={card.title} className="card-image" />
                        </a>
                        <div className="text-wrapper" style={{ marginLeft: '1em', fontSize: '12px' }}>
                            <h3>{card.title}</h3>
                            <p style={{ marginTop: '-1em' }}>
                                <span>{card.description.split('•')[0]}</span>{' '}
                                {card.description.substring(card.description.indexOf(' ') + 1)}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default Card_slider_recent;
