const zendeskService = require('../services/zendesk.service');
async function getUsers(req,res) {
      const users = await zendeskService.getUsers();

      const filteredUsers = users.users.map(user => ({
        accountId: user.id,
        name  : user.name,
        emailAddress: user.email || null
        }));

    res.status(200).json(filteredUsers);
}

module.exports = { getUsers };