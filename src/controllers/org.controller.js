const zendeskService = require('../services/zendesk.service');

async function getOrganizations(req, res) {
  const organizations = await zendeskService.getOrganizations();

  const filteredOrganizations = organizations.map(org => ({
    accountId: org.id,
    name: org.name,
    customerLevel: org.organization_fields?.customer_level || null
  }));

  res.status(200).json(filteredOrganizations);
}
module.exports = { getOrganizations };