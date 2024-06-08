// "use client"
// import React, { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/storage';

// import {ref ,uploadBytes, getDownloadURL} from 'firebase/storage';

// // Firebase configuration
// const firebaseConfig = {
//     
// };

// // Initialize Firebase
// // if (!firebase.apps.length) {
// //   firebase.initializeApp(firebaseConfig);s
// // } else {
// //   firebase.app();
// // }
// firebase.initializeApp(firebaseConfig);

// const FirebaseOne = () => {
//   const [file, setFile] = useState(null);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(null);
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   const signIn = (email, password) => {
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         console.log('User signed in:', userCredential.user);
//       })
//       .catch((error) => {
//         console.error('Error signing in:', error);
//       });
//   };

//   const handleFileChange = (e) => {
//     if (e.target.files[0]) {
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleUpload = () => {
//     if (file && user) {
//       const storageRef = firebase.storage().ref();
//       const fileRef = storageRef.child('Nextjsfirebase/nextFirebase/' + file.name);

//       fileRef.put(file).then((snapshot) => {
//         console.log('Uploaded a file!', snapshot);
//       }).catch((error) => {
//         console.error('Upload failed:', error);
//       });
//     } else {
//       console.error('User is not authenticated or no file selected');
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//       {user ? <p>User is signed in</p> : <p>User is not signed in</p>}
//     </div>
//   );
// };

// export default FirebaseOne;
