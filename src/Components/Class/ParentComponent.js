import React, { Component,PureComponent } from 'react'
import RegularComponent from './RegularComponent'
import PureComponent1 from './PureComponent1'
class ParentComponent extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name1:"Manish"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name1:"Manish"
            })
        },2000)
    }
    
    render() {
        console.log("********Parent Component***********")
        return (
            <div>
                Parent Component
                <RegularComponent name1={this.state.name1}></RegularComponent>
                <PureComponent1 name1={this.state.name1}></PureComponent1>
            </div>
        )
    }
}

export default ParentComponent
