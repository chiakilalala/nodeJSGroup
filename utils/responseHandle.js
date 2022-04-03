const { headers } = require('../config')

/**
 * ((���\)) �T���\��
 * @date 2022-04-04
 * @param {object} {res �ШD����
 * @param {string} status='Success' �T�����A
 * @param {number} statusCode=200 ���A�X
 * @param {string} message='�ާ@���\' �H��
 * @param {Array} data} ��Ʈw
 */
const successHandle = ({
  res,
  status = 'Success',
  statusCode = 200,
  message = '�ާ@���\',
  data
}) => {
  res.writeHead(statusCode, headers)
  res.end(JSON.stringify({
    status,
    message,
    data
  }))
}

/**
 * ((����)) �T���\��
 * @date 2022-04-04
 * @param {object} {res �ШD����
 * @param {string} status='Success' �T�����A
 * @param {number} statusCode=200 ���A�X
 * @param {string} message='�ާ@���\' �H��
 * @param {Array} data} ��Ʈw
 */
const errorHandle = ({
  res,
  status = 'Fail',
  statusCode = 400,
  message = '�ާ@����',
  data
}) => {
  res.writeHead(statusCode, headers)
  res.end(JSON.stringify({
    status,
    message,
    data
  }))
}

module.exports = {
  successHandle,
  errorHandle,
}