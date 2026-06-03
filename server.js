require('dotenv').config();
const express = require('express');
const path = require('path');
const admin = require('firebase-admin');

// Initialize Firebase Admin
let serviceAccount;
try {
    if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
        throw new Error("FIREBASE_SERVICE_ACCOUNT environment variable is not set!");
    }
    // Check if the user accidentally included single quotes around the JSON
    let envVal = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (envVal.startsWith("'") && envVal.endsWith("'")) {
        envVal = envVal.slice(1, -1);
    }
    serviceAccount = JSON.parse(envVal);
} catch (error) {
    console.error("Firebase Initialization Error:", error.message);
    console.error("Please check your FIREBASE_SERVICE_ACCOUNT environment variable in Vercel.");
    // We will let it continue, but Firebase calls will fail. This prevents the entire serverless function from crashing on startup.
}

if (serviceAccount) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
}
const db = admin.firestore();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
const routes = require('./routes/index');
const apiRoutes = require('./routes/api');
app.use('/', routes);
app.use('/api', apiRoutes);

// Setup EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Start the server (locally)
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}

// Export for Vercel serverless
module.exports = app;
