import React, { useEffect } from "react";

function Webapp(){
    const[data,setData]=setState(['']);
     useEffect(()=>{
        fetch("http://fakestoreapi.com/products/")
        .then((response)=>response.json())
        .then((data)=>setData(data));
     })
    return(
        <div>
         {
            data.map((res,index)=><li key={index}>{res.image}</li>)
         }
        </div>
    )
}
export default Webapp;