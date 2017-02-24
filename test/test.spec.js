// flickr-fetcher-spec.js
//'use strict';
var expect = require('chai').expect;

describe('sorting list of users with angular', function() {
    it('should sort in descending order by default', function() {
        var users = ['jack', 'igor', 'jeff'];
	    var sorted = sortUsers(users);
	    expect(sorted).to.deep.equal(['jeff', 'jack', 'igor']);
    });
});

describe('This test', function() {
    it('should...', function() {
	    expect(false).to.equal(false);
	    expect(true).to.be.true;
    });
    
});