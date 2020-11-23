import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state = {count: 0}
    }

    updateCount(){
        this.setState({count: this.state.count+1},
            () => {console.log('This is how u access the new value: ',this.state.count)}
        )
    }

    decrement(){
        this.setState({count: this.state.count-1},() => {console.log('This is how u access the new value: ',this.state.count)})
    }

    render() {
        return (
            <div>
                <h2>The  count is {this.state.count}</h2>
                <button onClick={() => this.updateCount()}>Increment</button>
                <button onClick={() => this.decrement()}>Decrement</button>
            </div>
        )
    }
}

export default Counter
