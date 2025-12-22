try{
    const response =  await fetch('https://apis.scrimba.com/jsonplaceholder/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: 'This is Doomsday',
            body:'Run to bunker and stay there and wait for Jonas to come back',
            userId: 2020
        }),
        headers:{
            'content-type': 'application/json'
        }
    });
    if(!response.ok){
        throw new Error('There is a problem in api')
    }
    const data =  await response.json();
    console.log(data);
}catch(err){
    console.log('Error:', err);
}finally{
    console.log('Fetch attempt finished.');
}