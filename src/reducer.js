const reducer = (state, {type, payload}) => {
  switch(type) {
    case 'login':
      return {...state, ...payload }
  }
}

export default reducer