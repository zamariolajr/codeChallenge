import axios from 'axios'
export const SHOW_CAT = 'SHOW_CAT'

export function showCat(){

  return (dispatch, getState) => {

    axios.get('https://api.chucknorris.io/jokes/categories')
      .then((response) => {
        dispatch( { type: SHOW_CAT, payload: response.data } )
      })  

  }


}