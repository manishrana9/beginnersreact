import React, { Component } from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            msg: 'Welcome Visitor!!'
        }
    }
    changemessage() {
        this.setState({
            msg: 'Thanks for Subscribing!!'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={() => this.changemessage()}>Subscribe</button>
            </div>
        )

    }
}

export default Message