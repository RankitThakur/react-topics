import React from "react";

class PropsWithClass extends React.Component {
    constructor(){
        super();
        this.state = {
            name:'rankit',
            count: 0,
            props: this.props
        }
    }
    subscribe = () => {
        this.setState({
            name:'ankit',
            count: this.state.count+1,
            props: this.props
        })
        
    }
render () {
    return (<div>
        <h1>Class Component</h1>
        <h1>Count {this.state.count}</h1>
        <h1>Hello {this.state.name}</h1>
        <h1>Props Update {this.state.props}</h1>
        <button onClick={ () => { this.subscribe()}}>Change name</button>
        <h1>-----------------------------------------------------</h1>
        </div>)
}
}

export default PropsWithClass