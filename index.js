import app from './app.js'
const port=process.env.port || 5000


app.listen(port,(req,res)=>{
    console.log(`server is running at http://localhost:${port}`)
})