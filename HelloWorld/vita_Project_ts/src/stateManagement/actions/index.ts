export const increment = (no:any) => {
    return{
        type:'INCREMENT',
        payLoad: no
    }
}

export const decrement = (no:any) => {
    return{
        type:'DECREMENT',
        payLoad: no
    }
}