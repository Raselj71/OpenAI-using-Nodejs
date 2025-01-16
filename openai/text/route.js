import express from 'express'
import {textController} from "./controller.js"

const route=express.Router();

route.post('/test',textController)

export default route;