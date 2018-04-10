import React from "react";
import {Layout} from "./app"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";

class Memos extends React.Component {
    render() {
        // let { value, dispatch } = this.props;

        // const actions = bindActionCreators(MathActions, dispatch);
        return (
            <Layout>
                <div className="memolist">
                    <ul>
                        <li>
                            ほげほげ
                        </li>
                    </ul>
                </div>
            </Layout>
        );
    }
}

export default connect()(Memos);
