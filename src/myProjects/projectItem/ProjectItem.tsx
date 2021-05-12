import React from "react";
import style from "./ProjectItem.module.css";


export type ProjectItemPropsType = {
    title: string
    description: string
}

export function ProjectItem(props: ProjectItemPropsType) {

    return (
        <div className={style.project}>
            <div className={style.image}>
                <a href="" className={style.viewBtn}>See</a>
                {/*<div className={style.topWrapper}>*/}
                {/*</div>*/}
            </div>
            <div className={style.projectInfo}>
                <div className={style.projectTitle}>{props.title}</div>
                <div className={style.projectDescription}>{props.description}</div>
            </div>
        </div>
    )
}