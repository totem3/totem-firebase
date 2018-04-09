import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as MathActions from "../actions";
import { Route, Link } from "react-router-dom";
import Calculator from "../components/calculator";

class Calc extends React.Component {
    render() {
        let { value, dispatch } = this.props;

        console.log(value);
        const actions = bindActionCreators(MathActions, dispatch);
        value = value.reducer.value;
        return (
            <div>
                <h1>Totem</h1>
                <div>
                    <Calculator actions={actions} value={value}/>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({ value: state }),
)(Calc);
