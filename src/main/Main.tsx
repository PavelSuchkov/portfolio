import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.scss'


export function Main() {

    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greeting}>
                    <span>Hi Everyone</span>
                    <h1>I'm Pavel Suchkou</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>)

}