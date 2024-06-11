'use strict';

const express = require('express')

const app = express();
const router = express.Router();

const rout = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
    })
})



