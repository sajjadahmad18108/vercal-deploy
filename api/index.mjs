import app from '../server.mjs';

export default function handler(req, res) {
    app(req, res);  // Delegate the request to the Express app
}
