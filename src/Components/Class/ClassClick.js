import React, { Component } from 'react'

class ClassClick extends Component {

    fnclick=()=>{
        // console.log("I am Clicked")
        alert("i am clicked")
    }

    render() {
        return (
            <div>
                 <button onClick={this.fnclick}>click Me</button>
            </div>
        )
    }
}

export default ClassClick
