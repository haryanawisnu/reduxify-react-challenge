import axios from 'axios';
export const SET_HERO = 'SET_HERO'
export const SEED_HERO = 'SEED_HERO'

export function sethero(index) {
  return { type: SET_HERO, index }
}
export function setheroSuccess(value) {
  return { type: SEED_HERO, value }
}
export function seedhero() {
  return dispatch=>{
    return axios.get('http://api.herostats.io/heroes/all')
    .then(function (response) {
      let arr=[];
      for (var i = 1; i <= 10; i++) {
      arr.push(response.data[i]);
      }
      dispatch(setheroSuccess(arr))
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
