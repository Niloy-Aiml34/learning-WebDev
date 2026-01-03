import { getData } from "../utils/getData.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { sendResponse } from "../utils/sendResponse.js";
import { addNewSightings } from "../utils/addNewSightings.js";
import { sanitizeInput } from "../utils/sanitizeInput.js";
import { sigthingEvents } from "../events/sightingsEvent.js";

export async function handleGet(req,res){
    const data = await getData();
    const payload = JSON.stringify(data);
    sendResponse(res,200,'application/json', payload);

}

export async function handlePost(req,res) {
    
    try {
        const parsedBody = await parseJSONBody(req);
        const sanitizedBody = sanitizeInput(parsedBody);
        await addNewSightings(sanitizedBody);
        sigthingEvents.emit('Sighting Added',sanitizedBody)
        sendResponse(res,201,'application/json',JSON.stringify(sanitizedBody))
    } catch (error) {
        sendResponse(res,400,'application/json',JSON.stringify({Error: error}))
    }
}