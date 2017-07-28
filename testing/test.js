var expect = require('chai').expect;
describe('Are elements visible', function() {
  describe('Visibility', function() {
    it('should show that all elements are visible with true', function() {
      browser.url('http://google.com');
      browser.isVisible('#hplogo');
      browser.isVisible('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)');
      expect(browser.isVisible('#hplogo')).to.be.true;
      expect(browser.isVisible('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)')).to.be.true;
    });
});

  describe('Navigation', function() {
      it('should go to adwords page when you click on advertisements', function() {
        browser.url('http://google.com');
        browser.isVisible('#fsl > a:nth-child(1)');
        browser.click('#fsl > a:nth-child(1)');

        expect(browser.isVisible('body > header > nav > div > a'));
        expect(browser.getUrl('https://www.google.com/intl/en/ads/?fg=1'));
});
});


  });
