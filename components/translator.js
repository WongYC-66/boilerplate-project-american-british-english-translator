const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  process(text, locale){
    // console.log(`in process. ${text} ${locale}`)
    let translateText = text.slice();
  
    // american to british
    if (locale == 'american-to-british'){
      console.log("----to british----")
      // convert time -> 12.15
      if(/\d+:\d\d/.test(translateText)){
        let timeString = translateText.match(/\d+:\d\d/)[0]
        // console.log(timeString)
        let timeStringBritish = timeString.slice(0,-3) + "." + timeString.slice(-2)
        let highlightString = `<span class="highlight">${timeStringBritish}</span>`
        translateText = translateText.replace(timeString, highlightString);
      }
    
      //convert from 3 javascript objects file
      for(const key in americanToBritishSpelling){
        let highlightString = `<span class="highlight">${americanToBritishSpelling[key]}</span>`
        translateText = translateText.replaceAll(key, highlightString)
      }
      for(const key in americanOnly){
        if (translateText.toLowerCase().search(key) != -1){
          const position = translateText.toLowerCase().search(key)  // get position first
          const regex = new RegExp(key,"ig");   // create regex = /${key}/ig
          // condition to replace:
          // 1. first letter
          // 2. " " at front
          // 3. " " at back or "." at back
          if (position == 0 || translateText[position - 1] == " " && translateText[position + key.length] == "." || translateText[position + key.length] == " "){
            let highlightString = `<span class="highlight">${americanOnly[key]}</span>`
            translateText = translateText.replaceAll(regex, highlightString)
            // console.log("replace")
          } else { // error, skip this search
            // console.log("continue")
            continue;
          }
        } // if found
      }
      for(const key in americanToBritishTitles){
        // format key, mr -> Mr
        let titleKey = key.toUpperCase()[0] + key.slice(1,)
        let titleValue =  americanToBritishTitles[key].toUpperCase()[0] + americanToBritishTitles[key].slice(1,)
        let highlightString = `<span class="highlight">${titleValue}</span>`
        translateText = translateText.replaceAll(titleKey, highlightString)
      }
    }

    // british to american
    if (locale == 'british-to-american'){
      console.log("----to american----")
      // convert time -> 12:15
      if(/\d+.\d\d/.test(translateText)){
        let timeString = translateText.match(/\d+.\d\d/)[0]
        // console.log(timeString)
        let timeStringBritish = timeString.slice(0,-3) + ":" + timeString.slice(-2)
        let highlightString = `<span class="highlight">${timeStringBritish}</span>`
        translateText = translateText.replace(timeString, highlightString);
      }
      //convert from 3 javascript objects file
      for(const key in americanToBritishSpelling){
        let highlightString = `<span class="highlight">${key}</span>`
        translateText = translateText.replaceAll(americanToBritishSpelling[key], highlightString)
      }
      for(const key in britishOnly){
        if (translateText.toLowerCase().search(key) != -1){
          // console.log(`found ${key}`)
          const position = translateText.toLowerCase().search(key)  // get position first
          // console.log(`position : ${position}`)
          
          const regex = new RegExp(key,"ig");   // create regex = /${key}/ig
          // console.log(regex)
              
          // condition to replace:
          // 1. first letter
          // 2. " " at front
          // 3. " " at back or "." at back
          if (position == 0 || translateText[position - 1] == " " && translateText[position + key.length] == "." || translateText[position + key.length] == " "){
            let highlightString = `<span class="highlight">${britishOnly[key]}</span>`
            translateText = translateText.replaceAll(regex, highlightString)
            // console.log("replace")
          } else { // error, skip this search
            // console.log("continue")
            continue;
          }
        } // if found
      }
      for(const key in americanToBritishTitles){
        // format key, mr -> Mr
        if (translateText.toLowerCase().search(key) != -1){
          // console.log(`found ${key}`)
          const position = translateText.toLowerCase().search(key)  // get position first
          // console.log(`position : ${position}`)
          // condition to skip: 
          // 1. " " at front
          // 2. " " at back 
          if (translateText[position - 1] == " " &&  translateText[position + key.length] == " "){
            // console.log("continue") // skip
            continue;
          } // mis-match, skip this
          
          let titleKey = key.toUpperCase()[0] + key.slice(1,)
          let titleValue =  americanToBritishTitles[key].toUpperCase()[0] + americanToBritishTitles[key].slice(1,)
          // console.log({titleKey , titleValue})
          // console.log(translateText)
          // console.log("replace")
          let highlightString = `<span class="highlight">${titleKey}</span>`
          
          translateText = translateText.replaceAll(titleValue, highlightString)
        }
        
      }
    }

    // format first chac -> uppercase 
    // get the last symbol of original text -> ! / . / ?
    translateText = translateText.slice(0,1).toUpperCase() + translateText.slice(1,-1) + text.slice(-1)
    return translateText
    
  }
}

module.exports = Translator;