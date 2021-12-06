import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg:'Hello'
        }
        // this.fnclick=this.fnclick.bind(this)
    }
    
    fnclick=()=>{
        this.setState({
            msg:"Welcome"
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.msg}</div>
                {/* <button onClick={this.fnclick.bind(this)}>Click</button>  */}
                {/* <button onClick={()=>{this.fnclick()}}>Click</button> */}
                {/* <button onClick={this.fnclick}>Click</button> */}
                <button onClick={this.fnclick}>Click</button>
            </div>
        )
    }
}

export default EventBind
