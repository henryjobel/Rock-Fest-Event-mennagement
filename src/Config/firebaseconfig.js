
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAdb-6RjhXINyFw5MILoeW5wFolNa3_mr8",
  authDomain: "rock-fast-event-management.firebaseapp.com",
  projectId: "rock-fast-event-management",
  storageBucket: "rock-fast-event-management.appspot.com",
  messagingSenderId: "727184042577",
  appId: "1:727184042577:web:6d867ca496082e2ddbe670"
};


const app = initializeApp(firebaseConfig);

export default app;