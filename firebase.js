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

function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            alert(`Welcome, ${result.user.displayName}!`);
            window.location.href = "home.html"; // Redirect after login
        })
        .catch(error => console.error(error));
}

function loginWithOTP() {
    const phoneNumber = prompt("Enter your phone number:");
    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    auth.signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(confirmationResult => {
            const otp = prompt("Enter OTP:");
            return confirmationResult.confirm(otp);
        })
        .then(user => {
            alert("Login successful!");
            window.location.href = "home.html";
        })
        .catch(error => console.error(error));
}
