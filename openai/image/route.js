import express from 'express'
import { imageController } from './controller.js';

const route= express.Router();

route.post('/',imageController);

export default route;