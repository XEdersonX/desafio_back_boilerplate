import request from 'supertest'
import app from 'server'
import { DatabaseTest } from 'helpers'
import UserFactory from 'test/factories/users-factory'
import RoleFactory from 'test/factories/role-factory'
import VacancyFactory from 'test/factories/vacancies-factory'
import ApplicationFactory from 'test/factories/application-factory'
import CommentFactory from 'test/factories/comments-factory'

jest.mock('helpers/nodemailer')

describe('TEST COMMENT APPLICATION', () => {
  beforeEach(async () => {
    await DatabaseTest.createDB()
    global.server = app.listen()
    await RoleFactory()
    global.user = await UserFactory()
    global.vacancy = await VacancyFactory()
    global.application = await ApplicationFactory()
    global.vacancyUpdate = await VacancyFactory()
    global.comment = await CommentFactory(global.application.id, global.user.id)
  })

  afterEach(async () => {
    await DatabaseTest.destroyDB()
    global.server.close()
  })

  describe('POST /v1/comments', () => {
    test('should create a new comment', async () => {
      const response = await request(global.server)
        .post('/v1/comments')
        .set('Authorization', global.user.token)
        .send({
          application_id: global.application.id,
          user_id: global.user.id,
          description: 'comment teste'
        })
      expect(response.status).toEqual(200)
      expect(response.type).toEqual('application/json')
      expect(Object.keys(response.body)).toEqual(
        expect.arrayContaining([
          'id',
          'application_id',
          'user_id',
          'description'
        ])
      )
    })
  })

  describe('GET /v1/comments/application/:id', () => {
    test('should return a list of comment', async () => {
      const response = await request(global.server)
        .get(`/v1/comments/application/${global.application.id}`)
        .set('Authorization', global.user.token)
      expect(response.status).toEqual(200)
      expect(response.type).toEqual('application/json')
      expect(Object.keys(response.body[0])).toEqual(
        expect.arrayContaining([
          'id',
          'application_id',
          'user_id',
          'description'
        ])
      )
    })
  })

  describe('GET /v1/comments/:id', () => {
    test('should return a comment', async () => {
      const response = await request(global.server)
        .get(`/v1/comments/${global.comment.id}`)
        .set('Authorization', global.user.token)
      expect(response.status).toEqual(200)
      expect(response.type).toEqual('application/json')
      expect(Object.keys(response.body)).toEqual(
        expect.arrayContaining([
          'id',
          'application_id',
          'user_id',
          'description'
        ])
      )
    })
  })

  describe('PUT /v1/comments/:id', () => {
    test('should update a comment', async () => {
      const response = await request(global.server)
        .put(`/v1/comments/${global.comment.id}`)
        .set('Authorization', global.user.token)
        .send({
          application_id: global.application.id,
          user_id: global.user.id,
          description: 'comment teste Update'
        })

      expect(response.status).toEqual(200)
      expect(response.type).toEqual('application/json')
      expect(Object.keys(response.body)).toEqual(
        expect.arrayContaining([
          'id',
          'application_id',
          'user_id',
          'description'
        ])
      )
    })
  })

  describe('DELETE /v1/comments/:id', () => {
    test('should delete a comment', async () => {
      const response = await request(global.server)
        .delete(`/v1/comments/${global.comment.id}`)
        .set('Authorization', global.user.token)
      expect(response.status).toEqual(200)
      expect(response.type).toEqual('application/json')
      expect(Object.keys(response.body)).toEqual(
        expect.arrayContaining([
          'id',
          'application_id',
          'user_id',
          'description'
        ])
      )
    })
  })
})
