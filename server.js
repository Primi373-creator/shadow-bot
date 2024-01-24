import express from 'express'
import { createServer } from 'http'
import path from 'path'
import { Socket } from 'socket.io'
import { toBuffer } from 'qrcode'
import fetch from 'node-fetch'

function connect(conn, PORT) {
    let app = global.app = express();
    let server = global.server = createServer(app);
    let _qr = 'invalid';

    conn.ev.on('connection.update', function appQR({ qr }) {
        if (qr) _qr = qr;
    });

    app.get('/', (req, res) => {
        // Render a simple HTML page with the QR code and text
        res.send(`
            <html>
                <body>
                    <img src="${_qr}" alt="QR Code">
                    <p>hello from Cipher.</p>
                </body>
            </html>
        `);
    });

    server.listen(PORT, () => {
        console.log('App listened on port', PORT);
    });
}

export default connect;
