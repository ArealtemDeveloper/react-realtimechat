import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';




const firebaseConfig = {
  apiKey: "AIzaSyCPuFOltFyKq5d6WvWZMshZXiLAX_tPU3g",
  authDomain: "realtime-chat-b4b31.firebaseapp.com",
  projectId: "realtime-chat-b4b31",
  storageBucket: "realtime-chat-b4b31.appspot.com",
  messagingSenderId: "129396677614",
  appId: "1:129396677614:web:aad8ad05004b6d7ec00cff",
  measurementId: "G-X77RCMW0Y7"
};

export const Context = createContext(null)

const app = initializeApp(firebaseConfig);

const auth = getAuth()
const firestore = getFirestore(app)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
      app,
      auth,
      firestore,
    }}>
        <App />
    </Context.Provider>
  
);

