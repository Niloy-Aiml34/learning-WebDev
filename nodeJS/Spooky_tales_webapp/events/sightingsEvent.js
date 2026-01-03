import {EventEmitter} from 'node:events';
import {createAlert} from '../utils/createAlerts.js';

export const sigthingEvents = new EventEmitter()
sigthingEvents.on('Sighting Added',createAlert)