import { Field, ID, InputType } from "type-graphql";
import { CreateTeacherInput } from "../teachers/TeacherInput";
import { StateEnum } from "./StudentsEnum";


@InputType()
export class CreateStudentInput  {
    @Field()
    nameStudent: String

    @Field(()=> StateEnum)
    state: StateEnum

    @Field(() => CreateTeacherInput, {
        description: " teachers"
    })
    teachers: []
    @Field (()=> String, {
        description: "aniversario"
    })
    bithday: string
}
@InputType()

export class UpdateStudentTeacherInput {

    @Field(() => ID!, { description: "Id do professor"})

    teacherId: number 

}

@InputType()
export class UpdateStudentInput   {
    @Field( () => ID,{description: 'id do estudante'} )
    id: number 
    @Field()
    nameStudent: String

    @Field(()=> StateEnum)
    state: StateEnum
    
    @Field(() => [UpdateStudentTeacherInput], {
        description: " teachers"
    })
    teachers: UpdateStudentTeacherInput[]  

    @Field (()=> String, {
        description: "aniversario"
    })
    bithday: string

}


