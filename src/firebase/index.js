import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyDDTQneBXmfqmpJN225UqszUlyMapTiAJU',
	authDomain: 'open-chat-61e5e.firebaseapp.com',
	databaseURL: 'https://open-chat-61e5e.firebaseio.com',
	storageBucket: "open-chat-61e5e.appspot.com",
	messagingSenderId: "23679693585"
};

firebase.initializeApp(config);
export const database = firebase.database();
export const auth = firebase.auth();
export const firebaseMain = firebase;