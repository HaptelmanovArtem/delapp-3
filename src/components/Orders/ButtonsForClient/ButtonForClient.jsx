import React from 'react';

class ButtonForClient extends React.Component{
    render(){        
        return(
            <>
                <button onClick={()=>this.props.SetDoneAC(this.props.isDone,this.props.id)}>Изменить</button>
                <button onClick={()=>this.props.SetDoneAC(this.props.isDone,this.props.id)}>Удалить</button>
                
            </>
        )
    }
}



export default ButtonForClient;