import React from 'react';
import './profile.css';
import Card_slider from "../Main-Components/Card_slider";
import OrangeLine from "../Main-Components/img/Orange line.png";

const Profile = () => {
    const profileData = {
        avatarUrl: "https://eu2.contabostorage.com/dec9cf65ff654053a70854e38826abe6:gowo/users-avatars/100/12298885715765351705189983.png?ver=1718806494",
        nickname: "Retr0",
        fullName: "Dubenco Eduard",
        email: "edicdubenco@gmail.com",
        region: "Moldova"
    };

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


    return (
        <section className="section-profile">
            <div className="container-profile">
                <div className="row">
                    <div className="col" style={{maxWidth: '300px'}}>
                        <div className="card">
                            <div className="cardBody">
                                <img
                                    src={profileData.avatarUrl}
                                    alt="avatar"
                                    className="cardImage"
                                />
                                <p className="NikName">{profileData.nickname}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col" style={{flex: '2'}}>
                        <div className="card">
                            <div className="cardBody">
                                <div className="row">
                                    <div className="col" style={{flex: '1', textAlign: 'left'}}>
                                        <p>Full Name</p>
                                    </div>
                                    <div className="col" style={{flex: '3', textAlign: 'right'}}>
                                        <p>{profileData.fullName}</p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col" style={{flex: '1', textAlign: 'left'}}>
                                        <p>Email</p>
                                    </div>
                                    <div className="col" style={{flex: '3', textAlign: 'right'}}>
                                        <p>{profileData.email}</p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col" style={{flex: '1', textAlign: 'left'}}>
                                        <p>Region</p>
                                    </div>
                                    <div className="col" style={{flex: '3', textAlign: 'right'}}>
                                        <p>{profileData.region}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rec">
                    <h2>BookMarks</h2>
                    <img src={OrangeLine} alt={OrangeLine}/>
                    <div className="rec-card">
                        {cards && cards.length > 0 && <Card_slider cards={cards}/>}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Profile;
