var express = require('express'),
    axios = require('axios'),
    jwt = require('jsonwebtoken'),
    login = express.Router();

var User = require('./../infra/users');

const APP_CONFIG = {
    client_id: '534098035244-0o92ja7seroieenkmafi3r2mlt3ftbip.apps.googleusercontent.com',
    client_secret: '3B9mVsjiXTR4kJad6-62wsVz',
    redirect_uri: 'http://localhost:1717/login/cb',
    state: 'testingThisKey'
};

login.route('/cb')
    .get((req, res) => {
        axios.post('https://www.googleapis.com/oauth2/v4/token', {
            code: req.query.code,
            client_id: APP_CONFIG.client_id,
            client_secret: APP_CONFIG.client_secret,
            redirect_uri: APP_CONFIG.redirect_uri,
            grant_type: 'authorization_code'
        })
            .then(({ data }) => {
                const userData = jwt.decode(data.id_token);
                User.create({
                    name: userData.name,
                    email: userData.email,
                    picture: userData.picture,
                    tokens: {
                        id_token: data.id_token,
                        access_token: data.access_token,
                        token_type: data.token_type,
                        scope: data.scope,
                        expiry_data: data.expiry_data
                    }
                }, (err, userCreated) => {
                    if (err) res.status(500).json({ message: 'error creating user' })
                    res.json({
                        message: 'Success',
                        data,
                        tokens: userData
                    });
                });
            })
            .catch(err => console.log);
    });
    
login.route('/')
    .get((req, res) => {        
        res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?client_id=${APP_CONFIG.client_id}&response_type=code&scope=openid%20email%20profile&redirect_uri=${APP_CONFIG.redirect_uri}&state=${APP_CONFIG.state}`);
    });

module.exports = login;