import express from 'express'
const route=express.Router();
import openAIRoute from "./openai/text/route.js"
import audioRoute from './openai/audio/route.js'


route.use('/text',openAIRoute)
route.use('/audio',audioRoute);



export default route;