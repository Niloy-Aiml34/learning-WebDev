export function sendResponse(res,statuscode,contentType,payload){
    res.statusCode = statuscode;
    res.setHeader('Content-Type',contentType)
    res.end(payload)
}