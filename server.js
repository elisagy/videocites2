const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'dist/videocites')));

app.get('/api/videosLogs', function(req, res) {
    res.json(require('./video_log.json'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/videocites', 'index.html'));
});

app.listen(8080);