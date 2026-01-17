const express = require('express');
const app = express();
const agentRouter = require('./routes/agent.router');
const ticketRouter = require('./routes/ticket.router');
const userRouter = require('./routes/user.router');
const organizationRouter = require('./routes/org.router');

app.use(express.json());


app.use('/api',agentRouter);
app.use("/api",ticketRouter);
app.use("/api",userRouter);
app.use("/api",organizationRouter);
module.exports = app;