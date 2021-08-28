import React from 'react';
import {Route, Switch , Redirect} from "react-router-dom";
import Startpage from "../pages/Startpage";
import Trello from "../pages/Trello";
const AppRouter = () => {
    return (
        <div>
            <Switch>
                <Route path="/Start">
                    <Startpage />
                </Route>
                <Route path="/Trello">
                    <Trello />
                </Route>
                <Redirect to="/Start"/>
            </Switch>
        </div>
    );
};

export default AppRouter;