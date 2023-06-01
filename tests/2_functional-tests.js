const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  // # 1 
  test('Translation with text and locale fields: POST request to /api/translate', function (done) {
    chai
      .request(server)
      .keepOpen()
      .post('/api/translate')
      .send({
        text : 'Mangoes are my favorite fruit.',
        locale : 'american-to-british'
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.','incorrect translation');
        done();
      });
  });
  // # 2 
  test('Translation with text and invalid locale field: POST request to /api/translate', function (done) {
    chai
      .request(server)
      .keepOpen()
      .post('/api/translate')
      .send({
        text : 'Mangoes are my favorite fruit.',
        locale : 'french-to-british'
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Invalid value for locale field','invalid locale field should prompt error');
        done();
      });
  });
  // # 3
  test('Translation with missing text field: POST request to /api/translate', function (done) {
      chai
        .request(server)
        .keepOpen()
        .post('/api/translate')
        .send({
          locale : 'american-to-british'
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, 'Required field(s) missing','missing text field should prompt error');
          done();
        });
  });
  // # 4
  test('Translation with missing locale field: POST request to /api/translate', function (done) {
      chai
        .request(server)
        .keepOpen()
        .post('/api/translate')
        .send({
          text : 'Mangoes are my favorite fruit.'
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, 'Required field(s) missing','missing locale field should prompt error');
          done();
        });
  });
  // # 5
  test('Translation with empty text: POST request to /api/translate', function (done) {
      chai
        .request(server)
        .keepOpen()
        .post('/api/translate')
        .send({
          text : '',
          locale : 'american-to-british'
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, 'No text to translate', 'empty text field should prompt error');
          done();
        });
  });
  // # 6
  test('Translation with text that needs no translation: POST request to /api/translate', function (done) {
      chai
        .request(server)
        .keepOpen()
        .post('/api/translate')
        .send({
          text : "Prof Joyner of King's College, London.",
          locale : 'american-to-british'
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.translation, 'Everything looks good to me!', 'text no need translation should prompt "Everything looks good to me!"');
          done();
        });
  });

  
});
