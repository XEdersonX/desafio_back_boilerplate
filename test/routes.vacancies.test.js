import request from 'supertest'
import app from 'server'
import { DatabaseTest } from 'helpers'
import UserFactory from 'test/factories/users-factory'
import RoleFactory from 'test/factories/role-factory'
import VacancyFactory from 'test/factories/vacancies-factory'

jest.mock('helpers/nodemailer')

describe('TEST VACANCIES', () => {
  beforeEach(async () => {
    await DatabaseTest.createDB()
    global.server = app.listen()
    await RoleFactory()
    global.user = await UserFactory()
    global.vacancy = await VacancyFactory()
  })

  afterEach(async () => {
    await DatabaseTest.destroyDB()
    global.server.close()
  })

  describe('POST /v1/vacancies', () => {
    test('should create a new vacancy', async () => {
      const response = await request(global.server)
        .post('/v1/vacancies')
        .set('Authorization', global.user.token)
        .send({
          title: 'Vaga para Desenvolvedor WEB',
          description: 'HTML, CSS, PHP.'
        })
      expect(response.status).toEqual(200)
      expect(response.type).toEqual('application/json')
      expect(Object.keys(response.body)).toEqual(
        expect.arrayContaining(['id', 'title', 'description'])
      )
    })
  })

  describe('GET /v1/vacancies', () => {
    test('should return a list of vacancies', async () => {
      const response = await request(global.server)
        .get('/v1/vacancies')
        .set('Authorization', global.user.token)
      expect(response.status).toEqual(200)
      expect(response.type).toEqual('application/json')
      expect(Object.keys(response.body[0])).toEqual(
        expect.arrayContaining(['id', 'title', 'description'])
      )
    })
  })

  describe('GET /v1/vacancies/:id', () => {
    test('should return a vacancy', async () => {
      const response = await request(global.server)
        .get(`/v1/vacancies/${global.vacancy.id}`)
        .set('Authorization', global.user.token)
      expect(response.status).toEqual(200)
      expect(response.type).toEqual('application/json')
      expect(Object.keys(response.body)).toEqual(
        expect.arrayContaining(['id', 'title', 'description'])
      )
    })
  })

  describe('PUT /v1/vacancies/:id', () => {
    test('should update a vacancy', async () => {
      const response = await request(global.server)
        .put(`/v1/vacancies/${global.vacancy.id}`)
        .set('Authorization', global.user.token)
        .send({
          title: 'Vaga para Desenvolvedor WEB UPDATE',
          description: 'HTML, CSS, PHP. UPDATE'
        })
      expect(response.status).toEqual(200)
      expect(response.type).toEqual('application/json')
      expect(Object.keys(response.body)).toEqual(
        expect.arrayContaining(['id', 'title', 'description'])
      )
    })
  })

  describe('DELETE /v1/vacancies/:id', () => {
    test('should delete a vacancy', async () => {
      const response = await request(global.server)
        .delete(`/v1/vacancies/${global.vacancy.id}`)
        .set('Authorization', global.user.token)
      expect(response.status).toEqual(200)
      expect(response.type).toEqual('application/json')
      expect(Object.keys(response.body)).toEqual(
        expect.arrayContaining(['id', 'title', 'description'])
      )
    })
  })
})
