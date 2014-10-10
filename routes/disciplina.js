var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
   var db = req.db;
   var collection = db.get('disciplina');
   collection.find({},{},function(e,docs){
        res.render('listaDisciplina', {
            "listadisciplina" : docs
        });
    });
});


router.get('/adicionar', function(req, res) {
    var doc = {id:'',nome:''};
    res.render('formDisciplina', { title: 'Adicionar Disciplina', 'disciplina': doc, 'action': '/disciplina/salvar' });
});

router.get('/editar/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('disciplina');
    var id = req.params.id;
    collection.find({ id: id } ,function (err,doc){
        console.log(doc);
        res.render('formDisciplina', 
            { 'title': 'Editar Disciplina',  'disciplina' : doc[0], 'action': '/disciplina/update'});
    });
});

router.get('/deletar/:id', function(req, res) {
   var db = req.db;
   var id = req.param('id');
   var collection = db.get('disciplina');
   collection.remove({ "id" : { $eq: id} },function (err,docs){
        res.location("/disciplina");
        res.redirect("/disciplina");
    });
});


router.post('/salvar', function(req, res) {

    var db = req.db;
    var db = req.db;
    var id = req.body.id;
    var nome = req.body.nome;
    var collection = db.get('disciplina');

    collection.insert({
        "id" : id,
        "nome" : nome
    }, function (err, doc) {
        if (err) {
            res.send("There was a problem adding the information to the database.");
        }
        else {
            res.location("/disciplina");
            res.redirect("/disciplina");
        }
    });
});

router.post('/update', function(req, res) {

    var db = req.db;
    var db = req.db;
    var id = req.body.id;
    var nome = req.body.nome;
    var collection = db.get('disciplina');

    collection.update({ "id": id},{
        "id" : id,
        "nome" : nome
    }, function (err, doc) {
        if (err) {
            res.send("There was a problem adding the information to the database.");
        }
        else {
            res.location("/disciplina");
            res.redirect("/disciplina");
        }
    });
});


module.exports = router;
