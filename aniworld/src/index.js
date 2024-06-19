import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import SignIn from "./Components/Pages/SignIn";
import SignUp from "./Components/Pages/SignUp";
import NavBar from "./Components/Layout-Components/NavBar";
import Profile from "./Components/Pages/Profile";
import Header from "./Components/Main-Components/Header";
import MainPage from "./Components/MainPage";
import WatchPage from "./Components/Pages/WatchPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        {/*<WatchPage/>*/}
        <MainPage/>
        {/*<App />*/}
        {/*<Profile/>*/}
        {/*{<SignIn/>}*/}
        {/*{<SignUp/>}*/}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
