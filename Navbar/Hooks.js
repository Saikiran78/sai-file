import React from 'react';


class Hooks extends React.Component{
    state={
        name:"sai"
    }
    render(){
        return(
              <div>
                {
                  {this.state.name}
                }
              </div>
        )
    };
}
export default Hooks;