let initState = {count:0}

export default function reducer(prevState=initState,action={}){
    let newState = {...prevState}
    switch(action.type){
        case 'add':
            newState.count++
        return newState

        default:
            return prevState
    }
}