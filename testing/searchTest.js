var expect = require('chai').expect;
describe('Are elements visible', function() {
  describe('Visibility', function() {
    it('should show correct page when searching for teacher', function() {
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

    it('should show correct page when searching for teacher', function() {
      browser.url('http://localhost:3000/');
      //Fill in Input for Name
      browser.element('//*[@id="root"]/div/div/form/input[1]').setValue('NodeStradamus');
      //Fill in Input for Subject
      browser.element('//*[@id="root"]/div/div/form/input[2]').setValue('Node');
      //Click on Submit button
      browser.click('#root > div > div > form > button');
      //Check Resulting Url is course-directory
      expect(browser.getUrl('http://localhost:3000/teachers/Node/NodeStradamus'));

    });


    it('should show not found page if name left blank', function() {
      browser.url('http://localhost:3000/');
      //Fill in Input for Name
      browser.element('//*[@id="root"]/div/div/form/input[1]').setValue('');
      //Fill in Input for Subject
      browser.element('//*[@id="root"]/div/div/form/input[2]').setValue('Node');
      //Click on Submit button
      browser.click('#root > div > div > form > button');
      //Check That Resulting Page is the "Page Not Found" component
      expect(browser.isVisible('not-found'));
      //Check Resulting Url is course-directory
      expect(browser.getUrl('http://localhost:3000/teachers/Node/'));

    });


    it('should show not found page if topic left blank', function() {
      browser.url('http://localhost:3000/');
      //Fill in Input for Name
      browser.element('//*[@id="root"]/div/div/form/input[1]').setValue('NodeStradamus');
      //Fill in Input for Subject
      browser.element('//*[@id="root"]/div/div/form/input[2]').setValue('');
      //Click on Submit button
      browser.click('#root > div > div > form > button');
      //Check That Resulting Page has the "Not-Found" selector
      expect(browser.isVisible('not-found'));
      //Check Resulting Url is course-directory
      expect(browser.getUrl('http://localhost:3000/teachers//NodeStradamus'));

    });



});



  });
