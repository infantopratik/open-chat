import alt from '../alt';
import firebase from 'firebase';
import {auth} from '../database/database';

class Actions{
	login(args){
		return (dispatch) => {
			var provider = new firebase.auth.GoogleAuthProvider();

			auth.signInWithPopup(provider).then(function(result) {
				// This gives you a Google Access Token. You can use it to access the Google API.
				var token = result.credential.accessToken;
				// The signed-in user info.
				var user = result.user;
				console.log('user', user);

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