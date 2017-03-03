import React from 'react';
import {
	ListItem
} from 'material-ui';
export default class Channel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem>{this.props.channel}</ListItem>
    );
  }
}
