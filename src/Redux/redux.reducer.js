

const State = {
    user:null,
}




const LOGREDUCER = (state=State,action) => {
switch (action.type) {
  case "Log_in":
    return {
      ...state,
      user: action.payload,
    };

  default:
    return state
  }

}

export default LOGREDUCER;