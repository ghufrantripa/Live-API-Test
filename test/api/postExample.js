const request = require('supertest')
const baseUrl = require('../../env')

describe('Post Request Example', () => {
    it('Success create user', async () => {
        const response = request (baseUrl())
        .post('/user')
        .send({
            "id": 123,
            "username": "hahayy",
            "firstName": "hahayy",
            "lastName": "hayyuk",
            "email": "hahay@mail.sac.com",
            "password": "hahayy123",
            "phone": "09785463",
            "userStatus": 1
          })
        console.log((await response).status)
        console.log((await response).body)
    })
})