const promise = new Promise((resolve,reject) => {
    const success = Math.random() > 0.5;
    if(success){
        resolve("Operation Successfull")
    }
    else{
        reject("Operation Failed")
    }
})


promise.then((message) => {
    console.log("Success: " + message);
}).catch((message) => {
    console.log("Error: " + message);
});