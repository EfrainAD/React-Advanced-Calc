import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        display: 0,
        stored: null,
        operator: null, // '+', '-', '/', '*', or null
        new: true // clear out the display.
    }
    
    printUpdate = (msg) => {console.log(`${msg}\ndisplay: ${this.state.display} \nstored: ${this.state.stored} \noperator: ${this.state.operator} \nnew: ${this.state.new}`)}

    handleClick = (e) => {
        
    }
    
    render() {
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p onClick={this.print}>Values: </p>
                    <div className="answer-box">{this.state.display}</div>
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