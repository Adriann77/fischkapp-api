const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
	res.send('Witaj na moim serwerze Express!');
});

app.listen(port, () => {
	console.log(`Serwer Express działa na porcie ${port}`);
});
