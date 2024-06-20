import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
    const [activeImage, setActiveImage] = useState(0);
    const [remainingTime, setRemainingTime] = useState(30);

    const images = [
        { src: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/01/spy-x-family-teaser-image-poster.jpg', alt: 'SPY x FAMILY', link: '' },
        { src: 'https://wallpapercave.com/wp/wp12196137.jpg', alt: 'All Saints Street', link: '' },
        { src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8bcaa2ad-8478-4430-a4c6-a15cc58eeeee/dcy3ztq-877fe2d0-c0d5-48ed-8d81-cae8c1f29467.png/v1/fill/w_1215,h_658,q_70,strp/hero_academia__beyond_website_banner_by_koihorkka_dcy3ztq-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODY2IiwicGF0aCI6IlwvZlwvOGJjYWEyYWQtODQ3OC00NDMwLWE0YzYtYTE1Y2M1OGVlZWVlXC9kY3kzenRxLTg3N2ZlMmQwLWMwZDUtNDhlZC04ZDgxLWNhZThjMWYyOTQ2Ny5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.4xTH8AeUCIz93iD1v6yWZLorfmjyqSZhAKWhC3g2vA8', alt: 'My Hero Academia', link: '' },
        { src: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/02/blue-lock-versus-haikyuu.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5', alt: 'BLUE LOCK', link: '' },
        { src: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=1200,height=675,quality=85/catalog/crunchyroll/e927496ff24c95e32084e7c17153de6a.jpe', alt: 'The daily Life of the Immortal King', link: '' },
        { src: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/12/chinese-puppets-raven-of-the-inner.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5', alt: 'Raven of the Inner Palace', link: '' },
    ];

    const handleImageChange = (index) => {
        setActiveImage(index);
        resetTimer();
    };

    const resetTimer = () => {
        setRemainingTime(30);
    };

    useEffect(() => {
        // Reset timer on component mount
        resetTimer();
    }, []);

    // Start automatic image change on mount and after timer reset
    useEffect(() => {
        let intervalId = setInterval(() => {
            if (remainingTime > 0) {
                setRemainingTime(remainingTime - 1);
            } else {
                setActiveImage((prevActiveImage) => (prevActiveImage + 1) % images.length);
                resetTimer();
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [remainingTime, images.length]);

    return (
        <div className="carousel">
            <img src={images[activeImage].src} alt={images[activeImage].alt} className="active-image" />

            <div className="navigation">
                {images.map((image, index) => (
                    <button
                        key={index}
                        className={index === activeImage ? 'active-button' : 'button'}
                        onClick={() => handleImageChange(index)}
                    >
                        {image.alt}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;