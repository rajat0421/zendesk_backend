const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticket.controller');

router.get("/getTicketsCount",ticketController.getTicketsCount);


module.exports = router;