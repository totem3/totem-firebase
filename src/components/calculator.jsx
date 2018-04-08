import React from "react";

export default class Calculator extends React.Component {
    render() {
        const { actions } = this.props;
        return (
            <div className="calculator">
                <p>{this.props.value}</p>
                <button onClick={actions.addOne}>+1</button>
                <button onClick={actions.subtractOne}>-1</button>
                <button onClick={actions.doubleValue}>*2</button>
            </div>
        );
    }
}