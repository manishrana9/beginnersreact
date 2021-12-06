import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    incrementcounter(){
        // this.setState(
        //     {
        //     count:this.state.count+1
        //     },()=>{console.log(this.state.count)}
        // )
        // console.log(this.state.count)

        this.setState(prevstate=>({           
            count:prevstate.count+1
        }))
    }
    incrementfive(){
        this.incrementcounter()
        this.incrementcounter()
        this.incrementcounter()
        this.incrementcounter()
        this.incrementcounter()
    }
    render() {
        // console.log(this.state.count)
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=>{this.incrementfive()}}>Increment</button>
            </div>
        )
    }
}

export default Counter
