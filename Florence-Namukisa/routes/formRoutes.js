const express = require('express')
const router = express.Router();

const Form = require('../models/form');

router.get('/form', (req, res) => {
    res.render('form')
});

router.post('/form', (req, res) => {
    const newform = new Form(req.body)
    newform.save()
    res.redirect('/form')
});

module.exports = router;