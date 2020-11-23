import React, {Component} from 'react'

class Message extends React.Component{
    constructor(){
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }
    changemessage(){
        this.setState({message: 'Update'})
    }
    render(){
    return(
        <div>
             <h1>{this.state.message}</h1>
             <button onClick={() => this.changemessage()}>Login</button>
        </div>
    )
    }
}

export default Message