import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyCQDpfzqotpy6XN9E_FH8dywTd9-4JgDh4',
    authDomain: "queueme-82a52.firebaseapp.com",
    databaseURL: "https://queueme-82a52.firebaseio.com",
    projectId: "queueme-82a52",
    storageBucket: '',
    messagingSenderId: "564223004671",
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);
      this.auth=app.auth();
    }
  

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
  }
  export default Firebase;