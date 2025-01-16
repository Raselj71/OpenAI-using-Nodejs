import openaiClient from "../../config/OpenAIClient.js"
import fs from 'fs'
import path from "path"
export const audioController=async(req,res)=>{
    try {
        const audioData=path.resolve('./tmp/audio.mp3');
        const response=await openaiClient.audio.transcriptions.create({
            model:'whisper-1',
            file:fs.createReadStream(audioData)
        })

        const responseText=response.text;

        return res.status(200).json({data:responseText});

        
    } catch (error) {
        console.log(error)
        
    }

}