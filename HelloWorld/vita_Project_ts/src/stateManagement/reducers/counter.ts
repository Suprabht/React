const counterReducer = (state =0, action: any) => {
    switch(action.type){
        case 'INCREMENT':
            return state + action.payLoad
        case 'DECREMENT':
            return state - action.payLoad
        default:
            return state
    }
}
export default counterReducer;