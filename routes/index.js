var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Diário de Classe', 'subtitle': 'Sistema de presença on-line' });
});

module.exports = router;
