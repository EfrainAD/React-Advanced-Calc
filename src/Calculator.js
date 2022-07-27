import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        answer: 0,
        input: null,
        Operator: null // '+', '-', '/', '*', or null
    }
    print = () => {console.log('hello')}
    handleClick = (e) => console.log(e)
render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p onClick={this.print}>Values: </p>
                <div className="answer-box">{this.state.answer}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={()=>this.handleClick("AC")}>AC</button>
                    <button className="calc-button calc-button-top" onClick={()=>this.handleClick("+/-")}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={()=>this.handleClick("%")}>%</button>
                    <button className="calc-button calc-button-op" onClick={()=>this.handleClick("/")}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={()=>this.handleClick("7")} >7</button>
                    <button className="calc-button" onClick={()=>this.handleClick("8")}>8</button>
                    <button className="calc-button" onClick={()=>this.handleClick("9")}>9</button>
                    <button className="calc-button calc-button-op" onClick={()=>this.handleClick("x")}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={()=>this.handleClick("4")}>4</button>
                    <button className="calc-button" onClick={()=>this.handleClick("5")}>5</button>
                    <button className="calc-button" onClick={()=>this.handleClick("6")}>6</button>
                    <button className="calc-button calc-button-op" onClick={()=>this.handleClick("-")}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={()=>this.handleClick("1")}>1</button>
                    <button className="calc-button" onClick={()=>this.handleClick("2")}>2</button>
                    <button className="calc-button" onClick={()=>this.handleClick("3")}>3</button>
                    <button className="calc-button calc-button-op" onClick={()=>this.handleClick("+")}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={()=>this.handleClick("0")}>0</button>
                    <button className="calc-button" onClick={()=>this.handleClick(".")}>.</button>
                    <button className="calc-button calc-button-op" onClick={()=>this.handleClick("=")}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator