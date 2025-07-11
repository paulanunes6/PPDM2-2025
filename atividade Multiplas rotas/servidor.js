const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.get("/", (req, res) => {
    res.render("index")
})
app.get("/resultado", (req, res) => {
    let num1 = Number(req.query.num1)
    let num2 = Number(req.query.num2)
    let oper = req.query.operacao
    let total 
    if(oper=="+"){
        total = num1+num2
    }
    else if(oper=="-"){
    total = num1-num2
    }
    else if(oper=="*"){
    total = num1*num2
    }
    else if(oper=="/"){
    total = num1/num2
    }
    res.render("resultado",{total})
})
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
