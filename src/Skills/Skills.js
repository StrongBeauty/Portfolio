import React from 'react'
import style from './Skills.module.scss'
import styleContainer from '../Common/Styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../Common/Components/Title/Title";


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <div className={style.header}>
                <Title text={'Skills'}/>
                </div>
                <div className={style.skills}>
                    <Skill title={'React'} description={'Text'}/>
                    <Skill title={'Typescript'} description={'Text'}/>
                    <Skill title={'CSS'} description={'Text'}/>
                </div>
            </div>
        </div>
    )
}