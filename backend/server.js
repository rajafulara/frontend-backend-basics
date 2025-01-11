import express from 'express'
import 'dotenv/config'
import cors from 'cors'

var whitelist = [process.env.FRONTEND_URL,]
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

const app = express()

app.get('/',cors(corsOptions),(req,res)=>{
    res.send('Server is ready')
})

app.get('/api/jokes',cors(corsOptions),(req,res)=>{

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
    console.log(`PORT: ${port}`)
})