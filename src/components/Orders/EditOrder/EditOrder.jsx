import React from 'react';
import NewClientReduxForm from '../../NewClient/NewClient';
import {SetOrderAC,HandleChange} from '../../../reducers/EditOrder.js';
import Axios from 'axios';
import {connect} from 'react-redux';

 // data for initialize value of fields

class EditOrderApp extends React.Component{
    constructor(props){
        super(props);
        this.HandleChange = this.HandleChange.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
    }

    HandleChange(e){
        this.props.HandleChange(e.target.name,e.target.value);
    }

    HandleSubmit(e){
        const DateNow = new Date(Date.now());
        const Year = DateNow.getFullYear();
        const Month = DateNow.getMonth() + 1;
        const Day = DateNow.getDate();
        const {City,Street,StreetNumber,DeliveryName,DeliveryNumber,FirstName,SecondName,Phone,Price,ProductName,DateDelivering} = this.props.formClient.values;
        const Address = {
            City,Street,StreetNumber,DeliveryName,DeliveryNumber
        }
        const newOrder = {
            FirstName,SecondName,Phone,Price,ProductName,DateDelivering,
            Address,
            isDone: false,
            DateCreate: `${Year}-${Month}-${Day}`
        }
        Axios.put(`https://app-delivery-3.herokuapp.com/api/clients/orderchange/
        ${this.props.match.params.id}/${newOrder.FirstName}/${newOrder.SecondName}/${newOrder.Phone}/${newOrder.Address.City}/
        ${newOrder.Address.Street}/${newOrder.Address.StreetNumber}/${newOrder.Address.DeliveryName}/${newOrder.Address.DeliveryNumber}/
        ${newOrder.Price}/${newOrder.ProductName}/${newOrder.DateDelivering}/${newOrder.DateCreate}/${newOrder.isDone}`)
        .then(Response=>{
            console.log(Response.status);
        })
        .catch(err=>console.log(err.message));
    }
    componentDidMount(){
        Axios.get(`https://app-delivery-3.herokuapp.com/api/clients/${this.props.match.params.id}`)
        .then(Response=>{
            let res = Response.data;
            let index = res.findIndex(i=> i._id === this.props.match.params.id);
            this.props.SetOrderAC(res[index]);
        })
        .catch(err=>console.log(err.message))
    }
    render(){
        return (
            <NewClientReduxForm initialValues={
                {
                    ...this.props.clients,
                    City: this.props.clients.Address.City,
                    Street:this.props.clients.Address.Street,
                    StreetNumber:this.props.clients.Address.StreetNumber,
                    DeliveryName:this.props.clients.Address.DeliveryName,
                    DeliveryNumber: this.props.clients.Address.DeliveryNumber
                }
            }
            HandleSubmit = {this.HandleSubmit}/>
        )
    }
}

const mapStateToProps = state =>({
    clients: state.EditOrderReducer ,
    formClient: state.form.NewClientForm
})


const EditOrder = connect(mapStateToProps,{SetOrderAC,HandleChange})(EditOrderApp);

export default EditOrder;