const zendeskService = require('../services/zendesk.service');

async function getAgents() {
      const agents = await zendesk.get('/agents');
    return agents.data.agents;
}

module.exports = { getAgents };