export class Topic {
  constructor(data = {}) {
    this.id = data.id || data._id || 'placeholder id'
    this.body = data.body || 'test body'
    this.createdAt = data.createdAt || 'creation date unkown'
  }
}
