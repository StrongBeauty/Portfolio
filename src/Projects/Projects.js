import React from 'react'
import style from './Projects.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'
import {Project} from "./Project/Project";
import {Title} from '../Common/Components/Title/Title'
import "@fontsource/roboto-mono"
import SNImage from "./../assets/image/h9-port-img-2.jpg"
import TDLImage from "./../assets/image/h9-port-img-5.jpg"
import CounterImage from "./../assets/image/port-gallery-img-4.jpg"
import CurrencyImage from "./../assets/image/port-gallery-img-10.jpg"
import CardsImage from "./../assets/image/port-gallery-img-8.jpg"
import DragDropImage from "./../assets/image/port-gallery-img-3.jpg"
import GameImage from "./../assets/image/port-gallery-img-6.jpg"
import SliderImage from "./../assets/image/h9-port-img-1.jpg"
import BoardImage from "./../assets/image/blog-post-6.jpg"

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
    const currency = {
        backgroundImage: `url(${CurrencyImage})`,
    }
    const cards = {
        backgroundImage: `url(${CardsImage})`,
    }
    const dragDrop = {
        backgroundImage: `url(${DragDropImage})`,
    }

    const game = {
        backgroundImage: `url(${GameImage})`,
    }
    const slider = {
        backgroundImage: `url(${SliderImage})`,
    }
    const board = {
        backgroundImage: `url(${BoardImage})`,
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
                    <Project style={game} title={'Game'} description={'Aim Trainer Game created of Javasscript'} href={'https://strongbeauty.github.io/Game/'}/>
                    <Project style={board} title={'Board'} description={'Dynamic Сontent Generation Board created of Javasscript'} href={'https://strongbeauty.github.io/Board/'}/>
                    <Project style={currency} title={'Currency'} description={'There will be a description of my project soon'} href={''}/>
                    <Project style={slider} title={'Slider'} description={'Spectacular Slider created of Javasscript'} href={'https://strongbeauty.github.io/Slider/'}/>
                    <Project style={counter} title={'Counter'} description={'There will be a description of my project soon'} href={''}/>
                    <Project style={cards} title={'Cards'} description={'Drop-Down Cards Plugin created of Javasscript'} href={'https://strongbeauty.github.io/CardsSources/'}/>
                    <Project style={dragDrop} title={'Drag & Drop'} description={'Drag & Drop created of Javasscript'} href={'https://strongbeauty.github.io/DragnDrop/'}/>

                </div>

            </div>
        </div>
    )
}