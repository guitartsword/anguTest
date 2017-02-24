# anguTest
Step by Step guide to make unit test in angular with karma, mocha and chai

#Package Installations
Install karma, this let you run test on multiple browsers/platforms
Install karma-mocha, this let karma understand mocha testing framework	
Install mocha-chai, this let karma understand chai assertion library
Install mocha, our testing framework that run tests and tell us if they fail
Install chai, BDD (Behavior Driven Development) assertion, more readable and intuitive

code for doing all the above
```
npm install karma karma-mocha karma-chai karma-chrome-launcher --save-dev
```
Install karma-cli (command line interface) to use only karma in the terminal without typing ```./node_modules/karma/bin/karma```, remember you must be admin or super user (sudo for debian) for global installations:
```
npm install -g karma-cli
```

#Create Karma config file

You can use the ``` karma init ``` to genereate tha config file
or you can do it by hand with:

```
//karma.conf.js file
module.exports = function(config) {
    config.set({

        basePath: '',

        frameworks: ['mocha', 'chai'],

        files: [
                '**/*.spec.js'
        ],

        reporters: ['progress'], 
        port: 9876, 
        colors: true,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: true

    });
};
```
# Creating Tests

As you can see on the code snippet above, all the test files must contain ```.spec.js``` at the end
You can use whatever you want like ```.utest.js``` but for this guide I will use spec :)

## Create the file
Lets create a file:
``` touch test.spec.js ```
Now lets write the test for our new file
```
console.log("Running tests");
describe("This test", function() {
    it('should fail', function() {
        expect(true).to.be.false;
    });
});
```
## Running the tests

simply type:
```karam start```
or write this on your ````package.json ```:
```
{
  ...
  "scripts": {
    "test": "karma start"
  },
  ...
}
```