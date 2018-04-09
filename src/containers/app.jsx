import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as MathActions from "../actions";
import { Route, Link } from "react-router-dom";

class App extends React.Component {
    render() {
        const { value, dispatch } = this.props;

        const actions = bindActionCreators(MathActions, dispatch);
        return (
            <div>
                <h1>Totem</h1>
                <div>
                    <nav>
                        <Link to="/calc">Calc</Link>
                    </nav>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({ value: state }),
)(App);
