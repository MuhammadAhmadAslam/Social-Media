import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth , 
 createUserWithEmailAndPassword , 
 GoogleAuthProvider , 
 sendSignInLinkToEmail  ,
 signInWithPopup ,
  onAuthStateChanged , 
  signInWithEmailAndPassword ,
  signOut ,

 } 
  from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAcEusuBViHZG_gqw8BqABccSmVDXUvH70",
    authDomain: "muhammad-ahmed-demo-work.firebaseapp.com",
    projectId: "muhammad-ahmed-demo-work",
    storageBucket: "muhammad-ahmed-demo-work.appspot.com",
    messagingSenderId: "1045072993781",
    appId: "1:1045072993781:web:cb6313a279bed9978014bc"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  window.addEventListener('click' , () => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user);
        
      } else {
        window.location.href = 'assets/signup.html'
      }
      
    });
    
  })

let logoutBtn = document.getElementById('logout-btn')
console.log(logoutBtn);
logoutBtn.addEventListener('click' , () => {
    signOut(auth).then(() => {
      console.log("User signed out successfully");
      window.location.href = "assets/signup.html"; 
  }).catch((error) => {
      console.error("Error signing out: ", error);
  });
})


let createAPost = document.getElementById('create-a-post')
console.log(createAPost);
createAPost.addEventListener('click' ,(event) => {
    console.log('kaam horaha ah');
     window.location.href = 'assets/makepost.html'
    })
    let disabledInput = document.getElementById('disabled-input')
    disabledInput.addEventListener('click' , ()=> {
    window.location.href = 'assets/makepost.html'
    console.log('hello');
})


