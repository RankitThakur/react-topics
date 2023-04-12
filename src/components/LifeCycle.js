import React from "react";

class LifeCycle extends React.Component {
    constructor(){
        super()
        this.state = {
            count:0
        }
        console.warn('i am constructor')
    }

    // componentDidMount(){
    //     console.warn('tets')
    // }

    componentDidUpdate (prePros, preState, snapshot){
        console.warn('first'+ preState)
    }
    shouldComponentUpdate(){
        console.log('should')
        return true
    }
    render(){
        console.warn('i am rander')
        return(
            <div>
            <h1>{this.state.count}</h1>
            <button onClick={()=> this.setState({count: this.state.count+1})}>Data</button>
            </div>
        )
    }

}

export default LifeCycle