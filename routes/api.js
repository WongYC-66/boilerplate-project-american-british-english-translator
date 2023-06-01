'use strict';

const Translator = require('../components/translator.js');

module.exports =  function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      console.log(req.body)
      const text = req.body.text
      const locale = req.body.locale
      // console.log({text,locale})

      // error handling
      if(req.body.text == ""){
        console.log(`error : No text to translate`)
        return res.json({error: 'No text to translate' })
      }
      if( ! req.body.text || ! req.body.locale){
        console.log(`error : Required field(s) missing`)
        return res.json({error: 'Required field(s) missing'})
      }
      if(locale != 'american-to-british' && locale != 'british-to-american'){
        console.log(`error : Invalid value for locale field`)
        return res.json({error: 'Invalid value for locale field' })
      }

      let translation = translator.process(text, locale)
      // if same text, no translatoin return "Everything looks good to me!
      if (text == translation){
        console.log('Everything looks good to me!')
        return res.json({text: text, translation: 'Everything looks good to me!'})
      }
      console.log(`return : ${translation}`)
      return res.json({text : text, translation : translation});
      // return res.json({translation : translation});
      
    
    });





  
};
