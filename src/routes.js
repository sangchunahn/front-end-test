import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from'./components/App';

export default(
    <Route>
        <Route path = '/' component={App}>
        <IndexRoute component={App}/>
        {/*<Route path = '/:name' component={Information}></Route>         */}
        </Route>
    </Route>
);