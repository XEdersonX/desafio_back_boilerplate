import Router from 'koa-router'

import VacancyController from 'controllers/vacancies-controller'
import VacancyValidate from 'validators/vacancies-schema'

const router = new Router()

router.get('/vacancies', VacancyController.index)

router.post('/vacancies', VacancyValidate.create(), VacancyController.create)

router.get('/vacancies/:id', VacancyController.show)
router.put('/vacancies/:id', VacancyValidate.update(), VacancyController.update)

router.delete('/vacancies/:id', VacancyController.destroy)

export default router.routes()
