const initialData = {
    counter:0
}

export const reducerCounter = (state = initialData, action) => {
    switch(action.type){
        case 'ADD':
            return{
                ...state,
                counter:action.data + 1
            }
        case 'SUBSTRACT':
            if(action.data > 0){
                return{
                    ...state,
                    counter:action.data -1
                }
            }
            return state;

        default:
            return state;
    }
}