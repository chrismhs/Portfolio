import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from '../../Pages/Home'
import Contact from '../../Pages/Contact'
import Triptease from '../../Pages/Projects/Triptease'
import Fixr from '../../Pages/Projects/Fixr'


function Container({ location, changeThemeColor }) {
    return (
        <div className="container">
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 300, exit: 300 }}
                    classNames={'fade'}
                >
                <Switch location={location}>
                    <Route exact path="/" render={() => <Home changeThemeColor={changeThemeColor}></Home>} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/projects/triptease" component={Triptease} />
                    <Route exact path="/projects/fixr" component={Fixr} />
                </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default withRouter(Container);