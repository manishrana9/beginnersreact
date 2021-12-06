import React,{Component} from "react";

class Welcome extends Component{
    render(){
        const {name1,city1}=this.props
        //console.log(this.props.name)
        return (
        <div>
            <h1>Class Component {this.props.name1} {this.props.city1} </h1>
            {/* {this.props.children} */}
        </div>
        )
        
    }
}

export default Welcome