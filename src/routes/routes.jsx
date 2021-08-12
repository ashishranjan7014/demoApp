import React, { Component, lazy, Suspense } from 'react';
import { Router, Route } from "react-router-dom";
import history from "../history/history";

const Homepage = lazy(() => import("../components/homepage"));
const SignUp = lazy(() => import("../components/signup"));

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Suspense fallback={<span> Wait a moment...</span>}>
                    <Route exact path="/" component={Homepage}></Route>
                    <Route exact path="/signup" component={SignUp}></Route>
                </Suspense>
            </Router>
        );
    }
}

export default Routes;