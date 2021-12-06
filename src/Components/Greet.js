import React from 'react'

const Greet = (props) => {   //Named export which should be imported with the same name with Curly braces in Parent component
    //  console.log(props)
    const {name1,city1}=props
    return (
        <div>
            <h1>
                Name : {name1} , City : {city1}
                <div>{props.children}</div>
            </h1>
        </div>
    )
}

// function Greet() {
//     return (
//         <h1>
//             Welcome to React for Beginners !!
//        </h1>
//     )
// }

export default Greet