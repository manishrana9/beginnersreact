import React, { PureComponent } from 'react'

class PureComponent1 extends PureComponent {
    render() {
        console.log("********Pure Component***********")
        return (
            <div>
                pure component {this.props.name1}
            </div>
        )
    }
}

export default PureComponent1
