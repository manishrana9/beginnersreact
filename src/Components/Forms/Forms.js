import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username:'Man',
            comments:'',
            topic:'react'
        }
    }

    handleusernamchange=(event)=>{
        this.setState({
            username:event.target.value           
        })
    }

    handlecommentschange=(event)=>{
        // console.log(event)
        this.setState({
            comments:event.target.value,
            
        })
    }

    handleselectchange=(event)=>{
        // console.log(event)
        this.setState({
            topic:event.target.value,
            
        })
    }

    handlesubmit=(event)=>{
        // console.log(event)
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}` )
        event.preventDefault()
    }

    render() {
        const{username,comments,topic}=this.state
        return (
            <form onSubmit={this.handlesubmit}>
                <div>
                    <label>Username :</label>
                    <input type="text" value={username} onChange={this.handleusernamchange}></input>
                </div>
                <div>
                    <label>Comments :</label>
                    <textarea value={comments}  onChange={this.handlecommentschange}></textarea>
                </div>
                <div>
                    <label>Topic :</label>
                   <select value={topic} onChange={this.handleselectchange}>
                       <option value="angular">Angular</option>
                       <option value="react">React</option>
                       <option value="vue">Vue</option>
                   </select>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default Forms
