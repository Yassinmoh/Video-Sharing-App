import express from 'express';


import('./db.js')

const app =express()
const PORT=4000



app.listen(PORT,()=>{
    console.log(`Server Listening on port ${PORT}`)
})





