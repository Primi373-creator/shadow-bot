import express from 'express';
import { createServer } from 'http';
import path from 'path';

function connect(PORT) {
    const __filename = new URL(import.meta.url).pathname;
    const __dirname = path.dirname(__filename);

    let app = global.app = express();
    console.log(app);

    let server = global.server = createServer(app);

    // Serve the static HTML file
    app.use(express.static(path.join(__dirname, 'views')));

    server.listen(PORT, () => {
        console.log('App listened on port', PORT);
    });
}

export default connect;
