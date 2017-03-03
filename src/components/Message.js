import React from 'react';
import {
	ListItem,
	Avatar
} from 'material-ui';
export default class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem
      	leftAvatar={<Avatar src="../src/img.jpg" />}
      >{this.props.message}</ListItem>
    );
  }
}
