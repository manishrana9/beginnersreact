import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedin: true
        }
    }

    render() {
        //1st
        // if (this.state.isLoggedin) {
        //     return (
        //         <div>Welcome Manish</div>
        //     )
        // }
        // else {
        //     return <div>Welcome Guest</div>
        // }

        // 2nd
        // let msg
        // if(this.state.isLoggedin){
        //     msg=<div>Welcome Manish</div>
        // }
        // else{
        //     msg=<div>Welcome Guest</div>
        // }
        // return (
        //     <div>{msg}</div>
        // )
        //3rd Ternary Best approach can be used inside JSX
        return(
            this.state.isLoggedin? <div>Welcome Manish</div> :<div>Welcome Guest</div>
        )
        //4th Short Circuit {Something or Nothing}
        // return(this.state.isLoggedin&&<div>Welcome Manish</div>)
        

    }
}

export default UserGreeting
