import React, { FC, useState } from 'react'
import IPostItemProps from './type/IPostItemProps';
import MyButton from './UI/button/MyButtonPrimary'
import MyInput from './UI/input/MyInputWithLabel'

interface IPostForm{
    create:(newPost: IPostItemProps) => void;
}

 const PostForm : FC<IPostForm>  = ({create :createPost} ) => {

    const [post,setPost] = useState({title:'',body:''})
    const addNewPost = (event:React.FormEvent<HTMLFormElement>)  =>
    {
        event.preventDefault();
        const newPost ={
            ...post , id:Date.now()
        }
        createPost(newPost);
        setPost({title:'',body:''});
    }
  return (
   <form>
        <MyInput 
        onChange = {(e:React.KeyboardEvent<HTMLInputElement>) => setPost({...post,title:e.currentTarget.value})}
        value ={post.title}
        type="text" 
        placeholder='Назавание'>          
        </MyInput>
        <MyInput
        onChange = {(e:React.KeyboardEvent<HTMLInputElement>) => setPost({...post,body:e.currentTarget.value})}
        type="text"
        value ={post.body}
        placeholder='Описание '></MyInput>
        <MyButton onClick={addNewPost} >Создать пост</MyButton>
    </form>
   
  )
}
export default PostForm;
