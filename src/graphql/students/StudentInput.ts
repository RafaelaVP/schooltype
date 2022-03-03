import { Field, ID, InputType } from "type-graphql";
import { StateEnum } from "./StudentsEnum";


@InputType()
export class CreateStudentInput  {
    @Field()
    nameStudent: String

    @Field(()=> StateEnum)
    state: StateEnum
}

@InputType()
export class UpdateAndDeleteStudentInput extends CreateStudentInput  {
    @Field( () => ID, )
    id: number   
}

