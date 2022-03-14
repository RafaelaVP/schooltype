const models = require ('../../models')

const createTeacher = async (data) => {
    await models.teacher.create(data)
    return true
}
const getAllTeacher = async (teacherResult) => {
    teacherResult = {include: { model: models.student, as: 'students' }}
   return await models.teacher.findAll(teacherResult) 
}
const updateTeacher = async (data) => {
    await models.teacher.update(data, {where: {id:data.id}})
    return true
}
const deleteTeacher = async (id) => {
    return await models.teacher.destroy({where: {id}}) 
}

const getTeacherStudentId = async (teacherId) => {
    const studentsTeachers =  await models.studentteacher.findAll({
        where: {
            teacherId
        }
    })
    const studentsIds = studentsTeachers.map(s => s.studentId)
    const students = await models.student.findAll({
        where: {
            id: studentsIds
        }
    })
    console.log(students)
    return students
}

module.exports = {createTeacher, getAllTeacher, deleteTeacher, updateTeacher,getTeacherStudentId };