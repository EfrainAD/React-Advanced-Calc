import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        display: 0,
        stored: null,
        operator: null, // '+', '-', '/', '*', or null
        new: true // clear out the display.
    }
    resetState = () => {
        this.setState({
            display: 0,
            stored: null,
            operator: null, // '+', '-', '/', '*', or null
            new: true
        })
    }
    calculate = () => {
        const number1 = this.state.stored
        const number2 = this.state.display
        let answer = null
        
        switch (this.state.operator) {
            case '/':
                answer = number1 / number2
            break
            case 'x':
                 answer = number1 * number2
            break
            case '-':
                answer = number1 - number2
            break
            case '+': 
                answer = number1 + number2
            break    
            default: 
                this.console.log('Error, you shouldn\'t be seeing this.')
            break;
        }
        
        console.log(`${number1} ${this.state.operator} ${number2} = ${answer}`)
        return answer
        // CLEANUP
        if (this.op) {
            
        } else {
            
        }
        this.setState({display: answer, new: true})
        // console.log('THIS end of this.calculate()')
        // END CLEANUP
    }
    
    printUpdate = (msg) => {console.log(`${msg}\ndisplay: ${this.state.display} \nstored: ${this.state.stored} \noperator: ${this.state.operator} \nnew: ${this.state.new}`)}

    handleClick = (e) => {
        console.log(e)
        // Split the input into (is number) or (is function key/button. Exmples: +, -, or CA)
        const int = parseInt(e)
        let input = null
        this.printUpdate('Beginning of the click')

        // handles the number press from number pad.
        // CODE NOTE: 0 doesn't convert to a int and will be NaN.
        // CHECK: if '0' returns 0 in int.
        // Note: when I want to conginate e is used.
        if (int || e==='0') {
            // If no number is stored then this the first number for calulator.
            // if (this.state.stored === null) {
            // console.log('This is the first number state.stored: ', this.state.stored)

            // check if display is 0 then replace, if not add.
            if (this.state.new === true || this.state.display === 0) {
                input = int
                console.log('new === true || display === 0 \ninput: %s', input)
                this.setState({new: false})
            } else {
                console.log('display: %s new: %s', this.state.display, this.state.new)
                input = this.state.display + e
                console.log('new input: %s', input)

                input = parseInt(input)
            }
            // update the display, and this no longer starting a new equation.
            this.setState({display: input})

        // Button pressed is not a number.
        } else { 
            console.log('Button pressed is not a number. It is: ', e)
            // Make sure last entry is not one of these Operator. 1. Avoids errer if user presses twice. 2. User can change the Operator if they clicked the wrong one.
            if (this.state.display === '/' ||
                this.state.display === 'x' ||
                this.state.display === '-' ||
                this.state.display === '+'    ) {
                this.setState({operator: e})
            } else {
                switch (e) {
                    case 'AC':
                        this.resetState()
                    break;
                    case '/':
                    case 'x':
                    case '-':
                    case '+':
                        console.log('in the %f case', e)
                        // console.log('this.state.answer: ',this.state.input)
                        // console.log('parseInt(this.state.answer): ',parseInt(this.state.input))
                        // If operator has not been stored, then do nothing but change it.
                        if (!this.state.stored){
                            console.log('!this.state.stored')
                            const temp = this.state.display
                            this.setState({display: e, operator: e, stored: temp, new: true})
                        } else {
                            // Do a =
                            const answer = this.calculate()
                            // console.log('DID YOU get out of calculate function ')
                            console.log('temp = this.state.display, ', this.state.display)
                            const temp = this.state.display
                            this.setState({display:answer, stored: temp, new: true})
                            this.printUpdate('After calulation. state is')
                        }
                    break
                    case '=':
                        this.setState({operator: null})
                        const answer = this.calculate()
                        const temp = this.state.display
                        this.setState({display:answer, operator: null, stored: temp, new: true})
                        // this.setState({display: answer, new: true})
                    break
                    case '%':
    
                    break
                    default:
                        console.log('ERRER: A value was passed that shouldn\'t be able')
                    break;
                }
            }
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