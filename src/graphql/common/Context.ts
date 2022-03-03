export const Context = ({req}:{req:any}) => {
    const group = req.headers.authorization
    const fruta = "banana"
    return {group, fruta}
}
