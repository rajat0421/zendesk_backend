const zendesk = require("../clients/zendesk.client");

async function getTicketsCount() {
  const res = await zendesk.get("/tickets/count");
  return res.data;
}

async function getUsers() {
  const res = await zendesk.get("/users");
  return res.data;
}

async function getOrganizations() {
  let allOrganizations = [];
  let nextPage = "/organizations";

  while (nextPage) {
    const res = await zendesk.get(nextPage);

    allOrganizations.push(...res.data.organizations);

    nextPage = res.data.next_page
      ? res.data.next_page.replace(`https://${process.env.ZENDESK_SUBDOMAIN}.zendesk.com/api/v2`, "")
      : null;
  }

  return allOrganizations;
}
module.exports = {
  getTicketsCount,
  getUsers,
  getOrganizations
};
