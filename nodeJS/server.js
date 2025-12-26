import http from 'node:http';
import {getDataFromDB} from './database/db.js';
import { sendResponse } from './utils/sendJSONResponse.js';
import {getDataByQueryParams} from './utils/getDataByQueryParams.js'

const PORT = 8000;




const server = http.createServer(async(req,res) => {
    const destination = await getDataFromDB();

    const urlObj =  new URL(req.url, `http://${req.headers.host}`);
    const queryobj = Object.fromEntries(urlObj.searchParams);

    

    if(urlObj.pathname ==='/api' && req.method === 'GET'){
        let filteredData = getDataByQueryParams(destination,queryobj);
        
        sendResponse(res,200,filteredData);
        
    }
    else if(req.url.startsWith('/api/continents') && req.method === 'GET'){
        const continents = req.url.split('/').pop();
        const filterdata = destination.filter((destination)=>{
            return destination.continent.toLowerCase().replace(/\s+/g, "") === continents.toLowerCase().replace(/\s+/g, "");
        })
        sendResponse(res,200,filterdata);
    }
    else if(req.url.startsWith('/api/country') && req.method === 'GET'){
        const country = req.url.split('/').pop();
        const filterdata = destination.filter((destination)=>{
            return destination.country.toLowerCase().replace(/\s+/g, "") === country.toLowerCase().replace(/\s+/g, "");
        })
        sendResponse(res,200,filterdata);
    }
    else{
        sendResponse(res,200,({
            error: "Not Found",
            message: "Path is not correct"
        }));
    }
})

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})