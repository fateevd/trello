import React from 'react';
import {Route, Switch , Redirect} from "react-router-dom";
import Startpage from "../pages/Startpage";
import Trello from "../pages/Trello";
import ItemTrello from "../pages/ItemTrello";
const AppRouter = () => {
    return (
        <div>
            <Switch>
                <Route path="/Start">
                    <Startpage />
                </Route>
                <Route exact path="/Trello">
                    <Trello />
                </Route>
                <Route exact path="/Trello/:id">
                    <ItemTrello />
                </Route>
                <Redirect to="/Start"/>
            </Switch>
        </div>
    );
};

export default AppRouter;