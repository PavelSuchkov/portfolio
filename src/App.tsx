import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyProjects} from "./myProjects/MyProjects";
import {Contacts} from "./contacts/Contacts";
import {Freelance} from "./freelance/Freelance";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <Freelance/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
