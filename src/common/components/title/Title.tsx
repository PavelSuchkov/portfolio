import React from "react";
import style from './Title.module.css'

export type TitlePropsType = {
    title: string
}

export function Title(props: TitlePropsType) {

    return (
        <div className={style.titleWrapper}>
            <h2>{props.title}</h2>
        </div>
    )

}