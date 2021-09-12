import React from 'react'
import style from './Contacts.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'
import {useForm} from 'react-hook-form';
import {Title} from "../Common/Components/Title/Title";


export const Contacts = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = values => console.log(values);
    console.log(errors);

    return (
        <div id='contacts' className={style.contactsBlock}>

            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <div className={style.header}>
                    <Title text={'Contacts'}/>
                </div>

                <form className={style.formBlock} onSubmit={handleSubmit(onSubmit)}>
                        <input  className={style.form} type="text" placeholder="Name" {...register("Name", {
                            required: true,
                        })} />
                    {(errors.Name &&
                    <span className={style.errors}>Error</span>)}
                        <input className={style.form} type="tel" placeholder="Number" {...register("Number", {
                            required: true,
                            minLength: 11,
                            maxLength: 14,
                            pattern: /\+?[0-9\s\-()]+/i
                        })} />
                    {(errors.Number &&
                        <span className={style.errors}>Error</span>)}
                        <input className={style.form} type="email" placeholder="Email" {...register("email", {
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                        })} />
                    {(errors.Email &&
                        <span className={style.errors}>Error</span>)}
                        <textarea className={style.message}  placeholder="Message" {...register("message", )} />
                    <div className={style.buttonBlock}>
                        <input className={style.button} type="submit"/>
                    </div>
                </form>
            </div>
        </div>
    )
}