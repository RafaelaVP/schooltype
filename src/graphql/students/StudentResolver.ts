import { Arg, Ctx, FieldResolver, ID, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { LACK_OF_PERMISSION } from "../../errors/LackofPermission";
import { NotFound } from "../../errors/NotFound";
import {createStudent, deleteStudent, getAllStudent, getOneStudent, getTeachersBystudentId, updateStudent} from '../../services/students/studentsService'
import { TeacherOutput } from "../teachers/TeacherOutput";
import { CreateStudentInput, UpdateStudentInput } from "./StudentInput";
import {  StudentOutput } from "./StudentOuput";

@Resolver(() => StudentOutput)
export class Student {
    @Mutation(()=> Boolean, {
        description: "Create student"
    })
    async createStudent(
        @Arg("data", () => CreateStudentInput, { description: "Dados necessários para criar um estudante" })
        data:CreateStudentInput,//type-graphql
        @Ctx()
        context:any

    ) {
        try {
            if(context.group !== "admin") {
                throw new LACK_OF_PERMISSION({LACK_OF_PERMISSION})
            }
            await createStudent(data)
            return true
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    @Mutation(()=> Boolean, {
        description: "Update student"
    })
    async updateStudent(
        @Arg("data", () => UpdateStudentInput, { description: "Update de um estudante" })
        data:UpdateStudentInput,
    ) {
        try {
            await updateStudent( data )
            return true
        } catch (error) {
            console.log(error)
        }
         
        
    }
    @Mutation(()=> Number, {
        description: "Delete student"
    })
    async deleteStudent(
        @Arg("id", () => ID, {
            description: "delete student"
        })
        id: number
        
    ) {
        try {
            if (!id) throw new NotFound(id)
            return await deleteStudent(id)
        } catch (error) {
            console.log(error)
        }
        
        
    }

  @Query(() => [StudentOutput], {
      description: "todos estudantes"
  } )

  async getAllStudents(studentResult: any) {
      try {
        const result =  await getAllStudent(studentResult)
        return result
      } catch (error) {
        console.log(error)
      }
  }
  @Query(() => StudentOutput, {
    description: "Apenas um"
} )

async getOneStudents(id:any) {
    try {
      const result =  await getOneStudent(id)
      return result
    } catch (error) {
      console.log(error)
    }
}

 @FieldResolver(() => Int, {
     description: "idade do aluno",
     nullable: true
 })
 async age(
     @Root()
     student: any
 ){
     const bithday = student.bithday
     const age = bithday ? new Date().getFullYear() - parseInt(bithday.split("/")[2]) : null
     return age
 }
 @FieldResolver(() => [TeacherOutput], {
    description: "professores",
    nullable: true
})
async professores(
    @Root()
    student: any
){
    const studentId = student.id
    const result = getTeachersBystudentId(studentId)
    
    return result;
}
}

