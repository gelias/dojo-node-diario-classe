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
    res.render('formDisciplina', { title: 'Adicionar Disciplina' });
});

router.get('/editar', function(req, res) {
    res.render('formDisciplina', { title: 'Adicionar Disciplina',  });
});

router.get('/delete/:id', function(req, res) {
   var db = req.db;
   var id = req.param('id');
   var collection = db.get('disciplina');
   collection.remove({ id : id },function (err,docs){
        res.location("/disciplina");
        res.redirect("/disciplina");
    });
});


router.post('/salvar', function(req, res) {

    // Set our internal DB variable
    var db = req.db;
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var id = req.body.id;
    var nome = req.body.nome;

    // Set our collection
    var collection = db.get('disciplina');

    // Submit to the DB
    collection.insert({
        "id" : id,
        "nome" : nome
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("/disciplina");
            // And forward to success page
            res.redirect("/disciplina");
        }
    });
});


module.exports = router;
