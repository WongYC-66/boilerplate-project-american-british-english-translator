const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
  const translator = new Translator();
  const toBrit  = 'american-to-british'
  const toAmer  = 'british-to-american'
  // #1
  test('Translate Mangoes are my favorite fruit. to British English', function() {
    let test_string = "Mangoes are my favorite fruit."
    let expected_string = 'Mangoes are my <span class="highlight">favourite</span> fruit.'
    let response = translator.process(test_string, toBrit)
    assert.equal(response, expected_string,'incorrect translation to British English');
  });
  // #2
  test('Translate I ate yogurt for breakfast.', function() {
    let test_string = "I ate yogurt for breakfast."
    let expected_string = 'I ate <span class="highlight">yoghurt</span> for breakfast.'
    let response = translator.process(test_string, toBrit)
    assert.equal(response, expected_string,'incorrect translation to British English');
  });
  // #3
  test("Translate We had a party at my friend's condo.", function() {
    let test_string = "We had a party at my friend's condo."
    let expected_string = `We had a party at my friend's <span class="highlight">flat</span>.`
    let response = translator.process(test_string, toBrit)
    assert.equal(response, expected_string,'incorrect translation to British English');
  });
  // #4
  test("Translate Can you toss this in the trashcan for me?", function() {
    let test_string = "Can you toss this in the trashcan for me?"
    let expected_string = `Can you toss this in the <span class="highlight">bin</span> for me?`
    let response = translator.process(test_string, toBrit)
    assert.equal(response, expected_string,'incorrect translation to British English');
  });
  // #5
  test("Translate The parking lot was full", function() {
    let test_string = `The parking lot was full.`
    let expected_string = `The <span class="highlight">car park</span> was full.`
    let response = translator.process(test_string, toBrit)
    assert.equal(response, expected_string,'incorrect translation to British English');
  });
  // #6
  test("Translate Like a high tech Rube Goldberg machine.", function() {
    let test_string = `Like a high tech Rube Goldberg machine.`
    let expected_string = `Like a high tech <span class="highlight">Heath Robinson device</span>.`
    let response = translator.process(test_string, toBrit)
    assert.equal(response, expected_string,'incorrect translation to British English');
  });
  // #7
  test("Translate To play hooky means to skip class or work.", function() {
    let test_string = `To play hooky means to skip class or work.`
    let expected_string = `To <span class="highlight">bunk off</span> means to skip class or work.`
    let response = translator.process(test_string, toBrit)
    assert.equal(response, expected_string,'incorrect translation to British English');
  });
  // #8
  test("Translate No Mr. Bond, I expect you to die.", function() {
    let test_string = `No Mr. Bond, I expect you to die.`
    let expected_string = `No <span class="highlight">Mr</span> Bond, I expect you to die.`
    let response = translator.process(test_string, toBrit)
    assert.equal(response, expected_string,'incorrect translation to British English');
  });
  // #9
  test("Translate Dr. Grosh will see you now.", function() {
    let test_string = `Dr. Grosh will see you now.`
    let expected_string = `<span class="highlight">Dr</span> Grosh will see you now.`
    let response = translator.process(test_string, toBrit)
    assert.equal(response, expected_string,'incorrect translation to British English');
  });
  // #10
  test("Translate Lunch is at 12:15 today.", function() {
    let test_string = `Lunch is at 12:15 today.`
    let expected_string = `Lunch is at <span class="highlight">12.15</span> today.`
    let response = translator.process(test_string, toBrit)
    assert.equal(response, expected_string,'incorrect translation to British English');
  });
  // #11
  test("Translate We watched the footie match for a while.", function() {
    let test_string = `We watched the footie match for a while.`
    let expected_string = `We watched the <span class="highlight">soccer</span> match for a while.`
    let response = translator.process(test_string, toAmer)
    assert.equal(response, expected_string,'incorrect translation to American English');
  });
  // #12
  test("Translate Paracetamol takes up to an hour to work.", function() {
    let test_string = `Paracetamol takes up to an hour to work.`
    let expected_string = `<span class="highlight">Tylenol</span> takes up to an hour to work.`
    let response = translator.process(test_string, toAmer)
    assert.equal(response, expected_string,'incorrect translation to American English');
  });
  // #13
  test("Translate First, caramelise the onions. ", function() {
    let test_string = `First, caramelise the onions.`
    let expected_string = `First, <span class="highlight">caramelize</span> the onions.`
    let response = translator.process(test_string, toAmer)
    assert.equal(response, expected_string,'incorrect translation to American English');
  });
  // #14
  test("Translate I spent the bank holiday at the funfair.", function() {
    let test_string = `I spent the bank holiday at the funfair.`
    let expected_string = `I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.`
    let response = translator.process(test_string, toAmer)
    assert.equal(response, expected_string,'incorrect translation to American English');
  });
  // #15
  test("Translate I had a bicky then went to the chippy.", function() {
    let test_string = `I had a bicky then went to the chippy.`
    let expected_string = `I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.`
    let response = translator.process(test_string, toAmer)
    assert.equal(response, expected_string,'incorrect translation to American English');
  });
  // #16
  test("Translate I've just got bits and bobs in my bum bag.", function() {
    let test_string = `I've just got bits and bobs in my bum bag.`
    let expected_string = `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`
    let response = translator.process(test_string, toAmer)
    assert.equal(response, expected_string,'incorrect translation to American English');
  });
  // #17
  test("Translate The car boot sale at Boxted Airfield was called off.", function() {
    let test_string = `The car boot sale at Boxted Airfield was called off.`
    let expected_string = `The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`
    let response = translator.process(test_string, toAmer)
    assert.equal(response, expected_string,'incorrect translation to American English');
  });
  // #18
  test("Translate Have you met Mrs Kalyani?", function() {
    let test_string = `Have you met Mrs Kalyani?`
    let expected_string = `Have you met <span class="highlight">Mrs.</span> Kalyani?`
    let response = translator.process(test_string, toAmer)
    assert.equal(response, expected_string,'incorrect translation to American English');
  });
  // #19
  test("Translate Prof Joyner of King's College, London.", function() {
    let test_string = `Prof Joyner of King's College, London.`
    let expected_string = `<span class="highlight">Prof.</span> Joyner of King's College, London.`
    let response = translator.process(test_string, toAmer)
    assert.equal(response, expected_string,'incorrect translation to American English');
  });
  // #20
  test("Translate Tea time is usually around 4 or 4.30.", function() {
    let test_string = `Tea time is usually around 4 or 4.30.`
    let expected_string = `Tea time is usually around 4 or <span class="highlight">4:30</span>.`
    let response = translator.process(test_string, toAmer)
    assert.equal(response, expected_string,'incorrect translation to American English');
  });
  // #21
  test("Highlight translation in Mangoes are my favorite fruit.", function() {
    let test_string = `Mangoes are my favorite fruit.`
    let expected_exists = `<span class="highlight">favourite</span>.`
    let response = translator.process(test_string, toBrit)
    assert.exists(expected_exists, response, 'translation should have highlight');
  });
  // #22
  test("Highlight translation in I ate yogurt for breakfast.", function() {
    let test_string = `I ate yogurt for breakfast.`
    let expected_exists = `<span class="highlight">yoghurt</span>.`
    let response = translator.process(test_string, toBrit)
    assert.exists(expected_exists, response, 'translation should have highlight');
  });
  // #23
  test("Highlight translation in We watched the footie match for a while.", function() {
    let test_string = `We watched the footie match for a while.`
    let expected_exists = `<span class="highlight">soccer</span>.`
    let response = translator.process(test_string, toBrit)
    assert.exists(expected_exists, response, 'translation should have highlight');
  });
  // #24
  test("Highlight translation in Paracetamol takes up to an hour to work.", function() {
    let test_string = `Paracetamol takes up to an hour to work.`
    let expected_exists = `<span class="highlight">Tylenol</span>.`
    let response = translator.process(test_string, toBrit)
    assert.exists(expected_exists, response, 'translation should have highlight');
  });
  
  
});
