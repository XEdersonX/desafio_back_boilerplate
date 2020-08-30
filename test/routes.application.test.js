import request from 'supertest'
import app from 'server'
import { DatabaseTest } from 'helpers'
import UserFactory from 'test/factories/users-factory'
import RoleFactory from 'test/factories/role-factory'
import VacancyFactory from 'test/factories/vacancies-factory'
import ApplicationFactory from 'test/factories/application-factory'

jest.mock('helpers/nodemailer')

describe('TEST APPLICATION', () => {
  //beforeAll(() => {
  //  console.log(global.test)
  //})

  beforeEach(async () => {
    await DatabaseTest.createDB()
    global.server = app.listen()
    await RoleFactory()
    global.user = await UserFactory()
    global.vacancy = await VacancyFactory()
    global.application = await ApplicationFactory()
    global.vacancyUpdate = await VacancyFactory()
  })

  afterEach(async () => {
    await DatabaseTest.destroyDB()
    global.server.close()
  })

  describe('POST /v1/application', () => {
    test('should create a new application', async () => {
      const response = await request(global.server)
        .post('/v1/application')
        .set('Authorization', global.user.token)
        .send({
          user_id: global.user.id,
          vacancy_id: global.vacancy.id
        })
      expect(response.status).toEqual(200)
      expect(response.type).toEqual('application/json')
      expect(Object.keys(response.body)).toEqual(
        expect.arrayContaining(['id', 'user_id', 'vacancy_id'])
      )
    })
  })

  describe('GET /v1/application', () => {
    test('should return a list of application', async () => {
      const response = await request(global.server)
        .get('/v1/application')
        .set('Authorization', global.user.token)
      expect(response.status).toEqual(200)
      expect(response.type).toEqual('application/json')
      expect(Object.keys(response.body[0])).toEqual(
        expect.arrayContaining(['id', 'user_id', 'vacancy_id'])
      )
    })
  })

  describe('GET /v1/application/user/:id', () => {
    test('should return a application by user', async () => {
      const response = await request(global.server)
        .get(`/v1/application/user/${global.user.id}`)
        .set('Authorization', global.user.token)
      expect(response.status).toEqual(200)
      expect(response.type).toEqual('application/json')
      expect(Object.keys(response.body[0])).toEqual(
        expect.arrayContaining(['id', 'user_id', 'vacancy_id'])
      )
    })
  })

  describe('GET /v1/application/:id', () => {
    test('should return a application', async () => {
      const response = await request(global.server)
        .get(`/v1/application/${global.application.id}`)
        .set('Authorization', global.user.token)
      expect(response.status).toEqual(200)
      expect(response.type).toEqual('application/json')
      expect(Object.keys(response.body)).toEqual(
        expect.arrayContaining(['id', 'user_id', 'vacancy_id'])
      )
    })
  })

  describe('PUT /v1/application/:id', () => {
    test('should update a application', async () => {
      const response = await request(global.server)
        .put(`/v1/application/${global.application.id}`)
        .set('Authorization', global.user.token)
        .send({
          user_id: global.user.id,
          vacancy_id: global.vacancyUpdate.id
        })
      expect(response.status).toEqual(200)
      expect(response.type).toEqual('application/json')
      expect(Object.keys(response.body)).toEqual(
        expect.arrayContaining(['id', 'user_id', 'vacancy_id'])
      )
    })
  })

  describe('DELETE /v1/application/:id', () => {
    test('should delete a application', async () => {
      const response = await request(global.server)
        .delete(`/v1/application/${global.application.id}`)
        .set('Authorization', global.user.token)
      expect(response.status).toEqual(200)
      expect(response.type).toEqual('application/json')
      expect(Object.keys(response.body)).toEqual(
        expect.arrayContaining(['id', 'user_id', 'vacancy_id'])
      )
    })
  })
})
