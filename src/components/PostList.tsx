import React, { FC } from 'react'
import Postitem from './postItem'
import IPostItemProps from './type/IPostItemProps'
import IPostList from './type/IPostList'

const PostList :FC<IPostList> = (postsA) => {
  return (
    <div>    
      <h1 style={{textAlign:'center'}}>{postsA.title}</h1>
      {postsA.items.map((post,index)=> 
          <Postitem number={index} key={post.id} id={post.id} title={post.title} body={post.body}/>
      )}
    </div>

  )
}

export default PostList