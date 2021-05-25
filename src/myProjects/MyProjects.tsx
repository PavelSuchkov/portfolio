import React from "react";
import style from "./MyProjects.module.scss";
import styleContainer from '../common/styles/Container.module.scss'
import {ProjectItem} from "./projectItem/ProjectItem";
import {Title} from "../common/components/title/Title";
import socialNetworkIMG from "./../assets/image/social-network.jpg"
import todoListIMG from "./../assets/image/TDL_2.jpg"

export function MyProjects() {

    const socialNetwork = {
        backgroundImage: `url(${socialNetworkIMG})`
    };

    const ToDoList = {
        backgroundImage: `url(${todoListIMG})`
    }

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <div className={style.projectHeader}>
                    <Title title={'My projects'}/>
                </div>
                <div className={style.projectContent}>
                    <ProjectItem style={socialNetwork} title={'Social network'}
                                 description={'social network was created by React & Redux'}/>
                    <ProjectItem style={ToDoList} title={'Todo List'}
                                 description={"You'll never forget ur important things and events"}/>
                </div>
            </div>
        </div>
    )
}