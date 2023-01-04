const assert = require('chai').assert;
const app = require('../../assert');

//Definisi assert 
//Cara assert menggunakan chai
describe('Welcome Test', function(){
    //Assert tulisan sesuai ekspektasi
    it('app should return welcome message', function(){
        assert.equal(app(), "welcome to QA course at mySkill")
    })
})