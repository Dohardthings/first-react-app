var expect = require('chai').expect;
describe('Are elements visible', function() {
  describe('Visibility', function() {
    it('should show that all elements are visible with true', function() {
      browser.url('http://localhost:3000/');
      //Fill in Input for Name
      browser.element('//*[@id="root"]/div/div/form/input[1]').setValue('Angie McAngular');
      //Fill in Input for Subject
      browser.element('//*[@id="root"]/div/div/form/input[2]').setValue('Angular');
      //Click on Submit button
      browser.click('#root > div > div > form > button');
      //Check Resulting Url is course-directory
      expect(browser.getUrl('http://localhost:3000/teachers/Angular/Angie%20McAngular'));

    });
});



  });
