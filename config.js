// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqg3E9tuKRcEnq2DdP6FjtG0LqnAjCHfM",
    authDomain: "joeldata-25d06.firebaseapp.com",
    projectId: "joeldata-25d06",
    storageBucket: "joeldata-25d06.firebasestorage.app",
    messagingSenderId: "555857869458",
    appId: "1:555857869458:web:db96a97fca5983b142044b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// Global Helper: Update Points after purchase
async function addPoints(email, points) {
    const userRef = db.collection('users').doc(email);
    return userRef.set({
        points: firebase.firestore.FieldValue.increment(points),
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
}
