import path from 'node:path';
import { sendResponse } from './sendResponse.js';
import fs from 'node:fs/promises';
import { getContentType } from './getContentType.js';

export async function serveStatic(__dirname,req,res){
    if (req.url === "/favicon.ico") {
        res.writeHead(204);
        res.end();
        return;
    }
    const filename = req.url === '/' ? 'index.html': req.url;
    const filepath = path.join(__dirname,'public', filename );
    const fileExt = path.extname(filepath);
    try{
        const contentType = getContentType(fileExt);
        const content = await fs.readFile(filepath);
        sendResponse(res,200,contentType,content);
    }
    catch(err){
        if(err.code === 'ENOENT'){
            const content = await fs.readFile(path.join(__dirname,'public','404.html'));
            const contentType = getContentType('404.html');
            sendResponse(res,200,contentType,content);
            
        }
        else{
            sendResponse(res,500,'text/html',`<html><h1>Server Error: ${err.code}</h1></html>`);
        }
        console.log(err);
    }
    
}