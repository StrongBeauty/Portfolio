import React from 'react'
import style from './Skills.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'
import {Skill} from "./Skill/Skill";
import {Title} from "../Common/Components/Title/Title";
import ReactIcon from "./../assets/image/react.png"
import JSIcon from "./../assets/image/js.png"
import SassIcon from "./../assets/image/sass.png"
import HtmlIcon from "./../assets/image/html1.png"
import MaterialUiIcon from "./../assets/image/material-ui.png"
import FormikIcon from "./../assets/image/formik.png"
import GitIcon from "./../assets/image/git.png"
import TSIcon from "./../assets/image/ts.png"
import ReduxIcon from "./../assets/image/redux.png"
import CssIcon from "./../assets/image/css.png"


export const Skills = () => {

    return (
        <div id={'skills'} className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <div className={style.header}>
                    <Title text={'Skills'}/>
                </div>
                <div className={style.skills}>
                    <Skill src={ReactIcon} title={'React'}
                           description={'There will be a description of this technology soon.'}/>
                    <Skill src={ReduxIcon} title={'Redux'}
                           description={'There will be a description of this technology soon.'}/>
                    <Skill src={JSIcon} title={'JavaScript'}
                           description={'There will be a description of this technology soon.'}/>
                    <Skill src={TSIcon} title={'TypeScript'}
                           description={'There will be a description of this technology soon.'}/>
                    <Skill src={CssIcon} title={'CSS'}
                           description={'There will be a description of this technology soon.'}/>
                    <Skill src={SassIcon} title={'Sass'}
                           description={'There will be a description of this technology soon.'}/>
                    <Skill src={HtmlIcon} title={'Html'}
                           description={'There will be a description of this technology soon.'}/>
                    <Skill src={GitIcon} title={'Git'}
                           description={'There will be a description of this technology soon.'}/>
                    <Skill src={FormikIcon} title={'Formik'}
                           description={'There will be a description of this technology soon.'}/>
                    <Skill src={MaterialUiIcon} title={'Material Ui'}
                           description={'There will be a description of this technology soon.'}/>
                </div>
            </div>
        </div>
    )
}