import React from 'react';
import {Field, reduxForm} from 'redux-form';
import './style.css';

const required = value => value ? undefined : "Пустое поле!";
const maxLengthName = value => value.length > 2 ? undefined: "Минимальное количество символов 2!";
const PhoneValid = value => value.length === 10 && !isNaN(Number(value)) ? undefined: "Требуется ввести 9 цифр!(0XXXXXXXXX)";
const CorrectStringValid = value => value.length >= 2 && isNaN(Number(value)) ? undefined: "Не допускаются числа!";
const CorrectNumberValid = value => value.length > 0 && /^[0-9]/i.test(value) ? undefined: "Номер не может начинатся с символа";
const CorrectPriceValid = value => value.length > 0 && !isNaN(Number(value)) ? undefined: "Не корректно введена цена";
const CorrectDateValid = value => /([2]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[01]))/i.test(value) ? undefined: "Не корректно введена дата!";

const inputField = ({input,placeholder,type,meta: {touched, error}}) => {
    return <div className="input-wrapper">
        <input {...input} placeholder={placeholder} type ={type} className = {touched && error ? "errorborder" : null}/>
        {touched && (error && <span className="errormessage">{error}</span>)}
    </div>
}

const NewClientForm = (props) =>{
        return(
            <main className="newclient-wrapper">
                <form onSubmit={props.handleSubmit(props.HandleSubmit.bind(this))}  className="newclient-form">
                        <Field type = "text" component = {inputField} name = "FirstName" validate = {[required, maxLengthName]} 
                            placeholder="Имя"/>
                        <Field type = "text" component = {inputField} name = "SecondName" validate = {[required, maxLengthName]}
                            placeholder="Фамилия"/>
                        <Field type = "tel" component = {inputField} name = "Phone" validate = {[required, PhoneValid]} 
                            placeholder="Номер телефона"/>
                        <Field type = "text" component = {inputField} name = "City" validate = {[required,CorrectStringValid]} 
                            placeholder="Город"/>
                        <Field type = "text" component = {inputField} name = "Street" validate = {[required,CorrectStringValid]} 
                            placeholder="Улица"/>
                        <Field type = "text" component = {inputField} name = "StreetNumber" validate = {[required,CorrectNumberValid]}
                            placeholder="Номер дома" />
                        <Field type = "text" component = {inputField} name = "DeliveryName" validate = {[required,CorrectStringValid]} 
                            placeholder="Перевозщик"  />
                        <Field type = "text" component = {inputField} name = "DeliveryNumber" validate = {[required,CorrectNumberValid]} 
                            placeholder="№ отделения" />
                        <Field type = "text" component = {"textarea"} name = "ProductName" validate = {required} 
                            placeholder="Описание продукта" />
                        <Field type = "text" component = {inputField} name = "Price" validate = {[required,CorrectPriceValid]} 
                            placeholder="Цена"/>
                        <label htmlFor ="DateDelivering">Дата отправки:</label>
                        <Field type = "date" component = {inputField} name = "DateDelivering" validate = {[required,CorrectDateValid]} 
                            placeholder="Дата отправки" className="dateField"/>

                    <div className = "button-block">
                      <button type="submit" className="submit-button">Создать заказ</button>    
                        {/* <button type="button" onClick={props.reset} className="reset-button">Сбросить данные</button> */}
                    </div>
                </form>
            </main>   
        )
    }

const NewClientReduxForm = reduxForm({form: "NewClientForm", enableReinitialize: true})(NewClientForm);

export default NewClientReduxForm;