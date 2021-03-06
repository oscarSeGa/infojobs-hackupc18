const express = require('express');
const fs = require('fs');
const path = require('path');
const myParser = require("body-parser");
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

  router.route('/recomendations')
  .get(function (req, res) {
    return getRecomendacions(res);
  });

  router.route('/recomendations/reset')
  .post(function (req, res) {
    
    var ofertas = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../src/assets/ofertas.json'), 'utf8'));
    ofertas.offers.forEach(element => {
      
      element.visible = true
    });
    
    fs.writeFile(path.resolve(__dirname, '../../src/assets/ofertas.json'), JSON.stringify(ofertas), 'utf8', function(err) {
      if (err) return res.status(400).json("Error al actualizar las ofertas");
      return res.status(200).json("Ofertas actualizadas correctamente");
    });
  });

  router.route('/recomendations/:id')
  .put(function (req, res) {
    
    var ofertas = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../src/assets/ofertas.json'), 'utf8'));
    ofertas.offers.forEach(function(oferta) {
      if (oferta.id == req.params.id) oferta.visible = false;
    });
    fs.writeFile(path.resolve(__dirname, '../../src/assets/ofertas.json'), JSON.stringify(ofertas), 'utf8', function(err) {
      if (err) return res.status(400).json("Error al actualizar las ofertas");
      return res.status(200).json("Ofertas actualizadas correctamente");
    });

  })

  router.route('/cv')
  .post(function (req, res) {

    fs.writeFile(path.resolve(__dirname, '../../src/assets/user.json'), JSON.stringify(req.body), 'utf8', function(err) {
      if (err) return res.status(400).json("Error al guardar el CV");
      getRecomendacions(res);
    });

  })

  router.route('/cv')
  .put(function (req, res) {

    fs.writeFile(path.resolve(__dirname, '../../src/assets/user.json'), JSON.stringify(req.body), 'utf8', function(err) {
      if (err) return res.status(400).json("Error al guardar el CV");
      return res.status(200).json("CV guardado correctamente");
    });

  })

  router.route('/cv')

  .get(function (req, res) {
    var cv = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../src/assets/user.json'), 'utf8'));
    return res.status(200).json(cv);

  });

  router.route('/countries')
  .get(function (req, res) {
    var countries = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../src/assets/countries.json'), 'utf8'));
    return res.status(200).json(countries);
  });

  router.route('/keywords')
  .get(function (req, res) {
    var keywords = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../src/assets/keywords.json'), 'utf8'));
    return res.status(200).json(keywords);
  });

router.route('/test')
  .get(function (req, res) {
    //Success
    return res.status(200).json('GET DONE');
  })

  .post(function (req, res) {
    return res.status(200).json('POST done');
  })

  .delete(function (req, res) {
    return res.status(200).json('DELETE done');
  });

module.exports = router;
function getRecomendacions(res) {
  var ofertasProv = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../src/assets/ofertas.json'), 'utf8'));
  var ofertas = [];
  ofertasProv.offers.forEach(function (oferta) {
    if (oferta.visible)
      ofertas.push(oferta);
  });
  var user = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../src/assets/user.json'), 'utf8'));
  let p = user.personal_information.place;
  let l = user.languages;
  let k = user.knowledge;
  var newl = [];
  var newk = [];
  k.forEach(function (element) {
    newk.push(element.knwoledge_name.toLowerCase());
  });
  l.forEach(function (element) {
    newl.push(element.languages_name.toLowerCase());
  });
  ofertas.map(function (oferta) {
    let max = oferta.keywords.length + oferta.languages.length + 1;
    var rating = 0;
    const keywordsintersection = oferta.keywords.filter(element => newk.includes(element.toLowerCase()));
    rating = rating + keywordsintersection.length;
    const languagesIntersection = oferta.languages.filter(element => newl.includes(element.toLowerCase()));
    rating = rating + languagesIntersection.length;
    if (oferta.city.toLowerCase() == p.toLowerCase()) {
      rating = rating + 1;
    }
    if (rating <= 0) {
      oferta.rating = rating;
    }
    else {
      oferta.rating = Math.trunc((rating / max) * 100);
    }
    return;
  });
  ofertas.sort(function (a, b) {
    return b.rating - a.rating;
  });
  return res.status(200).json(ofertas);
}

