import React from "react";
import NavBar from "./Layout-Components/NavBar";
import Recommendation from "./Main-Components/Recommendation";
import Watch_again from "./Main-Components/Watch_again";
import Favorites from "./Main-Components/Favorites";
import Goal from "./Main-Components/Goal";
import News from "./Main-Components/News";
import Rec from "./Main-Components/Rec";
import Footer from "./Layout-Components/Footer";
import Header from "./Main-Components/Header";

export default function MainPage(){
    return(
        <>
            <NavBar/>
            <Header/>

            <Recommendation/>
            <Watch_again/>
            <Favorites/>
            <Goal/>
            <News/>
            <Rec/>

            <Footer/>
            
        </>
    )
}