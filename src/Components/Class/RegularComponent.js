import React, { Component } from 'react'

 class RegularComponent extends Component {

    render() {
        console.log("********Regular Component***********")
        return (
            <div>
                Regular Component {this.props.name1}
            </div>
        )
    }
}

export default RegularComponent
