import React from 'react'
import style from './Projects.module.scss'
import styleContainer from '../Common/Styles/Container.module.css'
import {Project} from "./Project/Project";
import {Title} from '../Common/Components/Title/Title'
import "@fontsource/roboto-mono"
import SNImage from "./../assets/image/h9-port-img-2.jpg"
import TDLImage from "./../assets/image/h9-port-img-5.jpg"
import CounterImage from "./../assets/image/port-gallery-img-6.jpg"
import CurrencyImage from "./../assets/image/port-gallery-img-10.jpg"


export const Projects = () => {
    const social = {
        backgroundImage: `url(${SNImage})`,
    };
    const todolist = {
        backgroundImage: `url(${TDLImage})`,
    }
    const counter = {
        backgroundImage: `url(${CounterImage})`,
    }
    const tdl = {
        backgroundImage: `url(${CurrencyImage})`,
    }

    return (

        <div className={`${styleContainer.block} ${style.projectsBlock}`}>

            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <div className={style.header}>
                    <Title text={'Projects'}/>
                </div>
                <div className={style.projects}>
                    <Project style={social} title={'Social Network'} description={'There will be a description of my project soon'} href={''}/>
                    <Project style={todolist} title={'ToDoList'} description={'There will be a description of my project soon'} href={''}/>
                    <Project style={counter} title={'Counter'} description={'There will be a description of my project soon'} href={''}/>
                    <Project style={tdl} title={'Currency'} description={'There will be a description of my project soon'} href={''}/>
                </div>
            </div>
        </div>
    )
}