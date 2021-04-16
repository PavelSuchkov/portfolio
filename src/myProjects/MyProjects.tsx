import React from "react";
import style from "./MyProjects.module.css";
import styleContainer from './../common/styles/Container.module.css'
import {ProjectItem} from "./projectItem/ProjectItem";


export function MyProjects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <div className={style.projectHeader}>
                    <div className={style.projectTitleWrapper}>
                        <h3>My projects</h3>
                    </div>
                </div>
                <div className={style.projectContent}>
                    <ProjectItem title={'title number 1'} description={'short description'}/>
                    <ProjectItem  title={'title number 2'} description={'short description 2'}/>
                </div>
            </div>
        </div>
    )
}