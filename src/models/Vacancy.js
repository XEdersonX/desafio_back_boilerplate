import { baseModel } from './index'
class Vacancy extends baseModel {
  static get tableName() {
    return 'vacancies'
  }
}

export default Vacancy
