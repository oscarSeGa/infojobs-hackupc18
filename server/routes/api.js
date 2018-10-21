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
    var ofertas = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../src/assets/ofertas.json'), 'utf8'));
    var user = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../../src/assets/user.json'),'utf8'));
    console.log(user);
    let p = user.personal_information.place;
    console.log(p);
    let l = user.languages;
    console.log(l);
    let k = user.knowledge;
    console.log(k);
    
    ofertas.offers.map(function(oferta) {
      console.log(oferta.keywords);
      let max = oferta.keywords.length + oferta.languages.length + 1;
      let rating = 0;
      const keywordsintersection = oferta.keywords.filter(element => k.includes(element));
      rating += keywordsintersection;
      const languagesIntersection = oferta.language.filter(element => l.includes(element));
      if (oferta.city == p) {
        rating++;
      }
      if (oferta.language.length == languagesIntersection) {
        rating++;
      } else {
        rating = 0;
        return
      }
      console.log(max/rating);
      
      return max/rating;
    });
    return res.status(200).json(ofertas)
  });

  router.route('/cv')
  .post(function (req, res) {

    fs.writeFile(path.resolve(__dirname, '../../src/assets/user.json'), JSON.stringify(req.body), 'utf8', function(err) {
      if (err) return res.status(400).json("Error al guardar el CV");
      return res.status(200).json("CV guardado correctamente");
    });

  })

  router.route('/cv')
  .put(function (req, res) {

    fs.writeFile(path.resolve(__dirname, '../../src/assets/user.json'), JSON.stringify(req.body), 'utf8', function(err) {
      if (err) return res.status(400).json("Error al guardar el CV");
      return res.status(200).json("CV guardado correctamente");
    });

  })

  router.route('/countries')
  .get(function (req, res) {
    var countries = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../src/assets/countries.json'), 'utf8'));
    return res.status(200).json(countries);
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
