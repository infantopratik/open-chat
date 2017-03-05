import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import React from 'react';
import MessageList from './MessageList';
import ChannelList from './ChannelList';
import MessageBox from './MessageBox';
import Login from './Login';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors'
import AppBar from 'material-ui/AppBar'

@connectToStores
class App extends React.Component{
	constructor(){
		super();
	}

	static getStores(){
		return [ChatStore];
	}

	static getPropsFromStores(){
		return ChatStore.getState();
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
		    accent1Color: Colors.pink400
		  }
		});

		var view = <Login />

		if(this.props.user){
			view = <div>
				<div style={{
						display: 'flex',
						flexFlow: 'row wrap',
						maxWidth: '80%',
						width: '100%',
						margin: '30px auto 30px'
					}}>
					<ChannelList />
					<MessageList />
				</div>
				<MessageBox />
			</div>
		}

		return(
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<AppBar title="Open Chat"/>
					{{view}}
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;