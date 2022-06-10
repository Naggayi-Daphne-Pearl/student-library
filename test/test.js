const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

describe('/GET ', () => {
    it('it should GET all taken books', (done) => {
        chai.request('localhost:4000')
            .get('/taken')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});