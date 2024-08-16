alert('hello');
import { onAuthStateChanged , getAuth, signOut } from "./firebase";
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
  } else {
        window.location.href = 'assets/signup.html'
  }
});
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
     window.location.href = 'makepost.html'
    })
    let disabledInput = document.getElementById('disabled-input')
    disabledInput.addEventListener('click' , ()=> {
    window.location.href = 'makepost.html'
    console.log('hello');
})