import alt from '../alt';
import firebase from 'firebase';
import {auth, firebaseMain} from '../firebase';

class Actions{
	constructor(){
		this.generateActions(
			'channelsReceived',
			'channelsFailed',
			'messagesReceived',
			'messagesFailed',
			'channelOpened'
		)
	}

	login(args){
		return (dispatch) => {
			var provider = new firebase.auth.GoogleAuthProvider();
			auth.signInWithPopup(provider).then(function(result) {
				var token = result.credential.accessToken;
				var user = result.user;
				dispatch(user);
			}).catch(function(error) {
				alert('error');
				console.log('error', error);				
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// ...
			});
		}
	}
}

export default alt.createActions(Actions);