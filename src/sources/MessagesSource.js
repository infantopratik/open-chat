import Actions from '../actions';
import {database} from '../firebase';

let messagesRef = null;

let MessagesSource = {
	sendMessage: {
		remote(state){
			return new Promise((resolve, reject)=>{
				if(!messagesRef){
					return resolve();
				}

				messagesRef.push({
					"message": state.message,
					"date": new Date().toUTCString(),
					"author": state.user.displayName,
					"userId": state.user.uid,
					"profilePic": state.user.photoURL
				});
				resolve();
			});
		},
		success: Actions.sendMessageSuccess,
		error: Actions.sendMessageError
	},
	getMessages : {
		remote(state){
			if(messagesRef){
				messagesRef.off();
			}

			messagesRef = database.ref('/messages/'+state.selectedChannel.key);

			return new Promise((resolve, reject) => {
				messagesRef.once('value', (dataSnapshot) => {
					var messages = dataSnapshot.val();
					resolve(messages);

					messagesRef.on('child_added', (msg) => {
						let msgVal = msg.val();
						msgVal.key = msg.key;

						Actions.messageReceived(msgVal);
					});
				});
			});
		},
		success: Actions.messagesReceived,
		error: Actions.messagesFailed,
		loading: Actions.messagesLoading
	}
}

export default MessagesSource;