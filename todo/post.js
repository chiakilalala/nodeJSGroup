const { requestBodyBufferHandle } = require('../utils')
const { v4: uuid } = require('uuid')
const DB = require('../db')

const {
  successHandle,
  errorHandle,
} = require('../utils/responseHandle')

const postItem = async (req, res) => {
  try {
    const { content } = await requestBodyBufferHandle(req)

    DB.push({
      id: uuid(),
      content
    })
    successHandle({
      res,
      statusCode: 201,
      message: '�s�W���\',
      data: DB
    })
  } catch {
    errorHandle({
      res,
      message: '��Ʈ榡���~!'
    })
  }
}

module.exports = {
  postItem
} 