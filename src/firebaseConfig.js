import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//     apiKey: "AIzaSyB06loH1BrqmaRJnuigCXQRF7_TCiSqxS8",
//     authDomain: "fir-image-upload-1ecb7.firebaseapp.com",
//     projectId: "fir-image-upload-1ecb7",
//     storageBucket: "fir-image-upload-1ecb7.appspot.com",
//     messagingSenderId: "810106220153",
//     appId: "1:810106220153:web:89166a229f97365a366ea8"
// };

const firebaseConfig = {
    apiKey: "AIzaSyCMCiAAlxRInVdJGA66q-EBlZkeWAbVYYM",
    authDomain: "shops-images.firebaseapp.com",
    projectId: "shops-images",
    storageBucket: "shops-images.appspot.com",
    messagingSenderId: "914322850292",
    appId: "1:914322850292:web:e841e4e3a6549e5b9839a1"
  };
 
//initializing firebase
const app = initializeApp(firebaseConfig);

//firebase storage reference
const storage = getStorage(app);

export default storage;
