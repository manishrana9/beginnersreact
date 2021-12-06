import React, { Component } from 'react'
import Button from '@mui/material/Button';
 class UpdateLifeCycle extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name1:'Manish'
         }
     }
    static getDerivedStateFromProps(prop,state){
        console.log("getDerivedStateFromProps")
        return null;
    }

    shouldComponentUpdate(nextprops,nextstate){
        console.log("shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("getSnapshotBeforeUpdate")
        return null
    }
     
    componentDidUpdate(prevprop,prevstate,snapshotvlue){
        console.log("componentDidUpdate")
        return false
    }
    evenhandler=()=>{
        this.setState({
            name1:"Manish Rana"
        })
    }
    render() {
        const {name1}=this.state
        return (
            <div>
                Update Life Cycle :
                <div><li>getDerivedStateFromProps</li></div> 
                <div><li>shouldComponentUpdate : Rarely Used</li></div> 
                <div><li>render</li></div> 
                <div><li>getSnapshotBeforeUpdate : Usually used to maintain state </li></div> 
                <div><li>componentDidUpdate </li></div> 
                <div>******************************************************************</div>
                <div>
                    {/* <button onClick={this.evenhandler}>Click the Button</button> */}
                    <Button onClick={this.evenhandler} variant="contained">Hello World</Button>
                    <div>{name1}</div>
                <div>*************************Remaining Lifecycle*********************************</div>
                <div><li>componentWillUnmount</li></div> 
                <div><li>Static getDerivedStateFromError(error)</li></div> 
                <div><li>ComponentDidCatch(error,info)</li></div> 
                </div>
            </div>
        )
    }
}

export default UpdateLifeCycle
