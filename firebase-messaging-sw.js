importScripts('https://www.gstatic.com/firebasejs/3.7.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.7.8/firebase-messaging.js');

var config = {
  apiKey: "AIzaSyBF556T0Z2rZlvaoJ4NNbPci1mPn9OhVQs",
  authDomain: "reactivewebdesigns.firebaseapp.com",
  databaseURL: "https://reactivewebdesigns.firebaseio.com",
  projectId: "reactivewebdesigns",
  storageBucket: "reactivewebdesigns.appspot.com",
  messagingSenderId: "263972564405"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  const title = 'Hello World';
  const options = {
    body: payload.data.status
  };
  return self.registration.showNotification(title, options);
});
