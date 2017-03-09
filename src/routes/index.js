import React from 'react';
import App from '../components/App';
import Chat from '../components/Chat';
import Login from '../components/Login';
import {Router, Route, DefaultRoute} from 'react-router';
import ReactDOM from 'react-dom';

let routes = (
		<Router path="/" handler={App}>
			<DefaultRoute handler={Chat} />
			<Route path="chat" handler={Chat} />
			<Route path="login" handler={Login} />
		</Router>
	);

Router.run(routes, Router.HashLocation, (Root) => {
	ReactDOM.render(<Root />, document.getElementById('container'));
});