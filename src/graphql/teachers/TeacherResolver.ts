import { ApolloError } from "apollo-server";
import { Arg, Ctx, ID, Mutation, Query, Resolver, FieldResolver, Root } from "type-graphql";
import { createTeacher, deleteTeacher, updateTeacher, getAllTeacher, getTeacherStudentId } from "../../services/teachers/teacherService";
import { StudentOutput } from "../students/StudentOuput";
import { CreateTeacherInput, UpdateTeacherInput } from "./TeacherInput";
import { TeacherOutput } from "./TeacherOutput";


@Resolver(()=> TeacherOutput)
export class Teacher {
    @Mutation(()=> Boolean, {
        description: "Create teacher"
    })
    async createTeacher(
        @Arg("data", () => CreateTeacherInput, { description: "Dados necessários para criar um professor" })
        data:CreateTeacherInput,//type-graphql
        @Ctx()
        context:any

    ) {
        try {
            if(context.group !== "admin") {
                throw new ApolloError ("não autorizado", "UNAUTHORIZED" )
            }
            await createTeacher(data)
            return true
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    @Mutation(()=> Boolean, {
        description: "Update student"
    })
    async updateTeacher(
        @Arg("data", () => UpdateTeacherInput, { description: "Update de um professor" })
        data:UpdateTeacherInput,
    ) {
        try {
            await updateTeacher( data )
            return true
        } catch (error) {
            console.log(error)
        }
         
        
    }
    @Mutation(()=> Number, {
        description: "Delete teacher"
    })
    async deleteTeacher(
        @Arg("id", () => ID, {
            description: "delete teacher"
        })
        id: number
        
    ) {
        try {
            return await deleteTeacher(id)
        } catch (error) {
            console.log(error)
        }
        
        
    }

  @Query(() => [TeacherOutput], {
      description: "todos professores"
  } )

  async getAllTeachers(teacherResult: any) {
      try {
        return await getAllTeacher(teacherResult);
      } catch (error) {
        console.log(error)
      }
   }
   @FieldResolver(() => [StudentOutput], {
    description: "estudantes",
    nullable: true
})
async estudantes(
    @Root()
    teacher: any
){
    const teacherId = teacher.id
    const result = getTeacherStudentId(teacherId);
    
    return result;
} 
}
