import React, { Component } from 'react'

class MountLifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Manish"
        }
        console.log("constructor Mounted")
    }
       static getDerivedStateFromProps(props,state){
           console.log('Derived state from Props')
           return null
       }

       componentDidMount(){
           console.log("Component Mounted")
       }
    
    render() {
        console.log("Render")
        return (
            <div>
                Mount Life Cycle :
                   <div><li>constructor</li></div> 
                   <div><li>getDerivedStateFromProps</li></div> 
                   <div><li>render</li></div> 
                   <div><li>componentDidMount : Called only once</li></div> 
            </div>
        )
    }
}

export default MountLifeCycle
