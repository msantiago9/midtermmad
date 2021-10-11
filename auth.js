import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
require("firebase/auth");

export function emailSignUp(email, password) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      alert(error.message);
    });
}
