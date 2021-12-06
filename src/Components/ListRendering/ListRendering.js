import React from 'react'
import Person from './Person'
function ListRendering() {

    // const names = ['Manish', 'Arun', 'John']
    // const namesrender = names.map((nm1) => {
    //     return <h2>{nm1}</h2>
    // })

    const person=[
        {
            id:1,
            Name:'Manish',
            email:'manish.rana9@gmail.com',
            Skill:'Full Stack Developer'
        },
        {
            id:2,
            Name:'Arun',
            email:'arunxyz9@xyz.com',
            Skill:'System Admin'
        },
        {
            id:3,
            Name:'John',
            email:'johnxyz@xyz.com',
            Skill:'Business Analyst' 
        }
    ]

    const persondetails=person.map((person)=>{return <Person person1={person} key={person.id}></Person>})
    // return (<div>{namesrender}</div>)}

    return (<div>{persondetails}</div>)}
export default ListRendering
