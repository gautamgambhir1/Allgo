export default function reducer(state = {},action){
    switch(action.type){
      case "INFO":
          return {...state,userdetail:action.payload}



        default:
            return state
    }
}