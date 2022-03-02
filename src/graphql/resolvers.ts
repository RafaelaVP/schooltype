import { Query, Resolver } from 'type-graphql';

@Resolver()
export class AResolver {
    @Query ( {
        description: "retorna hello world",
    
    }
    )
    function helloWorld () {
        return "Hello world!"
    }
    

}





