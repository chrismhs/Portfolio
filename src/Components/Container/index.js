import React from 'react';
import { Route, withRouter, Switch } from "react-router-dom";
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory'

import Home from '../../Pages/Home'
import Contact from '../../Pages/Contact'
import Triptease from '../../Pages/Projects/Triptease'
import Fixr from '../../Pages/Projects/Fixr'

const history = createHistory()
ReactGA.initialize('UA-131855428-2');
history.listen((location, action) => {
    ReactGA.pageview(location.hash.substr(1));
    console.log(location.hash.substr(1))
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