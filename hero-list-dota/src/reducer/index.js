import { SET_HERO,SEED_HERO } from '../action'

const initialState = {
  id: '',
  name:'',
  range:0,
  list_hero: [],
  index:''
}

function Hero(state = initialState, action) {
  switch (action.type) {
    case SET_HERO:
      return  Object.assign({}, state, {index: action.type})
    case SEED_HERO:
      return Object.assign({}, state, {list_hero: action.value})
    default:
      return state
  }
}

export default Hero
