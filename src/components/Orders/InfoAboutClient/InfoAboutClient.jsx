import React from 'react';

import './style.css';

class InfoAboutClient extends React.Component{
    render(){
        const {FirstName, SecondName,Phone,City,Street,StreetNumber,DeliveryName,DeliveryNumber,
        Price,ProductName,DateDelivering,isDone,DateCreate} = this.props;
        return(
            <>
                <p>Имя: {FirstName}</p>
                <p>Фамилия: {SecondName}</p>
                <p>Телефон: {Phone}</p>
                <p>Город: {City}</p>
                <p>Улица: {Street}</p>
                <p>Номер дома: {StreetNumber}</p>
                <p>Перевозщик: {DeliveryName}</p>
                <p>Номер склада: {DeliveryNumber}</p>
                <p>Цена: {Price}</p>
                <div className="product-name">
                    <p>Продукт: {ProductName}</p>
                </div>
                <p>Дата отправления: {DateDelivering}</p>
                <p>Дата создания: {DateCreate}</p>
                <p>Статус: {isDone === "true" ? "Выполнено" : "Не выполнено"} </p>
            </>
        );
    }
}


export default InfoAboutClient;