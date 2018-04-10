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
            <Layout>
                <nav>
                    <ul>
                        <li>
                            React勉強
                            <ul>
                                <li>
                                    <Link to="/calc">Calc</Link>
                                    ( <a href="https://www.pshrmn.com/tutorials/react/react-redux/" target="_blank">https://www.pshrmn.com/tutorials/react/react-redux/</a> )
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/memo">雑記</Link>
                        </li>
                    </ul>
                </nav>
            </Layout>
        );
    }
}

export class Layout extends React.Component {
    render() {
        return (<div>
            <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet" />
            <div className="header">
                <h1>Totem</h1>
            </div>
            <div className="border"></div>
            <div className="content">
                {this.props.children}
            </div>
            <div className="footer">
                <a className="copyright" href="https://creativecommons.org/licenses/by-nc/4.0/">
                    ©totem3
                </a>
            </div>
        </div>
        );
    }
}

export default connect(
    state => ({ value: state }),
)(App);
