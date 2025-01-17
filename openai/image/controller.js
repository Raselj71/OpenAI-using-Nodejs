import { response } from "express";
import openaiClient from "../../config/OpenAIClient.js";
export const imageController=async(req, res)=>{
  try {
    const{url}=req.body;
    console.log("image url:",url)
    const response=await openaiClient.chat.completions.create({
        model:"gpt-4o-mini",
        messages:[
            {
                role:'user',
                content:[
                    {
                        type:'text' ,text:"Act like just a OCR Optical Character Recognition system. I will provide you an image so you will extract all text from image including all punctuation, space properly. Do not change any single character . Write exact all sentences as it is on image.",
                        
                    },{
                        type:'image_url',
                        image_url:{
                            "url":url
                        }
                    }
                ]
            }
        ]


       
    })


    const responseText= response.choices[0];

   return res.status(200).json({data:responseText})

  } catch (error) {
    console.log(error)
  }
}