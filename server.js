const http = require('http');

const crypto = require('crypto');



http.createServer((req, res) => {
    let size = req.url.substring(1).toUpperCase();
    let multiplier = size.endsWith('K') ? 1024 : size.endsWith('M') ? 1024*1024: 1024*1024*1024;
    let byteSize = parseInt(size) * multiplier;

  res.writeHead(200, {
    'Content-Type': 'application/octet-stream',
    'Content-Length': byteSize,
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires": 0,
  });

    res.end(crypto.randomBytes(byteSize));
}).listen(3000);
