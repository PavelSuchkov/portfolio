import React from "react";
import style from "./MyProjects.module.css";
import styleContainer from './../common/styles/Container.module.css'
import {ProjectItem} from "./projectItem/ProjectItem";
import {Title} from "../common/components/title/Title";

export function MyProjects() {

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <div className={style.projectHeader}>
                    <Title title={'My projects'}/>
                </div>
                <div className={style.projectContent}>
                    <ProjectItem title={'title number 1'} description={'short description'}/>
                    <ProjectItem  title={'title number 2'} description={'short description 2'}/>
                </div>
            </div>
        </div>
    )
}