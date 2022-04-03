const { successHandle, errorHandle } = require('../utils/responseHandle')
const DB = require('../db')

/**
 * ���o�C��
 * @date 2022-04-04
 * @param {object} res �T������
 * @returns {object} �T�����e
 */
const getList = (res) => successHandle({
  res,
  message: '���\���o�C��',
  data: DB
})

/**
 * CORS preflight
 * @date 2022-04-04
 * @param {object} res �T������
 * @returns {object} �T�����e
 */
const options = (res) => res.writeHead(200, headers)

/**
 * 404 not found �������s�b
 * @date 2022-04-04
 * @param {object} res �T������
 * @returns {object} �T�����e
 */
const notFound = (res) => errorHandle({
  res,
  statusCode: 404,
  message: '�������s�b',
})

module.exports = {
  options,
  notFound,
  getList,
}