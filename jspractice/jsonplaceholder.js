try{
    const response =  await fetch('https://apis.scrimba.com/jsonplaceholder/post');
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