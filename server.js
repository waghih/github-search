const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/dist`));

app.get('*', (request, response) => {
  response.sendFile(`${__dirname}/dist/index.html`);
});

const getServerHost = server => server.address().address;
const getServerPort = server => server.address().port;

const server = app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is listening on http://${getServerHost(server)}:${getServerPort(server)}`);
});
