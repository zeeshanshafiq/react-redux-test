import React, { Component } from 'react'
import PostForm from './PostForm'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'
export class Posts extends Component {
    componentDidMount(){
        this.props.fetchPosts()
    }

    componentWillReceiveProps(nextProps){
      console.log(nextProps)
      if(nextProps.newPost){
        this.props.posts.unshift(nextProps.newPost)
      }
    }

    render() {
    return (
      <div>
        <PostForm/>
        <h1>Posts</h1>
        {this.props.posts.map( post => (
       <div key={post.id}>
         <h3>{post.title}</h3>
         <p>{post.body}</p>
       </div>
        )
      )}
      </div>
    )
  }
}
 
Posts.PropTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}
const mapStateToProps = state => ({
   posts: state.posts.items,
   newPost: state.posts.item
 })

export default connect(mapStateToProps, { fetchPosts } )(Posts) 
