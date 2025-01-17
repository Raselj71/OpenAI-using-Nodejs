import express from 'express'
const route=express.Router();
import openAIRoute from "./openai/text/route.js"
import audioRoute from './openai/audio/route.js'
import imageRoute from './openai/image/route.js'


route.use('/text',openAIRoute)
route.use('/audio',audioRoute);
route.use('/image',imageRoute)



export default route;