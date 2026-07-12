import { createServer } from "node:http";
import { createServerAdapter } from "@whatwg-node/server";
import handler from "./dist/server/server.js";
import { readFileSync, existsSync } from "node:fs";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const clientDir = join(__dirname, "dist/client");

const mimeTypes = {
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".mp3": "audio/mpeg",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".json": "application/json",
  ".html": "text/html",
};

const PORT = process.env.PORT || 10000;

const server = createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const filePath = join(clientDir, url.pathname);

  // Serve static files from dist/client
  if (existsSync(filePath) && !filePath.endsWith("/")) {
    const ext = extname(filePath);
    const mime = mimeTypes[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": mime });
    res.end(readFileSync(filePath));
    return;
  }

  // Fall through to SSR handler for everything else
  const adapter = createServerAdapter(handler.fetch.bind(handler));
  adapter(req, res);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});