import React from 'react'
import style from './Projects.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'
import {Project} from "./Project/Project";
import {Title} from '../Common/Components/Title/Title'
import "@fontsource/roboto-mono"
import SNImage from "./../assets/image/h9-port-img-2.jpg"
import TDLImage from "./../assets/image/h9-port-img-5.jpg"
import CounterImage from "./../assets/image/port-gallery-img-6.jpg"
import CurrencyImage from "./../assets/image/port-gallery-img-10.jpg"
import SliderImage from "./../assets/image/h9-port-img-1.jpg"
import DragDropImage from "./../assets/image/blog-post-6.jpg"


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
    const slider = {
        backgroundImage: `url(${SliderImage})`,
    }
    const dragDrop = {
        backgroundImage: `url(${DragDropImage})`,
    }

    return (

        <div id={'projects'} className={`${styleContainer.block} ${style.projectsBlock}`}>

            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <div className={style.header}>
                    <Title text={'Projects'}/>
                </div>
                <div className={style.projects}>
                    <Project style={social} title={'Social Network'} description={'There will be a description of my project soon'} href={''}/>
                    <Project style={todolist} title={'ToDoList'} description={'There will be a description of my project soon'} href={''}/>
                    <Project style={slider} title={'Slider'} description={'There will be a description of my project soon'} href={'https://strongbeauty.github.io/CardsSources/'}/>
                    <Project style={counter} title={'Counter'} description={'There will be a description of my project soon'} href={''}/>
                    <Project style={dragDrop} title={'Drag & Drop'} description={'There will be a description of my project soon'} href={'https://strongbeauty.github.io/DragnDrop/'}/>
                    <Project style={tdl} title={'Currency'} description={'There will be a description of my project soon'} href={''}/>
                </div>

            </div>
        </div>
    )
}