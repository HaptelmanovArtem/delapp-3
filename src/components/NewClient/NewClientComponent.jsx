import React from 'react';
import {connect} from 'react-redux';
import NewClientReduxForm from './NewClient.jsx';
import {AddClientsThunkCreator, SetClientsThunkCreator} from '../../reducers/AddClient.js';



class NewClientApp extends React.Component{
    constructor(props){
        super(props);
        this.HandleSubmit = this.HandleSubmit.bind(this);
    }

    HandleSubmit(event){
        const DateNow = new Date(Date.now());
        const Year = DateNow.getFullYear();
        const Month = DateNow.getMonth() + 1;
        const Day = DateNow.getDate();
        const {City,Street,StreetNumber,DeliveryName,DeliveryNumber,
            FirstName,SecondName,Phone,Price,ProductName,DateDelivering} = this.props.client.values;
        const Address = {
            City,Street,StreetNumber,DeliveryName,DeliveryNumber
        }
        const newOrder = {
            FirstName,SecondName,Phone,Price,ProductName,DateDelivering,
            Address,
            isDone: false,
            DateCreate: `${Year}-${Month}-${Day}`
        }
        this.props.AddClientsThunkCreator(newOrder);
    }

    render(){
        console.log(this.props);  
        return(
                <NewClientReduxForm {...this.props} HandleSubmit = {this.HandleSubmit}/>
        );
    }
}

const NewClientComponent = connect(state=>({client: state.form.NewClientForm}),
{AddClientsThunkCreator,SetClientsThunkCreator})(NewClientApp);

export default NewClientComponent;