const { successHandle, errorHandle } = require('../utils/responseHandle')
const DB = require('../db')
const { filterReqId } = require('../utils')

const deleteList = (res) => {
  DB.length = 0

  successHandle({
    res,
    message: '�R���C���\',
    data: DB
  })
}

const deleteItem = (req, res) => {
  const id = filterReqId(req)
  const deleteItemIndex = DB.findIndex(item => item.id === id)

  if (deleteItemIndex < 0) return errorHandle({
    res,
    message: '��ƿ��~ or ���s�b�� id ���'
  })

  DB.splice(deleteItemIndex, 1)
  successHandle({
    res,
    message: '�R�����ئ��\',
    data: DB
  })
}

module.exports = {
  deleteList,
  deleteItem,
}