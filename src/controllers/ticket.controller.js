const zendeskService = require('../services/zendesk.service');

async function getTicketsCount(req,res) {
      const ticketsCount = await zendeskService.getTicketsCount();
    res.status(200).json(ticketsCount);
}

module.exports = { getTicketsCount };