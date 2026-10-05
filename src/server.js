require("dotenv").config();


const express = require("express");//create hhtp server
const pino = require("pino");// creates strcutured logs
const pinoHttp = require("pino-http");
const app = express();
const logger = pino();
// Add request logging middleware.
// Middleware runs before the matching route handler.
app.use(pinoHttp({ logger }));

// Define a GET endpoint at /health.
// req contains information about the request.
// res is used to send the response.
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Use PORT from .env if set; otherwise use 3000.
const port = process.env.PORT || 3000;

// Start listening for HTTP requests.
app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});