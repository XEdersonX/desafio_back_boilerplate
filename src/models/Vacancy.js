import { baseModel, modelUuid } from './index'
class Vacancy extends modelUuid(baseModel) {
  static get tableName() {
    return 'vacancies'
  }
}

export default Vacancy
