import {
    Switch,
    Route,
} from "react-router-dom";
import React from "react";
import Page1 from "./Product1/src/pages/Page1";
import Page2 from "./Product1/src/pages/Page2";
import CounterPage from "./Product1/src/pages/counter";

export default function GlobalRouter({permissions}) {
    return <Switch>
        {
            permissions['page1'] && <Route path="/page1">]
                <Page1/>
            </Route>
        }
        {
            permissions['page2'] && <Route path="/page2">
                <Page2/>
            </Route>
        }
        {
            permissions['counter'] &&
            <Route path="/">
                <CounterPage/>
            </Route>
        }
        <Route path='*'><h1>404</h1></Route>
    </Switch>
}