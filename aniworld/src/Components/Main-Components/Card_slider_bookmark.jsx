import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Card_slider_bookmark = ({ cards }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        swipeToSlide: true,
        rows: 2,
        arrows: false,
    };

    const cardStyle = {
        height: '350px',
        marginBottom: '1em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    };

    const imageStyle = {
        maxHeight: '70%',
        objectFit: 'cover',
    };

    return (
        <Slider {...settings}>
            {cards.map((card, index) => (
                <div key={index} style={cardStyle}>
                    <a href={card.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <img src={card.image} alt={card.title} style={imageStyle} />
                        <div>
                            <h3>{card.title}</h3>
                            <p>
                                <span>{card.description.split('•')[0]}</span>{' '}
                                {card.description.substring(card.description.indexOf(' ') + 1)}
                            </p>
                        </div>
                    </a>
                </div>
            ))}
        </Slider>
    );
};

export default Card_slider_bookmark;
