# README #

### Steps ###
## Run Scripts ##
>
* npm install //install dependencies
* npm run build //make a build files
* npm run test-unit //run unit test files using jest 
* npm run demo //open demo html page in the browser

## Assignment Solution Explaination ##
* Simplified carousel using plain javascript implementation.
* I've chosen to setup build scripts using gulp to generate minified js file to be able to include it in   a template html file.
* writing a javascript carousel within short time is a nice challange, had to think simple and focused.
* The implemention is functions based not a single web page app, responsive and simple:

* First it place all the divs/images one above the other.
  The function moveRight() places the previous element of active element at the center and uses transform on x-axis. Similarly for moveLeft() when left arrow is clicked.

* I added Unit test under /test using JEST to test DOM manipulation of the carousel<br/>
note: i've added a second version of the carousel using module.exports to be able to import it to the test.

## What I would like to improve on the implemention ##
 * 1. add better build setup to make it as library 
 * 2. replace css by scss 
 * 3. make carousel as a class
 * 4. add config setup for the carousel.

## another branch without JavaScript implementation##
 https://github.com/AhmadKabakibi/carousel/tree/second_version_without_JavaScript