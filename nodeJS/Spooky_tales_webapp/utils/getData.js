import path from 'node:path'
import fs from 'node:fs/promises'

export async function getData(){
    try{
        const filepath = path.join('data','data.json' );
        const data = await fs.readFile(filepath, 'utf-8');
        const jsondata = JSON.parse(data);
        return jsondata;
    }
    catch(e){
        console.log(e);
        return [];
    }
    
    
}
