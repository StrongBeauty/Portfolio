import React from 'react'
import style from './Title.module.scss'
import ReactTypingEffect from 'react-typing-effect'


export const Title = (props) => {

    return (
        <div className={style.title} >
            <h2>My {' '}
                <span >
                    <ReactTypingEffect cursor={'_'} speed={200} eraseSpeed={50} typingDelay={800}  eraseDelay={900} text={props.text} />
                </span>
            </h2>
        </div>
    )
}