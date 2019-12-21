import Axios from 'axios';

const initialState = {
    clients:[],
    searchQuery: "",
    isDownloading: true,
    isLogin: false
}


const AddClientReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_CLIENT":{
            let id = state.clients.length;
            let newClient = {
                ...action.payload,
                id
            }
            return {
                ...state,
                clients:[
                    ...state.clients,
                    newClient
                ]
            };
        }
        case "SET_CLIENTS":{
            return {
                ...state,
                clients: action.payload
            }
        }
        case "SET_SEARCHQUERY":{
            return {
                ...state,
                searchQuery: action.payload
            }
        }
        case "SET_ISDONE":{
            return state;
        }
        case "SET_IS_DOWNLOADING":{
            return {
                ...state,
                isDownloading: action.payload
            }
        }
        case "SET_LOGIN":{
            return{
                ...state,
                isLogin: action.payload
            }
        }
        default: 
            return state;
    }
}

export const AddClientAC = (client) => ({
    type: "ADD_CLIENT",
    payload: client
});

export const SetClientsAC = (clients) =>({
    type: "SET_CLIENTS",
    payload: clients
});

export const SetSearchQueryDateAC = (text) =>({
    type: "SET_SEARCHQUERY",
    payload: text
});

export const SetIsDoneAC = (isDone,id) => ({
    type: "SET_ISDONE",
    payload: {isDone,id}
});

export const SetIsDownloadingAC = (isDownloading) =>({
    type: "SET_IS_DOWNLOADING",
    payload: isDownloading
});

export const SetSignInAC = isLogin =>({
    type: "SET_LOGIN",
    payload: isLogin
});


export const AddClientsThunkCreator = (client) => {
    return dispatch => {
        dispatch(AddClientAC(client));
        Axios.post('https://app-delivery-3.herokuapp.com/api/clients',client)
        .then(Response => console.log(Response.data));
    }
}

export const SetClientsThunkCreator = () => {
    return dispatch => {
        Axios.get('https://app-delivery-3.herokuapp.com/api/clients').then((Response)=>{
            dispatch(SetClientsAC(Response.data));
        })
        .catch(error=>{
            console.log(error.message);
        });
    }
}

export const SetClientsTodayThunkCreator = () => {
    return dispatch => {
        Axios.get('https://app-delivery-3.herokuapp.com/api/clients/search/date/today').then((Response)=>{
            dispatch(SetClientsAC(Response.data));
        })
        .catch(error=>{
            console.log(error.message);
        });
    }
}

export const SetClientsDateThunkCreator = (searchingDate = "1000") => {
    return dispatch => {
        console.log(searchingDate);
        Axios.get(`https://app-delivery-3.herokuapp.com/api/clients/search/${searchingDate}`).then((Response)=>{            
            dispatch(SetClientsAC(Response.data));
        })
        .catch(error=>{
            console.log(error.message);
        });
    }
}

export const SetIsDoneOrederThunkCreator = (isDone,id) => {
    return dispatch =>{
        console.log(id);
        Axios.put(`https://app-delivery-3.herokuapp.com/api/clients/orders/${id}/${isDone}`)
        .then(Response=>{
            dispatch(SetIsDoneAC(isDone,id));
            Axios.get('https://app-delivery-3.herokuapp.com/api/clients').then((Response)=>{
                dispatch(SetClientsAC(Response.data));
            })
            .catch(error=>{
                console.log(error.message);
            }); 
        })
        .catch(err=>{
            console.log(err.message);
        });
    }
}

export const SetClientsTodayThunkCreatorCF = () => {
    return dispatch => {
        console.log("AA");
        Axios.get('https://app-delivery-3.herokuapp.com/api/clients/search/date/today/cf').then((Response)=>{
            dispatch(SetClientsAC(Response.data));
            alert("Файл готов!");
        })
        .catch(error=>{
            console.log(error.message);
        });
    }
}

export default AddClientReducer;