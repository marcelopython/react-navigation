import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './Content.css';
import Abount from '../../views/examples/Abount';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';
import NotFound from '../../views/examples/NotFound';

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/abount">
                <Abount />
            </Route>
            <Route path="/param/:id">
                <Param />
            </Route>
            {/* Qualquer rota não encotrada vai cair aqui */}
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </main>
);

export default Content;