import React, { Component } from 'react'

class ClassClick extends Component {
    clicked(){
        console.log('button2 clicked')
    }
    render() {
        return (
            <div>
                <button onClick = {this.clicked}>Click me</button>
            </div>
        )
    }
}

export default ClassClick
