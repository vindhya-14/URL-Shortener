const express = require('express');
const { handleGenerateNewShortUrl, handleGetAnalytics } = require('../controllers/url'); 

console.log('handleGetAnalytics:', handleGetAnalytics);
const router = express.Router();


router.post('/', handleGenerateNewShortUrl);


router.get('/analytics/:shortId',handleGetAnalytics);

module.exports = router;
