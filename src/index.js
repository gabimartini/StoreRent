import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './login'
import Place from './login-img'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/place' component={Place}/>
    </Switch>
    </BrowserRouter>

    , document.getElementById('root')
)

/*const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
