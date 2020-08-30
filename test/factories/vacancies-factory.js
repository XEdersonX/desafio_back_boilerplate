import Vacancy from 'models/Vacancy'

import { stringGenerator } from 'helpers'

const vacancyFactory = async () => {
  const vacancy = await Vacancy.query().insert({
    title: stringGenerator(),
    description: stringGenerator()
  })

  const parsedVacancy = vacancy.toJSON()

  return parsedVacancy
}

export default vacancyFactory
