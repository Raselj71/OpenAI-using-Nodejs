import openaiClient from "../../config/OpenAIClient.js"

export const  textController=async(req,res)=>{
    try {
        const {message}=req.body;
        console.log(message);

        const response=await openaiClient.chat.completions.create({
            model: "gpt-4o",
            messages:[
                {
                    role:'system',
                    content:message,
                }
            ]
        })

        const responseText=response.choices[0].message.content;
        res.status(200).json({data:response})
    } catch (error) {
        console.log(error)
        
    }

}