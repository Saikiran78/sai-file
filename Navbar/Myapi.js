import React, {useEffect, useState} from 'react';

function Myapi(){
    const [data,setData]= useState(['']);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>setData(data));
    })
    return(
             <div className='user'>
                 {data.map((res,index) =><li key={index}>{res.name}</li>)}
             </div>
    );
}
export default Myapi;