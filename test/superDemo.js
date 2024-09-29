// Test: test.spec.js
const request = require('supertest'); // import supertest
// const chai = require('chai'); // import chai
// const expect = require('chai').expect; // import expect

// Test Suite
describe('Verify that the Get and POST API returns correctly', function(){
        // Test case 1
        it('Verify that the GET API returns correctly', function(done){
            request('https://reqres.in/api') // Test endpoint
                .get('/users?page=2') // API endpoint
                .expect(200) // expected response status code
                .expect(function (res) {
                    console.log(res);
                }) // expected response body
                .end(done) // end the test case

        });
        
});