const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const { generateAccessToken, generateRefreshToken, validateToken } = require('../middleware/authMiddleware');

dotenv.config();

// Function to display the login form
exports.showLoginForm = (req, res) => {
  res.send(`<html>
                <head>
                    <title>Login</title>
                <head>
                <body>
                    <form method="POST" action="/auth">
                        Username: <input type="text" name="username"><br/>
                        Password: <input type="password" name="password"><br/>
                        <input type="submit" value="Login" />
                    </form>
                </body>
               </html>`);
};

// Function to process the login
exports.login = (req, res) => {
    const {username, password} = req.body;

    const user = {username: username};

    const accesToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    
    res.header('authorization', accesToken, refreshToken).json({
        message: 'User authenticated',
        token: accesToken,
        refreshToken: refreshToken
    })

};

// Function to refresh the access token
exports.refreshToken = (req, res) => {
    const refreshToken = req.body.refreshToken;
    if (!refreshToken) return res.sendStatus(401);
    
    // Verify and decode the refresh token
    jwt.verify(refreshToken, process.env.REFRESH_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);

        // The refresh token is valid, generate a new access token
        const accessToken = generateAccessToken({ username: user.username });

        res.json({ accessToken: accessToken });
    });
};
