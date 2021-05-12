import React from "react";
import style from "./Freelance.module.css";
import {Title} from "../common/components/title/Title";

export function Freelance() {
    return (
        <div className={style.freelanceBlock}>
            <div className={style.freelanceContainer}>
                <div className={style.freelanceTitleContainer}>
                    <Title title={'I Am Available For Freelancer'}/>
                    {/*<h3>I Am Available For Freelancer</h3>*/}
                </div>
                <div className={style.HireMeContainer}>
                    <h3>Hire me</h3>
                </div>
            </div>
        </div>
    )
}