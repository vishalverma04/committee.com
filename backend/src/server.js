import express from 'express'

const app=express()
const PORT=30000

app.get('/',(req,res)=>{
    res.send('server is start...')
})
 app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
    console.log(`http://localhost:${PORT}`)
 })