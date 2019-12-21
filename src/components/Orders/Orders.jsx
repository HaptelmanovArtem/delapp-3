import React from 'react';
import {connect} from 'react-redux';
import './OrdersStyle.css';
import {Link} from 'react-router-dom';
import {reduxForm} from 'redux-form';

import InfoAboutClient from './InfoAboutClient/InfoAboutClient';
import {SetClientsThunkCreator,SetClientsTodayThunkCreator,
    SetClientsDateThunkCreator,SetSearchQueryDateAC,
    SetIsDoneOrederThunkCreator,SetIsDownloadingAC,SetClientsTodayThunkCreatorCF} from '../../reducers/AddClient.js';
import SearchBarComponent from './SearchBar/SearchBar.jsx';



// i should create new component for search bar


class Orders extends React.Component{
    constructor(props){
        super(props);
        this.HandleSetOrders = this.HandleSetOrders.bind(this);
        this.HandlSetIsDone = this.HandlSetIsDone.bind(this);
        this.HandleSearchQuery = this.HandleSearchQuery.bind(this);
        this.HandleSetOrdersToday = this.HandleSetOrdersToday.bind(this);
        this.HandleSetOrdersTodayCF = this.HandleSetOrdersTodayCF.bind(this);
    }
    componentDidMount(){
        this.props.SetIsDownloadingAC(true);
        this.props.SetClientsThunkCreator(Response.data);
        this.props.SetIsDownloadingAC(false);
    }
    HandleSetOrders(){
        this.props.SetIsDownloadingAC(true);
        this.props.SetClientsThunkCreator(Response.data);
        this.props.SetIsDownloadingAC(false);
    }
    HandleSetOrdersToday(){
        this.props.SetIsDownloadingAC(true);
        this.props.SetClientsTodayThunkCreator();
        this.props.SetIsDownloadingAC(false);
    }
    ValidSearchQuery = (value) =>{
        return /([2]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[01]))/i.test(value) ? undefined: "Не корректно введена дата!";
    }
    HandlSetIsDone(isDone, id){
        this.props.SetIsDownloadingAC(true);
        this.props.SetIsDoneOrederThunkCreator(isDone,id);
        this.props.SetIsDownloadingAC(false);
    }
    HandleSearchQuery(searchQuery){
        this.props.SetClientsDateThunkCreator(searchQuery);
        this.props.reset();
    }
    HandleSetOrdersTodayCF(){
        this.props.SetClientsTodayThunkCreatorCF();
    }
    render(){
        return(
            <main className="oreders-wrapper">
               <SearchBarComponent 
                    HandleSetOrdersToday={this.HandleSetOrdersToday} 
                    HandleSetOrders = {this.HandleSetOrders}
                    HandleSetOrdersTodayCF = {this.HandleSetOrdersTodayCF}
                    HandleSearchQuery = {this.HandleSearchQuery}
                    ValidSearchQuery = {this.ValidSearchQuery}
               />
                <ul className="clients">
                    {this.props.isDownloading 
                    ? <img src="./downloading.gif" alt="Load..."/>
                    :
                    this.props.orders.length > 0 
                        ? this.props.orders.map((item)=>
                            <li key={item._id}>
                                {item.isDone === "true"
                                    ? <div className="oreder-wrapper isDone">
                                        <button onClick={()=>{this.HandlSetIsDone("false",item._id)}}>
                                            Не выполнен
                                        </button>
                                        <Link to={`/edit/${item._id}`} >
                                            Изменить заказ
                                        </Link>
                                        <InfoAboutClient FirstName={item.FirstName} SecondName={item.SecondName}
                                            Phone={item.Phone} City={item.Address.City} Street={item.Address.Street}
                                            StreetNumber={item.Address.StreetNumber} DeliveryName={item.Address.DeliveryName}
                                            DeliveryNumber={item.Address.DeliveryNumber} Price={item.Price}
                                            ProductName={item.ProductName} DateDelivering={item.DateDelivering}
                                            isDone={item.isDone} DateCreate={item.DateCreate}
                                            />
                                        </div>                          
                                    :
                                    <div className="oreder-wrapper isNotDone">
                                        <button onClick={()=>{this.HandlSetIsDone("true",item._id)}}>
                                            Выполнить
                                        </button>
                                        <Link to={`/edit/${item._id}`}>
                                            Изменить заказ
                                        </Link>
                                        <InfoAboutClient FirstName={item.FirstName} SecondName={item.SecondName}
                                            Phone={item.Phone} City={item.Address.City} Street={item.Address.Street}
                                            StreetNumber={item.Address.StreetNumber} DeliveryName={item.Address.DeliveryName}
                                            DeliveryNumber={item.Address.DeliveryNumber} Price={item.Price}
                                            ProductName={item.ProductName} DateDelivering={item.DateDelivering}
                                            isDone={item.isDone}  DateCreate={item.DateCreate}
                                            />
                                    </div>  
                                }    
                            </li>
                    ) : <h1>Ничего не найдено</h1>}
                </ul>
            </main>
        );
    }
}

const mapStateToProps = state => ({
    orders: state.AddClientReducer.clients,
    search: state.form.SearchQueryForm,
    isDownloading: state.AddClientReducer.isDownloading
});

let OrdersComponent = reduxForm({form: "SearchQueryForm", enableReinitialize: true})(Orders);

OrdersComponent = connect(mapStateToProps,{SetClientsThunkCreator,SetClientsDateThunkCreator,
     SetClientsTodayThunkCreator,SetClientsTodayThunkCreatorCF,
     SetSearchQueryDateAC,SetIsDoneOrederThunkCreator,SetIsDownloadingAC})(OrdersComponent);

export default OrdersComponent;