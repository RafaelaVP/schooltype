import { Query, Resolver } from 'type-graphql';

@Resolver()
export class AResolver {
    @Query (() => String, {
        description: "retorna hello world",
    
    }
    )
   helloWorld () {
        return "Hello world!"
    }
    
}





