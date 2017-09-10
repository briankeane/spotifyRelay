var config = require('../../config/environment');
var url = require('url');
var request = require('request');
var encrpytion = require('./spotifyEncryption');


var authHeader = 'Basic ' + new Buffer(config.SPOTIFY_CLIENT_ID + ":" + config.SPOTIFY_CLIENT_SECRET).toString('base64');
var clientCallback = "dadSpotifyTempoSearch-spotifyauth://returnafterlogin";
var spotifyEndpoint = 'https://accounts.spotify.com/api/token';

exports.swapToken = function (req, res, next) {
    var formData = {
            grant_type : 'authorization_code',
            redirect_uri : clientCallback,
            code : req.body.code
        },
        options = {
            uri : url.parse(spotifyEndpoint),
            headers : {
                'Authorization' : authHeader
            },
            form : formData,
            method : 'POST',
            json : true
        };

    request(options, function (error, response, body) {
        if (response.statusCode === 200) {
            body.refresh_token = encrpytion.encrypt(body.refresh_token);
        }
        
        res.status(response.statusCode);
        res.json(body);
        next();
    });
};

exports.refreshToken = function (req, res, next) {
    if (!req.body.refresh_token) {
        res.status(400).json({ error : 'Refresh token is missing from body' });
        return;
    }

    var refreshToken = encrpytion.decrypt(req.body.refresh_token);

    var formData = {
            grant_type : 'refresh_token',
            refresh_token : refreshToken
        };
    var options = {
            uri : url.parse(spotifyEndpoint),
            headers : {
                'Authorization' : authHeader
            },
            form : formData,
            method : 'POST',
            json : true
        };

    request(options, function (error, response, body) {
        if (response.statusCode === 200 && !!body.refresh_token) {
            body.refresh_token = encrpytion.encrypt(body.refresh_token);
        }


        res.status(response.statusCode);
        res.json(body);

        next();
    });
};