import React from 'react'
import style from './Footer.module.css'
import styleContainer from '../Common/Styles/Container.module.css'


export const Footer = () => {
    return (
        <div className={style.footerBlock}>

            <div className={`${styleContainer.container} ${style.footerContainer}`}>

                <h3 className={style.name}>Anastasiya Volkava</h3>

                <div className={style.anyBlock}>
                    <div className={style.any}></div>
                    <div className={style.any}></div>
                    <div className={style.any}></div>
                    <div className={style.any}></div>
                </div>

                <h4 className={style.copyright}>2021 Copyright. All rights reserved.</h4>
            </div>
        </div>
    )
}