const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home - Ayurbot',
        currentPath: '/'
    });
});

module.exports = router;
