import React from 'react'
import style from './Header.module.scss'
import {Navigation} from "../Common/Components/Navigation/Navigation";
import Particles from 'react-particles-js'

const particlesOpt = {
    'particles': {
        'number': {
            'value': 150,
            'density': {
                'enable': true,
                'value_area': 800
            }
        },
    },
}
export const Header = () => {
    return (
        <header className={style.header}>
            <Navigation />
            <Particles className={style.particles} params={particlesOpt} />

        </header>
    )
}