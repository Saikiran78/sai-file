import React from 'react';

/*function Pratice1(){
    return(
        <div>
            <h1>sai kiran</h1>
        </div>
    );
}
export default Pratice1;*/


/*class Pratice1 extends React.Component{
    state={
        name:'hari'
    }
    render(){
        return(
            <div>
                {this.state.name}
            </div>
        )
    }
}
export default Pratice1;*/


function Pratice1(){
    const array=[
        {
           name: 'Hari'
        },
        {
            name:'sai'
        },
        {
            name:'arun'
        }

    ]
    
        return(
            <div>
            {
              array.map((data)=>{data.name})
            }
            </div>
        );
}
export default Pratice1;