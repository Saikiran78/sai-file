
/*class Website extends React.Component{
    render(){
        return(
            <div>
                <input type='button' value='login'/>
            </div>
        )
    }
}
export default Website;*/


/*function Website(props){
    return(
        <div>
        {props.name}
        </div>
    )
}
export default Website;*/



/*class Website extends React.Component{
    state={
        name:'saikiran',
        rollno:123456
    }
    render(){
        return(
              <div>
                {this.state.name}
                {this.state.rollno}
              </div>
        )
    }
}
export default Website;*/


/*function Website (){
    const array=[
        {
            name:'kiran'
        },
        {
            name:'kiran'
        },
        {
            name:'kiran'
        },
        {
            name:'kiran'
        },
        {
            name:'kiran'
        },
        {
            name:'kiran'
        },
        
    ]
    return(
           <div>
            {
                array.map((data) => <li>{data.name}</li>)
            }
           </div>
    )
}
export default Website;*/


import React from "react"
import Button from './Button';
import Icon from "./Icon";
import Logo from '../Images/Img1.svg'


function Header(){
    return(
        <div className="one">
            <input type='search' placeholder="Search" size='50' autofocus='on'/>
            <img className='IMAGE' src={Logo} alt='logo'/>
            <Button />
            <Icon />
        </div>
    )
}
export default  Header;