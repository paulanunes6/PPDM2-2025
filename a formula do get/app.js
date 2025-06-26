const express = require("express")
const app = express()
const porta = 3000

app.set("view engine","ejs")

app.get("/", (req,res)=>{
    res.render("conta facil")
})

app.get("/resultado", (req,res)=>{
    let numero = Number(req.query.numero)
    let total = numero**2
    res.render('resultado', {total})
})

app.listen(porta, ()=>{
    console.log('servidor aberto na página http://localhost:3000:${porta}')
})
