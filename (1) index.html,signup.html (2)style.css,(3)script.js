--------index.html---------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ClimaVista - Weather App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="outer-box">
        <h1 class="transparent-text">Weather Advisory</h1>
        <div class="inner-box">
            <h2 class="app-name">ClimaVista</h2>
            <p class="quote">Your forecast for a better harvest.</p>
            <form id="signup-form">
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" required>
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" required>
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <p class="account-link">
                Don't have an account? <a href="signup.html">Create an Account</a>
            </p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
  -------signup.html----------
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ClimaVista - Create Account</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="outer-box">
        <h1 class="transparent-text">Weather Advisory</h1>
        <div class="inner-box">
            <h2 class="app-name">ClimaVista</h2>
            <p class="quote">Let's get you set up.</p>
            <form id="create-account-form">
                <div class="input-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" required>
                </div>
                <div class="input-group">
                    <label for="city">City</label>
                    <input type="text" id="city" required>
                </div>
                <div class="input-group">
                    <label for="email-login">Email</label>
                    <input type="email" id="email-login" required>
                </div>
                <div class="input-group">
                    <label for="phone">Phone</label>
                    <input type="tel" id="phone" required>
                </div>
                <div class="input-group">
                    <label for="password-login">Password</label>
                    <input type="password" id="password-login" required>
                </div>
                <button type="submit">Create Account</button>
            </form>
            <p class="account-link">
                Already have an account? <a href="index.html">Sign Up</a>
            </p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
</html>
*\---------style.css-------\*
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

.outer-box {
    position: relative;
    width: 90%;
    max-width: 400px;
    background-color: #3498db;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 500px;
}

.transparent-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgba(255, 255, 255, 0.3);
    font-size: 3em;
    font-weight: bold;
    user-select: none;
    pointer-events: none;
}

.inner-box {
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    z-index: 1;
    text-align: center;
}

.app-name {
    margin-top: 0;
    margin-bottom: 5px;
    color: #2c3e50;
}

.quote {
    font-style: italic;
    color: #7f8c8d;
    margin-bottom: 25px;
}

.input-group {
    margin-bottom: 15px;
    text-align: left;
}

.input-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
}

.input-group input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    width: 100%;
    padding: 12px;
    background-color: #2ecc71;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #27ae60;
}

.account-link {
    margin-top: 20px;
    font-size: 0.9em;
    color: #555;
}

.account-link a {
    color: #3498db;
    text-decoration: none;
}

.account-link a:hover {
    text-decoration: underline;
}
/*---------------------------------------------------------------------*/

/*-----------------------------------------------------------------------*/

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(to right, #e3f2fd, #f1f8e9);
  color: #333;
}

header {
  background: #2e7d32;
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}

section {
  margin: 20px;
  padding: 20px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #1565c0;
  border-bottom: 2px solid #90caf9;
  padding-bottom: 5px;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  background: #f9fbe7;
  margin: 8px 0;
  padding: 10px;
  border-left: 6px solid #8bc34a;
  border-radius: 6px;
  transition: background 0.3s;
}

ul li:hover {
  background: #e6ee9c;
}

.highlight {
  background: #ffecb3 !important;
  border-left: 6px solid #ff9800 !important;
}

footer {
  text-align: center;
  padding: 15px;
  background: #eeeeee;
  font-size: 14px;
  margin-top: 30px;
}

button {
  background: #1565c0;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 10px 0;
}

button:hover {
  background: #0d47a1;
}
/* --- Global Styles --- */
body, html {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    height: 100%;
}

/* --- Sign-up/Login/Weather Box Styles --- */
.outer-box {
    position: relative;
    width: 90%;
    max-width: 400px;
    background-color: #3498db; /* Blue background color */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 500px;
    margin: 50px auto;
}

.transparent-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgba(255, 255, 255, 0.3);
    font-size: 3em;
    font-weight: bold;
    user-select: none;
    pointer-events: none;
    white-space: nowrap;
}

.inner-box {
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    z-index: 1;
    text-align: center;
}

.app-name {
    margin-top: 0;
    margin-bottom: 5px;
    color: #2c3e50;
}

.quote {
    font-style: italic;
    color: #7f8c8d;
    margin-bottom: 25px;
}

/* Common form styles for login/signup */
.input-group {
    margin-bottom: 15px;
    text-align: left;
}

.input-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
}

.input-group input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button[type="submit"]:not(.save-btn) { /* Exclude save-btn from this general styling */
    width: 100%;
    padding: 12px;
    background-color: #2ecc71;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button[type="submit"]:not(.save-btn):hover {
    background-color: #27ae60;
}

.account-link {
    margin-top: 20px;
    font-size: 0.9em;
    color: #555;
}

.account-link a {
    color: #3498db;
    text-decoration: none;
}


script.js
function showMessage(message) {
    const modal = document.getElementById('message-modal');
    const modalText = document.getElementById('modal-text');
    
    if (modal && modalText) {
        modalText.textContent = message;
        modal.style.display = 'block';

        const closeBtn = document.querySelector('.close-button');
        const closeModal = () => { modal.style.display = 'none'; };
        
        closeBtn.onclick = closeModal;
        window.onclick = (event) => {
            if (event.target == modal) {
                closeModal();
            }
        };
    } else {
        console.error("Message modal elements not found.");
        console.log("Message:", message); // Fallback logging
    }
}

// --- Authentication and Logic ---

async function logInUser(email, password) {
    // Ensure Firebase Auth is available
    if (!window.auth) {
        showMessage("Authentication service not ready. Please try refreshing the page.");
        return;
    }

    // 1. Initial Custom Token Sign-In (Required for Canvas Environment)
    try {
        if (window.initialAuthToken) {
            await window.auth.signInWithCustomToken(window.initialAuthToken);
            console.log("Initial custom token sign-in successful.");
        }
    } catch (error) {
        console.error("Initial sign-in failed (safe to ignore if the user is logging in manually):", error.message);
    }
    
    // 2. Log In with Email and Password
    try {
        const userCredential = await firebase.auth.signInWithEmailAndPassword(window.auth, email, password);
        
        console.log("User logged in successfully:", userCredential.user.email);
        showMessage("Login Successful! Redirecting to Dashboard...");
        
        // --- Redirection ---
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500); // Wait 1.5 seconds before redirecting
        
    } catch (error) {
        console.error("Login failed:", error);
        
        let errorMessage = "An unknown error occurred during login.";
        if (error.code === 'auth/user-not-found') {
            errorMessage = "No account found with this email. Please check your email or create an account.";
        } else if (error.code === 'auth/wrong-password') {
            errorMessage = "Incorrect password. Please try again.";
        } else if (error.code === 'auth/invalid-email') {
            errorMessage = "Invalid email format.";
        } else {
            errorMessage = `Login Failed: ${error.message}`;
        }
        
        showMessage(errorMessage);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // Attach event listener to the form
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get credentials
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Call the login function
            logInUser(email, password);
        });
    } else {
        console.warn("Login form not found on this page.");
    }
});
/*-----------------------------*/
