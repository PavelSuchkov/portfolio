import React from "react";
import style from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";


export function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'}/>
                <div className={style.formContainer}>
                    <form action="" className={style.form}>
                        <input type="text" placeholder={'name'}/>
                        <input type="text" placeholder={'e-mail'}/>
                        <textarea name="" id="" placeholder={'Your message'}/>
                    </form>
                </div>
                <div className={style.contactsButtonContainer}>
                    <button type={"submit"}>Send</button>
                </div>
            </div>
        </div>
    )
}