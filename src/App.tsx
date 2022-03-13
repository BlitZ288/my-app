import React ,{useState, ChangeEvent} from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import IPostItemProps from './components/type/IPostItemProps';
import MyButton from './components/UI/button/MyButtonPrimary';
import MyInput from './components/UI/input/MyInputWithLabel';
import './styles/App.css';

function App() {

  const [posts , setPosts] = useState<IPostItemProps[]>([
    {id:1, title:'JavaScript', body :'Description' },
    {id:2, title:'JavaScript2', body :'Description3' },
    {id:3, title:'JavaScript3', body :'Description4' }
  ])
   const [posts2 , setPosts2] = useState<IPostItemProps[]>([
    {id:1, title:'C#', body :'Description' },
    {id:2, title:'C#', body :'Description3' },
    {id:3, title:'C#', body :'Description4' }
  ])
 

  const createPost = (newPost:IPostItemProps) =>{
    setPosts([...posts, newPost]);
  }

  return (
    <div className="App">   
      <PostForm  create={createPost} />
      <PostList  items={posts} title={"JS"}></PostList>
      <PostList items={posts2} title={"C#"}></PostList>
      
    </div>
  );
}

export default App;
