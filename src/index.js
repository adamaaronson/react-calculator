import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import { BUTTONS, BASIC_LAYOUT } from './buttontypes.js';

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content
        }
    }
    render() {
        return (
            <div id="display">
                <span id="display-text">
                    {this.props.content}
                </span>
            </div>
        );
    }
}

class CalculatorButton extends React.Component {
    render() {
        let style = {
            gridColumn: "auto / span " + this.props.buttonType.width
        }
        return (
            <button className={this.props.buttonType.className} style={style} onClick={() => this.props.onClick()}>
                {this.props.buttonType.content}
            </button>
        );
    }
}

class ButtonGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: []
        };
    }
    renderButton(buttonType) {
        return (
            <CalculatorButton
                buttonType={buttonType}
                key={buttonType.content}
                onClick={() => this.props.onClick(buttonType)}
            />
        );
    }

    render() {
        while (this.state.buttons.length > 0) {
            this.state.buttons.pop();
        }
        for (var i = 0; i < BASIC_LAYOUT.length; i++) {
            this.state.buttons.push(this.renderButton(BASIC_LAYOUT[i]));
        }
        return (
            <div className="button-grid">
                {this.state.buttons}
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onOperand: false,
            operand: 0,
            operator: null,
            displayContent: "0"
        }
    }

    handleClick(buttonType) {
        var content = this.state.displayContent;
        if (buttonType.type === "clear") {
            this.setState({
                onOperand: false,
                operand: 0,
                operator: null,
                displayContent: "0"
            });
        } else if (buttonType.type === "number") {
            if (content === "0" || this.state.onOperand) {
                if (buttonType.content === ".") {
                    content = "0."
                } else {
                    content = buttonType.content;
                }
            } else {
                content += buttonType.content;
            }
            this.setState({
                displayContent: content,
                onOperand: false
            });
        } else if (buttonType.type === "oper") {
            this.setState({
                onOperand: true,
                operand: parseFloat(content),
                operator: buttonType
            });
        } else if (buttonType.type === "equal") {
            if (this.state.operator !== null) {
                if (this.state.operator === BUTTONS.ADD) {
                    content = this.state.operand + parseFloat(content);
                } else if (this.state.operator === BUTTONS.SUBTRACT) {
                    content = this.state.operand - parseFloat(content);
                } else if (this.state.operator === BUTTONS.MULTIPLY) {
                    content = this.state.operand * parseFloat(content);
                } else if (this.state.operator === BUTTONS.DIVIDE) {
                    content = this.state.operand / parseFloat(content);
                }

                this.setState({
                    operator: null,
                    displayContent: content
                });
            }
        }
    }

    render() {
        return (
            <div id="calculator">
                <Display content={this.state.displayContent}/>
                <div id="title">
                    <div id="illinois-logo">
                        <img src="illinois.png" alt=""/>
                    </div>
                    <div id="illinois-text">
                        Illinois Instruments
                    </div>
                </div>
                <ButtonGrid onClick={(buttonType) => this.handleClick(buttonType)}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);