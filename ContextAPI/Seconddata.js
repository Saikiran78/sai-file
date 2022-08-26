import React, { useContext ,useState } from 'react'
import { store } from '../App.js'

function Seconddata() {
    const [data] = useContext(store);
    const [Content,setContent] = useState('');
    const 
    return (
        <div>
            {
                data.map((res, index) => <h1 key={index}>{res.name}</h1>)
            }
            <form>
            <input type='text' placeholder='Type here' onChange={(e)=>setContent(e.target.value)}/>
            <input type='submit' value='Add'/>
            </form>
        </div>
    )
}
export default Seconddata;