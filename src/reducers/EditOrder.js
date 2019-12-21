const initialState = {
    FirstName: "",
    SecondName: "",
    Phone: "",
    Address: {
        City: "",
        Street: "",
        StreetNumber: "",
        DeliveryName: "",
        DeliveryNumber: ""
    },
    Price: "",
    ProductName: "",
    DateDelivering: ""
};



const EditOrderReducer = (state=initialState, action) => {
    switch(action.type){
        case "SET_ORDER":
            return{
                ...action.payload
            }
        case "CHANGE_ORDER":{
            return {
                ...action.payload
            }
        }
        default: return state;
    }
}

export const SetOrderAC = (order) =>({
    type: "SET_ORDER",
    payload: order
});

export const HandleChange = (filedName,Text) => ({
    type: "HANDLE_CHANGE",
    payload: {filedName, Text}
});

export default EditOrderReducer;