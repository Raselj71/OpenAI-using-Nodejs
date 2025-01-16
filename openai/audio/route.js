import express from 'express'
import { audioController } from './controller.js';
const route=express.Router();

route.post('/',audioController);

export default route;