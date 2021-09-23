import React from 'react'
import style from './Contacts.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'
import {useForm} from 'react-hook-form';
import {Title} from "../Common/Components/Title/Title";
import emailjs from 'emailjs-com';;


export const Contacts = () => {

    const {register, handleSubmit,reset, formState: {errors}} = useForm();
   /* const onSubmit = values => console.log(values);
    console.log(errors);
*/


        const sendEmail = (formData) => {
            reset()
            emailjs.send('service_mail', 'portfolio_template', formData, 'user_C2Cfz0DKAOjtmRqIZvi1e')
                .then((result) => {
                    console.log(result.text);
                    reset()
                }, (error) => {
                    console.log(error.text);
                });
        };

    return (
        <div id='contacts' className={style.contactsBlock}>

            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <div className={style.header}>
                    <Title text={'Contacts'}/>
                </div>

                <form className={style.formBlock} onSubmit={handleSubmit(sendEmail)}>
                        <input  className={style.form} type="text" placeholder="Name" name="name" {...register("name", {
                            required: true,
                        })} />
                    {(errors.name &&
                    <span className={style.errors}>Error</span>)}
                        <input className={style.form} type="phone" placeholder="Number" name="number" {...register("number", {
                            required: true,
                            minLength: 11,
                            maxLength: 14,
                            pattern: /\+?[0-9\s\-()]+/i
                        })} />
                    {(errors.number &&
                        <span className={style.errors}>Error</span>)}
                        <input className={style.form} type="email" placeholder="Email" name='email' {...register("email", {
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                        })} />
                    {(errors.email &&
                        <span className={style.errors}>Error</span>)}
                        <textarea className={style.message}  placeholder="Message" name='message' {...register("message")} />
                    <div className={style.buttonBlock}>
                        <button className={style.button} type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}