const models = require ('../../models')

const createStudent = async (data) => {
    await models.student.create(data)
    return true
}
const getAllStudent = async () => {
   return await models.student.findAll() 
}
const updateStudent = async (data) => {
    await models.student.update(data, {where: {id:data.id}})
    return true
}
const deleteStudent = async (id) => {
    return await models.student.destroy({where: {id}}) 
}

module.exports = {createStudent, getAllStudent, deleteStudent, updateStudent };