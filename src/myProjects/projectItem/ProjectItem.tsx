import React from "react";
import style from "./ProjectItem.module.scss";


export type ProjectItemPropsType = {
    title: string
    description: string
    style: {}
    href: string
}

export function ProjectItem(props: ProjectItemPropsType) {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <a href={props.href} className={style.viewBtn}>See</a>
            </div>
            <div className={style.projectInfo}>
                <div className={style.projectTitle}>{props.title}</div>
                <div className={style.projectDescription}>{props.description}</div>
            </div>
        </div>
    )
}