import React from 'react'
import style from './Home.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'
import Particles from 'react-particles-js'
import Fade from 'react-reveal/Fade';
import Photo from "./../assets/image/photo.jpg"
import Tilt from 'react-tilt'
import ReactTypingEffect from 'react-typing-effect'


const particlesOpt = {
    'particles': {
        'number': {
            'value': 150,
            'density': {
                'enable': true,
                'value_area': 1500
            }
        },
    },
}

export const Home = () => {

    const photo = {
        backgroundImage: `url(${Photo})`,
    };

    return (
        <div id={'home'} className={style.homeBlock}>


                <Particles className={style.particles} params={particlesOpt} />
            <div className={`${styleContainer.container} ${style.homeContainer}`}>
                <div className={style.text}>
                        <h3 className={style.hi}>Hi There</h3>
                        <h2>I'm Anastasiya</h2>
                        <h1><ReactTypingEffect cursor={'_'} speed={100} eraseSpeed={50} typingDelay={700}  eraseDelay={1800} text={'Frontend Developer'} /></h1>
                </div>
                <Tilt className="Tilt" options={{ max : 35 }} >
                <div  className={style.photo} style={photo}></div>
                    </Tilt>
            </div>

        </div>
    )
}