import React from 'react'
import style from './Footer.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'
import Git from "./../assets/image/git2.png"
import Tg from "./../assets/image/telegram.png"
import LN from "./../assets/image/link.png"
import Codewars from "./../assets/image/codewars.png"
import {Link} from "react-scroll";
import Fade from 'react-reveal/Fade';

export const Footer = () => {
    return (

        <div className={style.footerBlock}>
            <Fade bottom>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Link   href={'#home'} to={'home'} className={style.button}>home</Link>
                <div className={style.infoBlock}><p><a href='tel:+375333888820' className={style.info}>+375333888820</a></p>
                    <p><a href='mailto:Lonely__Wind@mail.ru' className={style.info}>Lonely__Wind@mail.ru</a></p>
                </div>

                <div className={style.contactsBlock}>
                    <a href='https://www.linkedin.com/in/anastasiyavolkava'><img src={LN} alt='' className={style.contacts}></img></a>
                    <a href='https://t.me/strong_beauty'><img src={Tg} alt='' className={style.contacts}></img></a>
                    <a href='https://github.com/StrongBeauty'><img src={Git} alt='' className={style.contacts}></img></a>
                    <a href='https://www.codewars.com/users/%20Anastasiya'><img src={Codewars} alt='' className={style.contacts}></img></a>
                </div>

            <div className={style.copyrightBlock}>
                <p className={style.copyright}>2021 Copyright. All rights reserved.</p>
            </div>
            </div>
            </Fade>
        </div>

    )
}