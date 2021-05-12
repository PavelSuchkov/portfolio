import React from "react";
import style from "./ProjectItem.module.css";


export type ProjectItemPropsType = {
    title: string
    description: string
}

export function ProjectItem(props: ProjectItemPropsType) {

    return (
        <div className={style.itemsWrapper}>
            <div className={style.item}>
                <div className={style.topWrapper}>
                        <button>See</button>
                </div>
            </div>
            <div className={style.botWrapper}>
                <div className={style.projectName}>{props.title}</div>
                <div className={style.projectDescription}>{props.description}</div>
            </div>
        </div>
    )
}