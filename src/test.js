var expect = require('chai').expect;
describe('Are elements visible', function() {
  describe('Visibility', function() {
    it('should show that all elements are visible with true', function() {
      browser.url('http://google.com');

      expect(browser.isVisible('#hplogo')).to.be.true;
      expect(browser.isVisible('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)')).to.be.true;
    });
});

//   describe('Navigation', function() {
//       it('should go to adwords page when you click on advertisements', function() {
//         browser.url('http://google.com');
//         browser.isVisible('#fsl > a:nth-child(1)');
//         browser.click('#fsl > a:nth-child(1)');
//
//         expect(browser.url('https://adwords.google.com/home/?sourceid=awo&subid=us-en-et-aw-a-ads_awhp_test_1-awhp!o2&utm_expid=95258301-49.oFNFLR2DTNCsJj-8r5-aaQ.2&fg=1&utm_referrer=https%3A%2F%2Fwww.google.com%2F#?modal_active=none')).to.be.true;
//
// });
// });


  });
