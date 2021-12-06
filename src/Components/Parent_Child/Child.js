import React, { Component } from 'react'

class Child extends Component {
   
    render() {
        // const {greetparent}=this.props
        // console.log(greetparent)
        return (
            <div>
                <button onClick={()=>{this.props.child(" Good Morning from Child")}}>Greet Parent</button>
            </div>
        )
    }
}

export default Child
