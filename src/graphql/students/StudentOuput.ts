import { Field, ID, ObjectType } from 'type-graphql';

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
}