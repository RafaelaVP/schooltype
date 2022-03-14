import { Field, ID, InputType } from "type-graphql";


@InputType()
export class CreateTeacherInput  {
    @Field()
    nameTeacher: String

    @Field()
    discipline: String
}

@InputType()
export class UpdateTeacherInput extends CreateTeacherInput  {
    @Field( () => ID, )
    id: number   
}