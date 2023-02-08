import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const init = () => {
  const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
  };

  initializeApp(firebaseConfig);
};
init();

const auth = getAuth();
const provider = new GoogleAuthProvider();

window.signIn = function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

window.signOut = function () {
  auth.onAuthStateChanged((user) => {
    auth
      .signOut()
      .then(() => {
        console.log("logout!!");
        location.reload();
      })
      .catch((error) => {
        console.log(`error occurred in logout! ${error}`);
      });
  });
};

auth.onAuthStateChanged((user) => {
  if (user) {
    const signOutMessage = `
          <p>Hello, ${user.displayName}!<\/p>
          <button type="submit" onClick="signOut()">sign out<\/button>
          `;
    document.getElementById("auth").innerHTML = signOutMessage;
    console.log("login now!!");
    document.querySelector("body > h1").innerHTML = "ナイスログイン";
  } else {
    const signInMessage = `
            <button type="submit" onClick="signIn()">sign in<\/button>
            `;
    document.getElementById("auth").innerHTML = signInMessage;
    document.querySelector("body > h1").innerHTML = "ログインを...しろ！！！";
  }
});
