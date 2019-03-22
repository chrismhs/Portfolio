import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from '../../Pages/Home'
import Contact from '../../Pages/Contact'
import Triptease from '../../Pages/Projects/Triptease'
import Fixr from '../../Pages/Projects/Fixr'


function Container({ changeThemeColor }) {
    return (
        <div className="container">
            <Route render={({ location }) => (
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={300}
                        classNames="fade"
                    >
                        <Switch location={location}>
                            <Route exact path="/" render={() => <Home changeThemeColor={changeThemeColor} />} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/projects/triptease" component={Triptease} />
                            <Route path="/projects/fixr" component={Fixr} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup> 
            )} />
        </div>
    );
}

export default withRouter(Container);