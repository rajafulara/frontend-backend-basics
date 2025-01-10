import express from 'express'
import 'dotenv/config'
const app = express()

app.get('/',(req,res)=>{
    res.send('Server is ready')
})

app.get('/api/jokes',(req,res)=>{

    const jokes = [
        {
            id:1,
            title:'A joke',
            content:'This is a joke'
        },
        {
            id:2,
            title:'Another joke',
            content:'This is another joke'
        },
    ]
    res.send(jokes)
})

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`)
})