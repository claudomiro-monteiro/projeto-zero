const path = require('path');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const upload = require('multer')();
app.post("/contato", upload.single(''), (req, res, next) => {

     // console.log(req.body)
     const nome = req.body.nome;
     const email = req.body.email;
     const telefone = req.body.telefone;
     const mensagem = req.body.mensagem;

     // console.log({nome, email, telefone, mensagem});
     // res.json({nome, email, telefone, mensagem});
     
     require('./nodemailer/nodemail')(nome, email, telefone, mensagem)
          .then(response => res.json(response.data))
          .catch(error => res.status(500).json(error));

});

app.use(express.static(path.join(__dirname, 'build')));

app.listen(process.env.PORT || 3000, () => console.log('Servidor iniciado'));



