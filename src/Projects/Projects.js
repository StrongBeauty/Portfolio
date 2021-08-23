import React from 'react'
import style from './Projects.module.css'
import styleContainer from '../Common/Styles/Container.module.css'
import {Project} from "./Project/Project";


export const Projects = () => {
    return (
        <div className={`${styleContainer.block} ${style.projectsBlock}`}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <div className={style.header}>
                    <h2 className={style.title}>My projects</h2>
                </div>
                <div className={style.projects}>
                    <Project title={'Social Network'} description={'Text'} href={''}/>
                    <Project title={'ToDoList'} description={'Text'} href={''}/>
                    <Project title={'Counter'} description={'Text'} href={''}/>
                    <Project title={'Currency'} description={'Text'} href={''}/>
                </div>
            </div>
        </div>
    )
}