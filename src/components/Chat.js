import React from 'react';
import MessageList from './MessageList';
import ChannelList from './ChannelList';
import MessageBox from './MessageBox';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      	<div>
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
    );
  }
}
