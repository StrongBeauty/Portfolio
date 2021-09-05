import React from 'react'
import style from './Contacts.module.css'
import styleContainer from '../Common/Styles/Container.module.css'
import {Footer} from "../Footer/Footer";
import {useForm} from 'react-hook-form';
import {Title} from "../Common/Components/Title/Title";


export const Contacts = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = values => console.log(values);
    console.log(errors);

    return (
        <div className={style.contactsBlock}>

            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={'Contacts'}/>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={style.form}>
                    <input type="text" placeholder="Name" {...register("Name", {
                        required: true,
                        minLength: 1,
                        maxLength: 15
                    })} />
                    <input type="tel" placeholder="Number" {...register("Number", {
                        required: true,
                        minLength: 7,
                        maxLength: 15,
                        pattern: /\+?[0-9\s\-\(\)]+/i
                    })} />
                    <input type="email" placeholder="email" {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                    })} />
                    <textarea type="text" placeholder="Text" {...register("Text", {required: true})} />
                    {(errors.Name || errors.Number || errors.email || errors.Text) && <span>This field is required</span>}
                    </div>
                    <div className={style.button}>
                        <input type="submit"/>

                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    )
}