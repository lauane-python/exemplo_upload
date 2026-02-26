const express = require('express');
const multer = require('multer');
const cors = require('cors');
const server = express();

const upload = multer({dest:'img/'});

server.use('/img',express.static('img'));

server.use(express.static('public'));

server.listen(3000, () => console.log("rodando em  http://localhost:3000"));