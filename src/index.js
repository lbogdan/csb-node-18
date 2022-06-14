import http from 'http';

const port = process.env.PORT ?? 8080;

http.createServer((req, res) => {
  res.end(`Node.js version: ${process.version}`);
}).listen(port, () => {
  console.info(`[INFO] server listening on port ${port}`);
});
