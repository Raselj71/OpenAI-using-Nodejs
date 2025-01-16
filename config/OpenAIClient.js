import OpenAi from "openai"

const  openaiClient=new OpenAi({
    apiKey:process.env.OpenAi_api_key
})

export default openaiClient;