import { Field, ID, ObjectType } from 'type-graphql';
import { StudentOutput } from '../students/StudentOuput';

@ObjectType({
    description: "lista de campos da tabela professor"
})
export class TeacherOutput {
    @Field({
        description: "nome do professor"
    })
    nameTeacher: string
    @Field({
        description: "disciplina do professor"
    })
    discipline: string
    
    @Field( () => ID, {
        description:"id professor"
    })
    id: number

    @Field(() => [StudentOutput], {
        description: "students and teachers"
    })
    students: []
}