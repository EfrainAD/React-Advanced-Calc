import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        answer: null,
        number: null,
        operator: null, // '+', '-', '/', '*', or null
        clearDisplay: true, // clearDisplay out the display.
        
        display: '0'
    }
    
    printUpdate = (msg) => {console.log(`${msg}\ndisplay: ${this.state.display} \nstored: ${this.state.stored} \noperator: ${this.state.operator} \nnew: ${this.state.new}`)}

    calculate = () => {
        const number = parseInt(this.state.display)
        let answer = null
        switch (this.state.operator) {
            case '+':
                answer = this.state.answer + number
                break;
            case '-':
                answer = this.state.answer - number
                break;
            case '*':
                answer = this.state.answer * number
                break;
            case '/':
                answer = this.state.answer / number
            break;
            case '%':
                answer = this.state.answer % number
            break;
            case '':
        
            default:
                console.log('Error message.')
                break;
        }
        console.log(`${this.state.answer} ${this.state.operator} ${number} = ${answer}`)
        return answer;
    }

    handleClick = (e) => {
        // Get the number from to the display and converts it to a number or get's a N.
        let holder = parseInt(e)
        console.log('input: ', e)
        // Make sure there are no leading 0's in the display (ex. 00)
        if ((this.state.display === '0' && e === '0')) {
            // Do nothing
        }
        // If input is a number, then add it to the display
        // NOTE: parseInt() returns '0' as a NaN
        else if (holder || e === '0') {
            if (this.state.clearDisplay === true) {
                this.setState({display: holder, clearDisplay: false})
            } else {
                holder = this.state.display + e
                this.setState({display: holder})
            }
        }
        // Rest is non-number inputs.
        else if (e === 'AC') {
            // Set state back to defalut.
            this.setState({answer: null, number: null, operator: null, clearDisplay: true, display: '0'})
        }
        
        // If any of the calculators mathmatical calulations.
        else if (e === '+' || e === '-' || e === 'x' || e === '/' || e === '%') {
            if (this.state.display === '0') {
                // Do nothing, perventing user error.
            } 
            else if ( !this.state.answer ) {
                this.setState({answer: parseInt(this.state.display), 
                                     operator: e, 
                                     clearDisplay: true})
            }
            else {
                // Do the math!
                console.log('this.state.answer: ', this.state.answer)
                const answer = this.calculate()
                this.setState({answer: answer, clearDisplay: true, display: answer})
            }
        }
        // I only want the = to do something if there two number already.
        else if (e === '=' ) {
            const answer = this.calculate()
            this.setState({answer: answer, operator: null, clearDisplay: true, display: answer})
        }
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