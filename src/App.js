import React from 'react'
import './App.css';
import {Header} from './Header/Header'
import {Home} from "./Home/Home";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
import {Contacts} from "./Contacts/Contacts";


export const App = () => {
    return (
        <div className="App">
            <Header />
            <Home />
            <Skills />
            <Projects />
            <Contacts />
        </div>
    );
}


