import { ApolloError } from "apollo-server";
import { Arg, Ctx, ID, Mutation, Query, Resolver } from "type-graphql";
import {createStudent, deleteStudent, getAllStudent, updateStudent} from '../../services/students/studentsService'
import { CreateStudentInput, UpdateAndDeleteStudentInput } from "./StudentInput";
import { StudentOutput } from "./StudentOuput";

@Resolver()
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
                throw new ApolloError ("não autorizado", "UNAUTHORIZED" )
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
        @Arg("data", () => UpdateAndDeleteStudentInput, { description: "Update de um estudante" })
        data:UpdateAndDeleteStudentInput,
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
            return await deleteStudent(id)
        } catch (error) {
            console.log(error)
        }
        
        
    }

  @Query(() => [StudentOutput], {
      description: "todos estudantes"
  } )

  async getAllStudents() {
      try {
        return await getAllStudent()
      } catch (error) {
        console.log(error)
      }
    
  }
}

