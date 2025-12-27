import path from 'node:path';
import { sendResponse } from './sentResponse.js';
import fs from 'node:fs/promises';

export async function serveStatic(__dirname,res,req){
    const filepath = path.join(__dirname,'public','index.html')
    
    try{
        const content = await fs.readFile(filepath);
        sendResponse(res,200,'text/html',content);
    }
    catch(e){
        console.log(e);
    }
    
}