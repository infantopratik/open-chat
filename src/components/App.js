import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import React from 'react';
import {RouteHandler} from 'react-router';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors'
import AppBar from 'material-ui/AppBar'

class App extends React.Component{
	constructor(){
		super();
	}

	/*static childContextTypes = {
		muiTheme: React.PropTypes.object
	}

	getChildContext(){
		return {
			muiTheme: ThemeManager.getCurrentTheme()			
		};
	}*/

	render(){
		const muiTheme = getMuiTheme({
		  palette: {
		    primary1Color: Colors.blue500,
		    primary2Color: Colors.blue700,
		    primary3Color: Colors.blue100,
		    accent1Color: Colors.pink400,
		    windowBackground: Colors.blue100
		  }
		});

		return(
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<AppBar title="Open Chat"/>
					<RouteHandler />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;