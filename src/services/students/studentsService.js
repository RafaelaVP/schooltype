const { NotFound } = require('../../errors/NotFound')
const models = require ('../../models')

const createStudent = async (data) => {
    await models.student.create(data, {include:{model:models.teacher, as:'teachers'}})
    return true
}
const getAllStudent = async (studentResult) => {
    studentResult = {include: { model: models.teacher, as: 'teachers' }}
   
   return await models.student.findAll(studentResult) 
}
const getOneStudent = async (id) => {
   return await models.student.findByPk(id) 
}
const updateStudent = async (data) => {
    await models.student.update(data, {where: {id:data.id}})
    const studentId = data.id
    if (!studentId) throw new NotFound(studentId)
    for (const teacher of data.teachers) {
        teacher.studentId = studentId
    }
    await models.studentteacher.bulkCreate(data.teachers)
    return true
}

const deleteStudent = async (id) => {
    return await models.student.destroy({where: {id}}) 
}

const getTeachersBystudentId = async (studentId) => {
    const studentsTeachers =  await models.studentteacher.findAll({
        where: {
            studentId
        }
    })
    const teacherIds = studentsTeachers.map(s => s.teacherId)
    const teachers = await models.teacher.findAll({
        where: {
            id: teacherIds
        }
    })
    console.log(teachers)
    return teachers
}

module.exports = {createStudent, getAllStudent, deleteStudent, updateStudent, getOneStudent, getTeachersBystudentId };