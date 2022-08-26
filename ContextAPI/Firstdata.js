import React, { useContext } from 'react'
import {store} from'../App.js';

function Firstdata(){
    const [data] = useContext(store);
    return(
<div>
    {
    data.map((res) => <h1>{res.name}</h1>)
    }
</div>
    )
}
export default Firstdata;
