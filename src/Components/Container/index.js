import React from 'react';
import { Route, withRouter, Switch } from "react-router-dom";

import Home from '../../Pages/Home'
import Contact from '../../Pages/Contact'
import Triptease from '../../Pages/Projects/Triptease'
import Fixr from '../../Pages/Projects/Fixr'


function Container({ changeThemeColor }) {
    return (
        <div className="container">
            <Route render={({ location }) => (
                <Switch>
                    <Route exact path="/" render={() => <Home changeThemeColor={changeThemeColor} />} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/projects/triptease" render={() => <Triptease changeThemeColor={changeThemeColor} />} />
                    <Route path="/projects/fixr" render={() => <Fixr changeThemeColor={changeThemeColor} />} />
                </Switch>
            )} />
        </div>
    );
}

export default withRouter(Container);