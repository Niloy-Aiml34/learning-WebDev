import http from 'node:http';

const PORT = 8000;
const server = http.createServer((req,res) => {
    res.end('hello from Server','utf8', ()=>{
        console.log('Response has been sent');
    });
})

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})