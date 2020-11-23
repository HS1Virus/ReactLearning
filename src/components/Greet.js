import React from 'react'

/*function Greet(){
    return <h1>Hello Hemil</h1>
}*/

/*const Greet = () => <h1>Hello Hemil</h1>*/

const Greet = (props) =>{
    const {name} = props
return (
<div>
<h1>Hello {name}</h1>
</div>
)
} 

export default Greet