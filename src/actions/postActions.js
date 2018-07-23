import {FETCH_POSTS, NEW_POST} from './types'
import axios from 'axios'

export const fetchPosts = () => dispatch => {
    
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
        dispatch({type: FETCH_POSTS, payloads: res.data});
      });
    
  }
  export const createPost = postData => dispatch => {
    
     axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: JSON.stringify(postData),
            config: { headers: {'Content-Type': 'application/json' }}
        }).then(function (response) {
                dispatch({type: NEW_POST, payload: response.data})
            })
            .catch(function (response) {
                console.log(response);
            });
  }
