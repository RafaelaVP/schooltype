import { Field, ID, ObjectType } from 'type-graphql';
import { TeacherOutput } from '../teachers/TeacherOutput';



@ObjectType({
    description: "lista de campos da tabela de estudante"
})
export class StudentOutput {
    @Field({
        description: "nome do estudante"
    })
    nameStudent: string
    
    @Field( () => ID, {
        description:"id estudante"
    })
    id: number

    @Field(() => [TeacherOutput], {
        description: "students and teachers"
    })
    teachers: []

    @Field (()=> String, {
        description: "aniversario",
        nullable: true

    })
    bithday: string
}



