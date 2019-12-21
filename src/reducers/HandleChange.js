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
}

const HandleChangeReducer = (state=initialState, action) => {
    switch(action.type){
        default: return state;
    }
}

export default HandleChangeReducer;