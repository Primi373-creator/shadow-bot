/*

import fs from 'fs/promises';
import PastebinAPI from 'pastebin-js';

const pastebin = new PastebinAPI("h4cO2gJEMwmgmBoteYufW6_weLvBYCqT");

async function makesession(session_id, authFile) {
    try {
        const code = session_id.replace(/_SHADOW_/g, "");
        const decodedCode = Buffer.from(code, "base64").toString("utf-8");

        const data = await pastebin.getPaste(decodedCode);

        if (!(await fileExists(authFile))) {
            await fs.writeFile(authFile, data);
            console.log("Session created successfully.");
            // Continue with the rest of the script logic here
        } else {
            console.log("Session ID is already in use.");
        }
    } catch (error) {
        console.log("Invalid or expired session ID.");
        process.exit(1); // Exit the script with an error code
    }
}

async function fileExists(filePath) {
    try {
        await fs.access(filePath);
        return true;
    } catch (error) {
        return false;
    }
}

export default makesession;*/
