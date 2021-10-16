'use strict';

let model = require('../models/example.model');

// Retornando padrão JSON
module.exports.exampleGetJson = (req, res) => {
    res.status(200).json({ message: 'GET OK!', qq });
}

module.exports.examplePostJson = (req, res) => {
    // exemplo de como tratar o body da requisição
    let data = {};
    if(req.body.nome){
        data.message = 'Olá ' + req.body.nome + ', seja bem vindo';
    }else{
        data.message = 'Olá sr. fantasma';
    }
    res.status(201).json(data);
}

// Retornando Query
module.exports.exampleQuery = async function(req, res){
    try{
        let resQuery = await model.exampleQuery();
        res.status(200).json({ message: 'Query teste', data: resQuery });
    }catch(err){
        
    }
    
}

// Apenas retornando, sem usar padrão json
module.exports.exampleGet = (req, res) => {
	res.send('GET OK!');
}

module.exports.examplePost = (req, res) => {
    let data = {};
    if(req.body.nome){
        res.send('Olá ' + req.body.nome + ', seja bem vindo');
    }else{
        res.send('Olá sr. fantasma');
    }
}
