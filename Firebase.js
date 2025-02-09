
const firebaseConfig = {
    apiKey: "YOUR-API-KEY",
    authDomain: "YOUR-PROJECT.firebaseapp.com",
    projectId: "YOUR-PROJECT-ID",
    storageBucket: "YOUR-PROJECT.appspot.com",
    messagingSenderId: "YOUR-SENDER-ID",
    appId: "YOUR-APP-ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Google Sign-In
function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            console.log("Logged in:", result.user);
            alert(`Welcome, ${result.user.displayName}!`);
            loadVendors();
        })
        .catch(error => console.error(error));
}

// Phone OTP Login
function loginWithOTP() {
    const phoneNumber = prompt("Enter your phone number:");
    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    auth.signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(confirmationResult => {
            const otp = prompt("Enter OTP:");
            return confirmationResult.confirm(otp);
        })
        .then(user => {
            console.log("Logged in:", user);
            alert("Login successful!");
            loadVendors();
        })
        .catch(error => console.error(error));
}