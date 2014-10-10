var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
   var db = req.db;
   var collection = db.get('estudante');
   collection.find({},{},function(e,docs){
        res.render('listaEstudante', {
            "listaestudante" : docs
        });
    });
});


router.get('/adicionar', function(req, res) {
    var doc = {id:'',nome:''};
    res.render('formEstudante', { title: 'Adicionar Estudante', 'estudante': doc, 'action': '/estudante/salvar'});
});

router.get('/deletar/:estudante_id', function(req, res) {
   var db = req.db;
   var estudante_id = req.param('estudante_id');
   var collection = db.get('estudante');
   collection.remove({ "id" : { $eq: estudante_id} },function (err,docs){
        res.location("/estudante");
        res.redirect("/estudante");
    });
});

router.get('/editar/:id', function(req, res) {
	var db = req.db;
    var collection = db.get('estudante');
    var id = req.params.id;
    collection.find({ id: id } ,function (err,doc){
        console.log(doc);
        res.render('formEstudante', 
        	{ 'title': 'Editar Estudante',  'estudante' : doc[0], 'action': '/estudante/update'});
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
    var collection = db.get('estudante');

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
            res.location("/estudante");
            // And forward to success page
            res.redirect("/estudante");
        }
    });
});

router.post('/update', function(req, res) {

    // Set our internal DB variable
    var db = req.db;
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var id = req.body.id;
    var nome = req.body.nome;

    // Set our collection
    var collection = db.get('estudante');

    // Submit to the DB
    collection.update({ "id": id},{
        "id" : id,
        "nome" : nome
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("/estudante");
            // And forward to success page
            res.redirect("/estudante");
        }
    });
});


module.exports = router;
