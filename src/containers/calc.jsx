import React from "react";
import {Layout} from "./app"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as MathActions from "../actions";
import { Route, Link } from "react-router-dom";
import Calculator from "../components/calculator";

class Calc extends React.Component {
    render() {
        let { value, dispatch } = this.props;

        const actions = bindActionCreators(MathActions, dispatch);
        return (
            <Layout>
                <div>
                    <Calculator actions={actions} value={value} />
                    <div>
                        original source: <a href="https://www.pshrmn.com/tutorials/react/react-redux/" target="_blank">https://www.pshrmn.com/tutorials/react/react-redux/</a>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default connect(
    state => ({value: state.calc}),
)(Calc);
