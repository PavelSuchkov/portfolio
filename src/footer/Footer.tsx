import React from "react";
import style from "./Footer.module.css";
import {Title} from "../common/components/title/Title";

export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <Title title={'Pavel Suchkou'}/>
                {/*<div className={style.footerTitleContainer}>*/}
                {/*    <h3>Pavel Suchkou</h3>*/}
                {/*</div>*/}
                <div className={style.footerBottomContainer}>
                    <div className={style.footerLinksContainer}>
                        <a href="" className={style.odd}>1</a>
                        <a href="" className={style.even}>2</a>
                        <a href="" className={style.odd}>3</a>
                        <a href="" className={style.even}>4</a>
                    </div>
                </div>
            </div>
        </div>
    )

}