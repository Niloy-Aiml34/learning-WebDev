import path from 'node:path'
import fs from 'node:fs/promises'
import { getData } from './getData.js'

export async function addNewSightings(sightings){
    const data = await getData();
    data.push(sightings);
    const filepath = path.join('data','data.json' );
    await fs.writeFile(filepath,JSON.stringify(data,null,2),'utf-8')

}