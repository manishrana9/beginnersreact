import React, { Component } from 'react'
import Child from './Child'
class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentname:"Parent"
        }
    }
    
    greetparent=(msg)=>{
        alert('Hello '+this.state.parentname + msg)
    }

    render() {
        return (
            <div>
                <Child child={this.greetparent}></Child>
            </div>
        )
    }
}

export default Parent
