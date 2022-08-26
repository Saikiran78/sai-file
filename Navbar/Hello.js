import React from "react";

class Hello extends React.Component{
    state={
        number:123
    }
    render(){
    return(
           <div>
            {this.state.number}
           </div>
    )
    }
}
export default Hello;