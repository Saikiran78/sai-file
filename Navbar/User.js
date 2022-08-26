import React, {useState}from 'react';

function User() {
    const [name, setName] = useState('Arun kumar');
    return (
        <div>
            {name}
        </div>
    );
}
export default User;