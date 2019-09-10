import React from 'react';
import { Route, withRouter, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';

import Home from '../../Pages/Home'
import Contact from '../../Pages/Contact'
import Triptease from '../../Pages/Projects/Triptease'
import Fixr from '../../Pages/Projects/Fixr'

const history = createHistory()
ReactGA.initialize('UA-131855428-2');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});

function Container({ changeThemeColor }) {
    return (
        <div className="container">
            <Route history={history} render={({ location }) => (
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