import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

//Skills

export function Skills() {

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'React'} description={'+++'}/>
                    <Skill title={'Redux'} description={'___'}/>
                    <Skill title={'TypeScript'} description={'---'}/>
                    <Skill title={'HTML/CSS'} description={'!!!'}/>
                    <Skill title={'Material UI'} description={'!!!'}/>
                    <Skill title={'StoryBook'} description={'!!!'}/>
                </div>
            </div>
        </div>)

}