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
  const res = await zendesk.get("/organizations");
  return res.data;
}
module.exports = {
  getTicketsCount,
  getUsers,
  getOrganizations
};
