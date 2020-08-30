import Application from 'models/Application'

import UserFactory from './users-factory'
import VacancyFactory from './vacancies-factory'

const applicationFactory = async () => {
  global.user = await UserFactory()
  global.vacancy = await VacancyFactory()

  const application = await Application.query().insert({
    user_id: global.user.id,
    vacancy_id: global.vacancy.id
  })

  const parsedApplication = application.toJSON()

  return parsedApplication
}

export default applicationFactory
