const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
    // beforeEach(async () => { // Outra forma de fazer, resetando o banco de dados a cada teste.
    //     await connection.migrate.rollback()
    //     await connection.migrate.latest()
    // })

    beforeAll(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })
    
    afterAll(async () => {
        await connection.destroy()
    })

    it('should be able to create a new ONG', async () => {
        const res = await request(app)
            .post('/ongs')
            .send({
                name: "APAD2", 
                email: "contato@apad.com.br", 
                whatsapp: "2711112222", 
                city: "Rio do Sul", 
                uf: "SC"
            })

        expect(res.body).toHaveProperty('id')
        expect(res.body.id).toHaveLength(8)
    })

    it('should be able to get all ongs', async () => {
        const res = await request(app)
            .get('/ongs')

        expect(res.body).toHaveLength(1)
        expect(res.body[0]).toHaveProperty('id')
        expect(res.body[0]).toHaveProperty('name')
        expect(res.body[0]).toHaveProperty('email')
        expect(res.body[0]).toHaveProperty('whatsapp')
        expect(res.body[0]).toHaveProperty('city')
        expect(res.body[0]).toHaveProperty('uf')
    })
})
