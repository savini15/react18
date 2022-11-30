 export default function reducer(prevState = {count:0},action ={}){
    let newState = {...prevState}
    switch(action.type){
        case 'add':
             newState.count++;
             return newState
             case 'min':
                 newState.count--;
                 return newState
        default:
            return prevState

    }
 }