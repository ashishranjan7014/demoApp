import React, { Component, lazy, Suspense } from 'react';
import { Router, Route } from "react-router-dom";
import ToDoApp from '../components/todoApp';
import history from "../history/history";

const Homepage = lazy(() => import("../components/homepage"));
const SignUp = lazy(() => import("../components/signup"));
const ToDo = lazy(() => import("../ToDo"));


class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Suspense fallback={<span> Wait a moment...</span>}>
                    <Route exact path={`${process.env.PUBLIC_URL}`} component={Homepage}></Route>
                    <Route exact path={`${process.env.PUBLIC_URL}/signup`} component={SignUp}></Route>
                    <Route exact path={`${process.env.PUBLIC_URL}/todo`} component={ToDoApp}></Route>
                    <Route exact path={`${process.env.PUBLIC_URL}/todoApp`} component={ToDo}></Route>

                </Suspense>
            </Router>
        );
    }
}

export default Routes;