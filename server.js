require('dotenv').config();
const app = require('./src/app');

app.get("/", (req, res) => {
  res.send("started");
})

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});