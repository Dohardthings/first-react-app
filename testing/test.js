var expect = require('chai').expect;
describe('Are elements visible', function() {
  describe('Visibility', function() {
    it('should show that all elements are visible with true', function() {
      browser.url('http://localhost:3000/');
      expect(browser.isVisible('#root > div > div > form > button')).to.be.true;
      expect(browser.isVisible('#root > div > div > form > input[type="text"]:nth-child(1)')).to.be.true;
    });
});

  describe('Navigation', function() {
      it('should go to adwords page when you click on advertisements', function() {
        browser.url('http://localhost:3000');
        browser.click('#root > div > header > ul > li:nth-child(2) > a');
        expect(browser.isVisible('#root > div > div > h2'));
        expect(browser.getUrl('http://localhost:3000/about'));
});
});


  });
