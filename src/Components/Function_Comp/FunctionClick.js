import React from 'react'

function FunctionClick() {
    
    const fnclick=()=>{
        // console.log("I am Clicked")
        alert("i am clicked")
    }

    // function fnclick(){
    //     alert("i am clicked")
    // }
    return (
        <div>
            Function Click
            <div>
                <button onClick={fnclick}>Submit</button>
            </div>
        </div>
    )
}

export default FunctionClick
