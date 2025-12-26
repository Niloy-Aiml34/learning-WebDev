export function sendResponse(res, statusCode, data){
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data), 'utf8', () => {
        console.log('Response has been sent');
    });
}