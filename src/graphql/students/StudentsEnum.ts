import { registerEnumType } from "type-graphql";

export enum StateEnum {
    SP = "São Paulo",
    RJ = "Rio de Janeiro"
}
registerEnumType(StateEnum, {
    name: "StateEnum",
    description: "Estados permitidos para um estudante"
})