import React, {useEffect} from "react";
import NavBar from "./Layout-Components/NavBar";
import Recommendation from "./Main-Components/Recommendation";
import Watch_again from "./Main-Components/Watch_again";
import Favorites from "./Main-Components/Favorites";
import Goal from "./Main-Components/Goal";
import News from "./Main-Components/News";
import Rec from "./Main-Components/Rec";
import Footer from "./Layout-Components/Footer";
import Header from "./Main-Components/Header";
import SelectedCategories from "./Main-Components/SelectedCategories";
import {Link, useLocation, useParams} from 'react-router-dom';

export default function MainPage(){
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const section = query.get('section');

    useEffect(() => {
        if (section) {
            const element = document.getElementById(`${section}-section`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [section]);

    return(
        <>
            <NavBar/>
            <Header/>

            <SelectedCategories/>
            <Recommendation/>
            <Watch_again/>
            <Favorites/>
            <Goal/>

            <div id="news-section" ><News/></div>

            <Rec/>

            <Footer/>

        </>
    )
}