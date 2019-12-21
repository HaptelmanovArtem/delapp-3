import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';


class SearchBar extends React.Component{
    render(){
        return(
            <div className="submenu-wrapper">
                <button onClick={this.props.HandleSetOrders} className="allOrders">Все заказы</button>
                <button onClick={this.props.HandleSetOrdersToday} className="allOrders">Заказы на сегодня</button>
                <button onClick={this.props.HandleSetOrdersTodayCF} className="allOrders">Файл для сегодняшних заказов</button>
                <form onSubmit={this.props.handleSubmit(()=>this.props.HandleSearchQuery(this.props.search.values.SearchQuery))}>
                    <Field 
                    type="text" component={"input"}
                    name="SearchQuery" placeholder = "YYYY-MM-DD" 
                    className="searchQueryField" validate = {this.props.ValidSearchQuery}/>
                    <button className="Submit-button" type="submit"><FontAwesomeIcon icon = {faSearch} /></button>
                    {this.props.search !== undefined && this.props.search.submitFailed && this.props.search.syncErrors !== undefined
                        ? <span className = "errortext">{this.props.search.syncErrors.SearchQuery}</span> 
                        : null}
                </form>
            </div>
        )
    }
}

let SearchBarComponent = reduxForm({form: "SearchQueryForm", enableReinitialize: true})(SearchBar);

const mapStateToProps = state => ({
    search: state.form.SearchQueryForm
});

SearchBarComponent = connect(mapStateToProps,{})(SearchBarComponent);

export default SearchBarComponent;