const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const { response } = require('express')
require('dotenv').config()

const app = express()

app.get('/',(req,res) => {
    res.json('hi')
})

app.get('/',(req,res) => {
   
    const {data} = await axios.get((Baseurl),{
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
          }
    });
    axios.request(options).then((response) =>{
        res.json(response.data)
    })
    return data;
})

app.listen(8000, () => console.log(`server is running on port ${PORT}`))