import React from 'react'

function Person(prop) {
    const{person1}=prop
    return (
        <div>
            <li>Name : {person1.Name}, Email: {person1.email}</li>
        </div>
    )
}

export default Person
