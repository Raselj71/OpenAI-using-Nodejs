import express from 'express'
import 'dotenv/config'
import rootRoute from './route.js'


const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/api/v1",rootRoute)



export default app;