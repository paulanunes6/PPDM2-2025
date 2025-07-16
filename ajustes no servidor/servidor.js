const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.set('views', './views');
const rotaResultado= app.route("/resultado")
app.get("/", (req, res) => {
    res.render("index")
})

rotaResultado.get((req,res)=>{
    res.redirect("/")
})
rotaResultado.post((req, res) => {
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)
    let oper = req.body.operacao
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
