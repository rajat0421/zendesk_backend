const zendeskService = require('../services/zendesk.service');

async function getOrganizations(req,res) {
      const organizations = await zendeskService.getOrganizations();

      const filteredOrganizations = organizations.organizations.map(organization => ({
        accountId: organization.id,
        name  : organization.name,
        emailAddress: organization.organization_fields.customer_level || null
        }));

    res.status(200).json(organizations);
}

module.exports = { getOrganizations };