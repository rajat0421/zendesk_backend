const express = require('express');
const router = express.Router();
const agentController = require('../controllers/agent.controller.js');

router.get("/getAgents",agentController.getAgents);


module.exports = router;