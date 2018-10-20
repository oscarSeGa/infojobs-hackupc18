const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

  router.route('/recomendations')
  .get(function (req, res) {

    var recomendaciones;

    var ofertas = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../ofertas.json'), 'utf8'));
    ofertas.offers.map(function(oferta) {
      
      });
    
    return res.status(200).json(ofertas)
  });

router.route('/test')
  .get(function (req, res) {
    //Success
    return res.status(200).json('GET DONE');
    /*
    ERROR
    return res.status(400).json(err);
    */
  })

  .post(function (req, res) {
    return res.status(200).json('POST done');
  })

  .delete(function (req, res) {
    return res.status(200).json('DELETE done');
  });

module.exports = router;
