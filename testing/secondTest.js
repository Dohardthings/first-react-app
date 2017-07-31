var expect = require('chai').expect;
describe('Are elements visible', function() {
  describe('Visibility', function() {
    it('should show that all elements are visible with true', function() {
      browser.url('http://localhost:3000/about');
      expect(browser.isVisible('#root > div > div > h2')).to.be.true;
      expect(browser.isVisible('#root > div > div > p')).to.be.true;
    });
});

  describe('Navigation', function() {
      it('should go to teachers page when link clicked, and also courses page when that link clicked', function() {
        browser.click('#root > div > header > ul > li:nth-child(3) > a');
        expect(browser.getUrl('http://localhost:3000/teachers'));
        browser.click('#root > div > header > ul > li:nth-child(4) > a');
        expect(browser.getUrl('http://localhost:3000/courses'));

});
});


  });
