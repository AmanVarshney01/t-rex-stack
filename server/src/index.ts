import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  res.setHeader("Content-Type", "application/json");

  const data = {
    message: "Hello World",
  };

  res.end(JSON.stringify(data));
});

server.listen(8080, () => {
  console.log("Server is running on port 3000");
});
