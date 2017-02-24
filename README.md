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