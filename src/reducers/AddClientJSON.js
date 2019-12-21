const initialState = {
    orders: [],
    isDownloading: false
}



const AddClientJSONReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_ORDERS":{
            return{
                ...state,
                orders: action.payload
            }
        }
        case "SET_IS_DONE":{
            const index = state.orders.findIndex(i => i.id === action.payload.id);
            let newState = {...state};
            newState.orders[index].isDone = action.payload.isDone;
            return {
                ...state,
                orders: [
                    ...state.orders
                ]
            };
        }
        case "SET_IS_DOWNLOADING":{
            return{
                ...state,
                isDownloading: action.payload.isDownloading
            }
        }
        default: 
            return state;
    }
}

export const SetOrdersAC = (orders) =>({
    type: "SET_ORDERS",
    payload: orders
});

export const SetIsDoneAC = (isDone,id)=>({
    type: "SET_IS_DONE",
    payload: {isDone, id}
});

export const SetIsDownloadAC = (isDownloading) => ({
    type: "SET_IS_DOWNLOADING",
    payload: isDownloading
})

export default AddClientJSONReducer;


