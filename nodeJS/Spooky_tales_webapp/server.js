import http from 'node:http';
import { serveStatic } from './utils/serveStatic.js';
import { handleGet, handlePost } from './handlers/routeHandlers.js';




const port= 8000;
const __dirname = import.meta.dirname


const server= http.createServer(async (req,res)=>{

        if (req.url === '/api') {
            if (req.method === 'GET') {
                return await handleGet(req,res);
            }
            else if(req.method=== 'POST'){
                return await handlePost(req,res);
            }
        }
        else if(!req.url.startsWith('/api')){
            await serveStatic(__dirname,req,res);
        }
        
    }
);



server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})