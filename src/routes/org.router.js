const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/org.controller');

router.get("/getOrganizations",organizationController.getOrganizations);


module.exports = router;